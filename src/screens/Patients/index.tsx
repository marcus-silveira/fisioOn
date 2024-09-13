import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import { Container, Form } from "./style";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

export function Patients() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Nome da Clínica" subtitle="adicione seus pacientes" />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
