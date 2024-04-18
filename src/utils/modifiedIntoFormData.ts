export const modifiedIntoFormData = (values: any) => {
  const object = { ...values };
  const data = JSON.stringify(object);
  const formData = new FormData();
  formData.append("data", data);

  return formData;
};
