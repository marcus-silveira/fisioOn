import { useState, useCallback } from "react";
import { Alert, FlatList } from "react-native";

import { Header } from "@components/Header";
import { Container } from "./styles";
import { Loading } from "@components/Loading";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState([]);
  const navigation = useNavigation();

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
      setIsLoading(false);
    } catch (error) {
      Alert.alert("Turmas", "Não foi possível carregar as turmas");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleNewGroup() {
    navigation.navigate("new");
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("patients", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight
        title="Clínicas"
        subtitle="Abaixo estão listadas todas as clínicas cadastradas"
      />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Nenhuma clínica cadastrada" />
          )}
        />
      )}

      <Button title="Adicionar clínica" onPress={handleNewGroup} />
    </Container>
  );
}
