import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .required("Adınızı soyadınızı yazınız")
    .min(3, "En az 3 karekter olmalıdır."),
  phoneNumber: Yup.string()
    .required("Telefon numaranızı yazınız")
    .min(10, "En az 10 karakter olmalıdır"),
  email: Yup.string().required("Email zorunludur").email("Geçerli bir email giriniz"),
  desc: Yup.string().required("Yorum yazmak zorunludur."),
  // date: Yup.string().required("Date is required."),
});