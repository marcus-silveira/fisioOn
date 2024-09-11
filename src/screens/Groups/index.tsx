import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState([]);

  return (
    <Container>
      <Header />
      <Highlight
        title="Clínicas"
        subtitle="Abaixo estão listadas todas as clínicas cadastradas"
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma clínica cadastrada" />
        )}
      />

      <Button title="Adicionar clínica" />
    </Container>
  );
}
