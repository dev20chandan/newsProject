

export async function validateForm(formData, schema) {
  try {
    await schema.validate(formData, { abortEarly: false });
    return { isValid: true, errors: {} };
  } catch (validationErrors) {
    const newErrors = {};
    validationErrors.inner.forEach((error) => {
      newErrors[error.path] = error.message;
    });
    return { isValid: false, errors: newErrors };
  }
}