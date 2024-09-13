import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import { useState, useEffect } from "react";
import { FlatList, Alert } from "react-native";

import { Container, Form, HeaderList, NumberOfPatients } from "./style";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PatientsCard } from "@components/PatientsCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { patientAddByGroup } from "@storage/patient/PatientAddByGroup";
import { patientsGetByGroup } from "@storage/patient/patientsGetByGroup";
import { AppError } from "@utils/AppError";
import { patientsGetByGroupAndDay } from "@storage/patient/patientsGetByGroupAndDay";
import { PatientStorageDTO } from "@storage/patient/PatientStorageDTO";

type RouteParams = {
  group: string;
};

export function Patients() {
  const [newPatientName, setNewPatientName] = useState("");
  const [day, setDays] = useState("SEGUNDA");
  const [Patients, setPatients] = useState<PatientStorageDTO[]>([]);

  const route = useRoute();

  const { group } = route.params as RouteParams;

  async function handleAddPatient() {
    if (newPatientName.trim().length === 0) {
      return Alert.alert(
        "Novo paciente",
        "Informe o nome do paciente para adicionar."
      );
    }

    const newPatient = {
      name: newPatientName.trim(),
      day: day,
    };

    try {
      await patientAddByGroup(newPatient, group);
      await fetchPatientsByDay();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo paciente", error.message);
      } else {
        console.log(error);
        Alert.alert("Novo paciente", "Não foi possível adicionar.");
      }
    }
  }

  async function fetchPatientsByDay() {
    try {
      const patientsByDay = await patientsGetByGroupAndDay(group, day);
      setPatients(patientsByDay);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Pacientes",
        "Não foi possível carregar os pacientes da clínica selecionada."
      );
    }
  }
  useEffect(() => {
    fetchPatientsByDay();
  }, [day]);
  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione seus pacientes" />
      <Form>
        <Input
          placeholder="Nome do paciente"
          onChangeText={setNewPatientName}
          autoCorrect={false}
        />
        <ButtonIcon icon="add" onPress={handleAddPatient} />
      </Form>

      <HeaderList>
        <FlatList
          data={["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === day}
              onPress={() => setDays(item)}
            />
          )}
          horizontal
        />

        {/* <NumberOfPatients>{Patients.length}</NumberOfPatients> */}
      </HeaderList>
      <FlatList
        data={Patients}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PatientsCard name={item.name} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pacientes nessa clínica" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          Patients.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover Clínica" type="SECONDARY" />
    </Container>
  );
}
