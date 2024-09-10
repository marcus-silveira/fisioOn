import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight
        title="Clínicas"
        subtitle="Escolha uma clínica para ver os pacientes"
      />

      <GroupCard title="Alfa" />
    </Container>
  );
}
