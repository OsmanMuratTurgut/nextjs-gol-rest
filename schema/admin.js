import * as Yup from "yup";

export const adminSchema = Yup.object({
  username: Yup.string()
    .required("Kullanıcı adı zorunludur")
    .min(3, "Kullanıcı adı en az 3 karekter olmalıdır."),
  password: Yup.string()
    .required("Şifre zorunludur.")
    .min(5, "Şifre en az 5 karekter olmalıdır.")
    // .min(8, "Password must be at least 8 characters.")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   "Password must contain at least one uppercase, one lowercase, one number and one special character."
    // ),
});