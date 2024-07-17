import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactsFormSchema = Yup.object().shape({
  name: Yup.string()
    .matches("^([^0-9]*)$", "Wrong Fullname")
    .min(3, "Too Short!")
    .max(70, "Too Long!")
    .required("Enter FullName"),
  email: Yup.string()
    .email("Wrong Email")
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Wrong Email")
    .required("Enter Email"),
  phone: Yup.string()
    .matches(phoneRegExp, "Wrong Phone")
    .min(8, "too short")
    .max(12, "too long")
    .required("Enter Phone"),
  message: Yup.string().max(256, "Too Long!"),
});

export default ContactsFormSchema;
