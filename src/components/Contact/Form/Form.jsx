import { FormBox, FormInput } from "./Form.styled";
import Icons from "../../../images/sprite.svg";
import { Formik, Field } from "formik";

import { FormError } from "../../../utils/FormError";
import ContactsFormSchema from "../../../utils/Schema";
const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const Form = () => {
  const handleSubmit = (values, actions) => {
    alert("Thanks for submitting");
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactsFormSchema}
    >
      {({ errors }) => (
        <FormBox>
          <label>
            <span>* Full name:</span>

            <FormInput
              type="text"
              name="name"
              placeholder="John Rosie"
              errors={errors.name}
            />

            <FormError name="name" />
          </label>
          <label>
            <span> * E-mail:</span>
            <FormInput
              type="email"
              name="email"
              placeholder="johnrosie@gmail.com"
              errors={errors.email}
            />
            <FormError name="email" />
          </label>
          <label>
            <span> * Phone:</span>
            <FormInput
              type="number"
              name="phone"
              placeholder="380961234567"
              errors={errors.phone}
            />
            <FormError name="phone" />
          </label>
          <label>
            <span> Message:</span>
            <Field
              component="textarea"
              type="text"
              name="message"
              placeholder="My message...."
            />
          </label>
          <button type="submit">
            Send{" "}
            <span>
              <svg width="16px" height="16px" aria-labelledby="add">
                <use href={Icons + "#icon-arrow-right"}></use>
              </svg>
            </span>
          </button>
        </FormBox>
      )}
    </Formik>
  );
};
