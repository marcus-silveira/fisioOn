import { Container, Content, Icon } from "./style";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate("patients", { group });
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
