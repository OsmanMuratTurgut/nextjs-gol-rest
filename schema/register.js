import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .required("Ad soyad zorunludur.")
    .min(3, "En az 3 karakter giriniz"),
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  password: Yup.string()
    .required("Şifre zorunludur.")
    .min(5, "Şifre en az 5 karekter olmalıdır."),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   "Büyük harf küçük harf özel karekter ve rakam zorunludur."
    // ),
  confirmPassword: Yup.string()
    .required("Şifre tekrarı zorunludur")
    .oneOf([Yup.ref("password"), null], "Şifreler uyuşmuyor."),
});