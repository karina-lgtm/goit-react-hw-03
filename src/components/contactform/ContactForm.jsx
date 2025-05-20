import { useId } from "react";
import css from "./ContactForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  contactname: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too Long!")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be valid telephon!")
    .required("Required"),
});

const initialValues = {
  contactname: "",
  number: "",
};

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const telId = useId();

  const handleSubmit = (value, actions) => {
    addContact({
      name: value.contactname,
      number: value.number,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.blockinput}>
          <label htmlFor={nameFieldId} className={css.text}>
            Name
          </label>
          <Field
            id={nameFieldId}
            className={css.item}
            type="text"
            name="contactname"
          />
          <ErrorMessage
            className={css.error}
            name="contactname"
            component="span"
          />
        </div>

        <div className={css.blockinput}>
          <label htmlFor={telId} className={css.text}>
            Phone
          </label>
          <Field id={telId} className={css.item} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
