import "../App.css";
import Form from "./Form";
import axios from "axios";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "../validation/formSchema";
import User from "./User";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  terms_of_service: false,
};
const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  terms_of_service: false,
};
const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log(res.data);
        setUsers([...users, res.data]);
        //console.log(`post return ${users}`);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        setFormValues(initialFormValues);
        console.log("errrrrrrr");
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: " ",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms_of_service: formValues.termsOfService,
    };
    postNewUser(newUser);
  };
  //validation
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  return (
    <div className="App">
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {users.map((user) => {
        return <User key={user.id} details={user} />;
      })}
    </div>
  );
}

export default App;
