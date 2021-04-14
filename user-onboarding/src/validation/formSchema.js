import * as yup from "yup";

export default yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Enter a Valid Email")
    .required("Email is required"),
  password: yup.string().required().min(7),
  terms_of_service: yup.boolean().oneOf([true]),
});
