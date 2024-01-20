import * as Yup from "yup";

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .required("Ad Soyad zorunludur")
    .min(3, "En az 3 karekter"),
  phoneNumber: Yup.string()
    .required("Telefon numarası zorunludur.")
    .min(10, "Telefon numarası en az 10 karekter olmalıdır."),
  email: Yup.string().required("Email zorunludur.").email("Geçerli bir email giriniz."),
  address: Yup.string().required("Address zorunludur."),
  // job: Yup.string().required("Job is required."),
  // bio: Yup.string().required("Bio is required."),
});