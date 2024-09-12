import { Container, Content, Icon } from "./style";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Cadastrar Clínica"
          subtitle="Adicione clínicas para registrar os pacientes"
        />

        <Input placeholder="Informe o nome da Clínica" />

        <Button style={{ marginTop: 20 }} title="Criar" />
      </Content>
    </Container>
  );
}
