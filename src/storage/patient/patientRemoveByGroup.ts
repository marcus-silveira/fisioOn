import AsyncStorage from "@react-native-async-storage/async-storage";

import { PATIENT_COLLECTION } from "@storage/storageConfig";
import { patientsGetByGroup } from "./patientsGetByGroup";

export async function patientRemoveByGroup(patientName: string, group: string) {
  try {
    const storage = await patientsGetByGroup(group);

    const filtered = storage.filter((patient) => patient.name !== patientName);

    const patients = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${PATIENT_COLLECTION}-${group}`, patients);
  } catch (error) {
    throw error;
  }
}
