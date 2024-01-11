import { reservationSchema } from "../../schema/reservation";
import { useFormik } from "formik";
{
}

const { default: Input } = require("../form/Input");
const { default: Title } = require("../ui/Title");


const Reservation = () => {

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        persons: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });


  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "İsim Soyisim",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
      
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Telefon Numarası",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Mail Adresi",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "Kişi Sayısı",
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[40px] mb-10">Rezervasyon</Title>
      <div className="flex justify-between flex-wrap-reverse gap-10">
      <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (
               <Input
               key={input.id}
               {...input}
               onChange={handleChange}
               onBlur={handleBlur}
             />
            ))}
          </div>
          <button className="btn-primary mt-4" type="submit">
            Onayla
          </button>
        </form>
        
        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173142.5457023997!2d26.737453769237018!3d39.04331722018323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c12401f9138cbd%3A0xbb5a239b8573b05e!2zR8OWTEjEsFNBUiBSRVNUQVVSQU5U!5e0!3m2!1str!2str!4v1704712267482!5m2!1str!2str" 
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Reservation;