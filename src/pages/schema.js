import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email().required("Required"),
  password: yup
    .string()
    .min(6, "Password must be more than 5 characters")
    .required("Required"),
});
