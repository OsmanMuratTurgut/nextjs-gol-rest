import * as Yup from "yup";

export const newPasswordSchema = Yup.object({
  password: Yup.string()
    .required("Şifre zorunludur.")
    .min(5, "Şifre en az 5 karakter olmaldır."),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   "Password must contain at least one uppercase, one lowercase, one number and one special character."
    // ),
  confirmPassword: Yup.string()
    .required("Şifre zorunludur.")
    .oneOf([Yup.ref("password"), null], "Şifreler aynı olmalıdır."),
});