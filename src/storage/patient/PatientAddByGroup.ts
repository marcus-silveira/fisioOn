import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PATIENT_COLLECTION } from "@storage/storageConfig";

import { PatientStorageDTO } from "./PatientStorageDTO";
import { patientsGetByGroup } from "./patientsGetByGroup";

export async function patientAddByGroup(
  newPatient: PatientStorageDTO,
  group: string
) {
  try {
    const storedPatients = await patientsGetByGroup(group);

    const patientAlreadyExists = storedPatients.filter(
      (patient) =>
        patient.name.trim() === newPatient.name.trim() &&
        patient.day === newPatient.day
    );

    if (patientAlreadyExists.length > 0) {
      throw new AppError("Este paciente já foi adicionado.");
    }

    const storage = JSON.stringify([...storedPatients, newPatient]);

    await AsyncStorage.setItem(`${PATIENT_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
