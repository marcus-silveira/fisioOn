import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupsGetAll() {
  try {
    const groups = await AsyncStorage.getItem(GROUP_COLLECTION);
    if (groups) {
      return JSON.parse(groups);
    }
    return [];
  } catch (error) {
    throw error;
  }
}
