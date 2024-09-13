import AsyncStorage from "@react-native-async-storage/async-storage";

import { PATIENT_COLLECTION } from "@storage/storageConfig";

import { PatientStorageDTO } from "./PatientStorageDTO";

export async function patientsGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(
      `${PATIENT_COLLECTION}-${group}`
    );

    const patients: PatientStorageDTO[] = storage ? JSON.parse(storage) : [];

    return patients;
  } catch (error) {
    throw error;
  }
}
