import { Container, Content, Icon } from "./style";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (!group.trim()) {
        Alert.alert("Cadastrar Clínica", "Informe o nome da clínica");
        return;
      }
      await groupCreate(group);
      navigation.navigate("patients", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Cadastrar Clínica", "Clínica já cadastrada");
      } else {
        Alert.alert("Cadastrar Clínica", "Erro ao cadastrar clínica");
        console.error(error);
      }
    }
  }
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Cadastrar Clínica"
          subtitle="Adicione clínicas para registrar os pacientes"
        />

        <Input
          onChangeText={setGroup}
          placeholder="Informe o nome da Clínica"
        />

        <Button style={{ marginTop: 20 }} title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}
