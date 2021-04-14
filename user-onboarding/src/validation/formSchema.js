import * as yup from "yup";

export default yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  terms_of_service: yup.boolean(),
});
