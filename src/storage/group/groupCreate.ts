import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "utils/AppError";

export async function groupCreate(newGroupName: string) {
  try {
    const storedGroups = await groupsGetAll();
    const storage = [...storedGroups, newGroupName];

    const groupAlreadyExists = storedGroups.includes(newGroupName);
    if (groupAlreadyExists) {
      throw new AppError("Group already exists");
    }

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(storage));
  } catch (error) {
    throw error;
  }
}
