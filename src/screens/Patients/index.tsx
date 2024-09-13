import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import { useState } from "react";
import { FlatList } from "react-native";

import { Container, Form, HeaderList, NumberOfPatients } from "./style";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PatientsCard } from "@components/PatientsCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  group: string;
};

export function Patients() {
  const [days, setDays] = useState("SEGUNDA");
  const [Patients, setPatients] = useState(["Enio", "Lucas", "João"]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione seus pacientes" />
      <Form>
        <Input placeholder="Nome do paciente" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === days}
              onPress={() => setDays(item)}
            />
          )}
          horizontal
        />

        {/* <NumberOfPatients>{Patients.length}</NumberOfPatients> */}
      </HeaderList>
      <FlatList
        data={Patients}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PatientsCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
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
