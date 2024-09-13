import { patientsGetByGroup } from "./patientsGetByGroup";

export async function patientsGetByGroupAndDay(group: string, day: string) {
  try {
    const storage = await patientsGetByGroup(group);

    const patients = storage.filter((patient) => patient.day === day);

    return patients;
  } catch (error) {
    throw error;
  }
}
