"use client";
import { useState, useEffect } from "react";
import { Form1 } from "./1";
import { Form2 } from "./2";
import { Form3 } from "./3";
import { Header } from "./header";
import { Buttons } from "./Buttons";

export function FormContainer() {
  const [currentStep, setCurrentStep] = useState(0);
  const Forms = [Form1, Form2, Form3];
  const Component = Forms[currentStep];

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    birth: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    birth: "",
  });

  useEffect(() => {
    const localSavedData = JSON.parse(
      window.localStorage.getItem("multi-step-form")
    );
    if (!localSavedData) return;
    setData(localSavedData);
  }, [])


  // ======



  function handleOnSubmit(e) {
    e.preventDefault();
    if (data.firstName.trim() === "") {
      setError((prev) => ({ ...prev, firstName: "First name is required" }));

    } else {
      setError((prev) => ({ ...prev, firstName: "" }));
    }

    if (data.lastName.trim() === "") {
      setError((prev) => ({ ...prev, lastName: "Last name is required" }))
    }
    else {
      setError((prev) => ({ ...prev, lastName: "" }))
    }

    if (data.userName.trim() === "") {
      setError((prev) => ({ ...prev, userName: "User name is required" }))
    }
    else {
      setError((prev) => ({ ...prev, userName: "" }))
    }
    if (data.email.trim() === "") {
      setError((prev) => ({ ...prev, email: "Email is required" }))
    }
    else {
      setError((prev) => ({ ...prev, email: "" }))
    }
    if (data.phoneNumber.trim() === "") {
      setError((prev) => ({ ...prev, phoneNumber: "Phone number is required" }))
    }
    else {
      setError((prev) => ({ ...prev, phoneNumber: "" }))
    }
    if (data.password.trim() === "") {
      setError((prev) => ({ ...prev, password: " Password is required" }))
    }
    else {
      setError((prev) => ({ ...prev, password: "" }))
    }
    if (data.confirmPassword.trim() === "") {
      setError((prev) => ({ ...prev, confirmPassword: " Confirm Password is required" }))
    }
    else if (data.password !== data.confirmPassword) {
      setError((prev) => ({ ...prev, confirmPassword: " Confirm Password is not matching" }))
    }
    else {
      setError((prev) => ({ ...prev, confirmPassword: "" }))
    }


    handleContinueClick();
  }


  function handleContinueClick() {
    window.localStorage.setItem("multi-step-form", JSON.stringify(data));

    const steps = {
      0: [data.firstName, data.lastName, data.userName],
      1: [data.email, data.phoneNumber, data.password, data.confirmPassword],
      2: [data.birth]
    };
    console.log(steps[currentStep].every((each) => each.trim() !== ""))

    if (currentStep < Forms.length - 1 && steps[currentStep].every((each) => each.trim() !== "") && data.password === data.confirmPassword) {
      setCurrentStep(currentStep + 1);
    }
  }

  return (
    <>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-200  w-[480px] h-[655px] p-[32px]  rounded-lg">
        <Header></Header>
        <Component
          data={data}
          setData={setData}
          error={error}
          Forms={Forms}
          handleOnSubmit={handleOnSubmit}
        ></Component>
        <Buttons
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          Forms={Forms}
          handleContinueClick={handleContinueClick}
          handleOnSubmit={handleOnSubmit}
          data={data}
          error={error}
        ></Buttons>
      </div>
    </>
  );


}
