import {Field, Form, FormikErrors, FormikProps, withFormik} from "formik";
import {Button, TextField}                                  from "@material-ui/core";
import {validateEmail}                                      from "../../lib/validators";
import React, {useState}                                    from "react";
import {Redirect}                                           from "react-router-dom";
import firebase                                             from "firebase";
import {withBaseRoute}                                      from "../../lib/with-base-route";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

interface OtherProps {
  baseRoute?: string
}

const InnerForm = (props: OtherProps & FormikProps<FormValues> & any) => {
  const {touched, errors, isSubmitting} = props;
  const [showRedirect, setShowRedirect] = useState<boolean>(false);
  if (showRedirect)
    return <Redirect to="/auth/login"/>;
  return (
    <Form autoComplete="off">
      <div className="form-field">
        <h4>Register</h4>
      </div>
      <div className="form-field">
        <Field type="email" name="email" component={TextField} label="Email Address"/>
        {touched.email && errors.email && <div>{errors.email}</div>}
      </div>
      <div className="form-field">
        <Field type="password" name="password" component={TextField} label="New Password"/>
        {touched.password && errors.password && <div>{errors.password}</div>}
      </div>
      <div className="form-field">
        <Field type="password" name="confirmPassword" component={TextField} label="Confirm Password"/>
        {touched.confirmPassword && errors.confirmPassword && <div>{errors.confirmPassword}</div>}
      </div>
      <div className="form-field buttons">
        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
          Register
        </Button>
        <div className="space"/>
        <Button variant="text" color="secondary" type="button" disabled={isSubmitting}
                onClick={() => setShowRedirect(true)}>
          Already have an account?
        </Button>
      </div>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
}

// Wrap our form with the withFormik HoC
const Register = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: () => {
    return {
      email          : '',
      password       : '',
      confirmPassword: ''
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    const emailError                     = validateEmail('Email', values.email, true);
    if (emailError)
      errors.email = emailError;

    return errors;
  },

  handleSubmit: async (values, bag) => {
    // do submitting things
    const result = await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
    console.log(result);
    bag.setSubmitting(false);
  },
})(withBaseRoute(InnerForm));
export default Register;
