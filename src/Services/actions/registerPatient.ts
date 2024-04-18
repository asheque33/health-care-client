"use server";
export const registerPatient = async (formData: FormData) => {
  const response = await fetch(
    `${process.env.BACKEND_BASE_URL}/user/create-patient`,
    {
      method: "POST",
      body: formData,
      cache: "no-store",
    }
  );
  const patientInfo = await response.json();
  console.log(patientInfo);
  return patientInfo;
};
