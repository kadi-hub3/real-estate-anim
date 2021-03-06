import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import { Section, TextSection } from "./FormComponent.styles";
import { Button } from "../Button";
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}></label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div className="">{meta.error}</div> : null}
    </>
  );
};
const CheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

const FormComponent = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
        acceptedTerms: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must be at least 3 characters long")
          .max(45, "Must be  15 characters long or less")
          .required("Make sure to enter your name"),
        email: Yup.string()
          .email("Make sure to enter a valid email address")
          .required("Make sure to enter your email address"),
        phone: Yup.string().max("Make sure to enter a valid phone number"),
        message: Yup.string()
          .max(200, "Must be  200 characters long or less")
          .required("Make sure to enter your message"),
        acceptedTerms: Yup.boolean()
          .required("Required")
          .oneOf([true], "To proceed, you must first accept the terms"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 3000);
      }}
    >
      {(props) => (
        <Section>
          <Form>
            <h1>
              <span>Contact u</span>s for further inquiries
            </h1>
            <TextSection>
              <TextInput
                label="Name"
                name="name"
                type="text"
                placeholder="Enter your first name"
              />
              <TextInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email "
              />
              <TextInput
                label="Phone"
                name="number"
                type="text"
                placeholder="Enter your phone number (optional) "
              />
              <TextInput
                label="Message"
                name="message"
                type="text"
                placeholder="Leave your message  "
              />
              <CheckBox name="acceptedTerms">
                <p>
                  By submitting this form, you confirm that you have read and
                  agree to our Privacy Statement
                </p>
              </CheckBox>
              <Button primary="true" big="true" type="submit">
                {props.isSubmitting ? "Loading.." : "Submit"}
              </Button>
            </TextSection>
          </Form>
        </Section>
      )}
    </Formik>
  );
};

export default FormComponent;
