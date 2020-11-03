import React, { useState } from "react";
import Input from "../../UI/Form/Input/Input";
import Textarea from "../../UI/Form/Textarea/Textarea";
import styles from "./Form.module.css";
import Button from "./../../UI/Form/Button/Button";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState({
    value: "",
    isValid: false,
  });
  const [phone, setPhone] = useState({
    value: "",
    isValid: false,
  });
  const [email, setEmail] = useState({
    value: "",
    isValid: false,
  });
  const [message, setMessage] = useState({
    value: "",
    isValid: false,
  });
  const [valid, setValid] = useState(false);

  const setInputValue = (e) => {
    const target = e.target;

    if (target.id === "name") {
      const nameValidity = checkValid(target.value, false, false);
      checkFormButton(
        nameValidity,
        phone.isValid,
        email.isValid,
        message.isValid
      );
      setName({
        value: target.value,
        isValid: nameValidity,
      });
    } else if (target.id === "phone") {
      const phoneValidity = checkValid(target.value, true, false);
      checkFormButton(
        name.isValid,
        phoneValidity,
        email.isValid,
        message.isValid
      );
      setPhone({
        value: target.value,
        isValid: phoneValidity,
      });
    } else if (target.id === "email") {
      const emailValidity = checkValid(target.value, false, true);
      checkFormButton(
        name.isValid,
        phone.isValid,
        emailValidity,
        message.isValid
      );
      setEmail({
        value: target.value,
        isValid: emailValidity,
      });
    } else if (target.id === "message") {
      const messageValidity = checkValid(target.value, false, false);
      checkFormButton(
        name.isValid,
        phone.isValid,
        email.isValid,
        messageValidity
      );
      setMessage({
        value: target.value,
        isValid: messageValidity,
      });
    }
  };

  const checkValid = (value, isNumber, isEmail) => {
    if (value.trim() === "") {
      // console.log("is empty return");
      return false;
    }
    if (isNumber && !/^\d{10}$/.test(value)) {
      // console.log("is not Number");
      return false;
    }
    if (
      isEmail &&
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      // console.log("is not email");
      return false;
    }

    return true;
  };

  const checkFormButton = (nameValid, phoneValid, emailValid, messageValid) => {
    const isValid = nameValid && phoneValid && emailValid && messageValid;
    if (isValid !== valid) {
      setValid(isValid);
    }
  };

  const history = useHistory();
  const submitForm = (e) => {
    e.preventDefault();
    if (!valid) {
      return;
    }
    const newLine = "%0d%0a";
    let emailMessage = `Name: ${name.value.capita}${newLine}Phone Number: ${phone.value}${newLine}E-Mail: ${email.value}${newLine}${newLine}${message.value}`;
    window.open(
      `mailto:transpotaxi@gmail.com?subject="Transpo Taxi Contact Me Mail"&body=${emailMessage}`
    );
    history.push("/");
  };

  return (
    <form className={styles.Form} onSubmit={submitForm} autoComplete="off">
      <Input
        labelText="Name"
        id="name"
        value={name.value}
        setValue={setInputValue}
        type="text"
        invalid={!name.isValid}
      />
      <Input
        labelText="Phone"
        id="phone"
        value={phone.value}
        setValue={setInputValue}
        type="text"
        invalid={!phone.isValid}
      />
      <Input
        labelText="Email"
        id="email"
        value={email.value}
        setValue={setInputValue}
        type="text"
        invalid={!email.isValid}
      />
      <Textarea
        labelText="Message"
        id="message"
        value={message.value}
        setValue={setInputValue}
        type="text"
        invalid={!message.isValid}
      />
      <Button disabled={!valid} />
    </form>
  );
};

export default Form;
