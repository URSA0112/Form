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
  }, []);

  // ======

  function handleOnSubmit(e) {
    e.preventDefault();
    let hasError = false;

    if (data.firstName == "") {
      setError((prev) => ({ ...prev, firstName: "hooson baina" }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, firstName: "" }));
    }

    if (!hasError) {
      handleContinueClick(hasError);
    }
  }

  function handleContinueClick(hasError) {
    window.localStorage.setItem("multi-step-form", JSON.stringify(data));

    console.log(error, data);
    // if (currentStep < Forms.length - 1) {
    //   setCurrentStep(currentStep + 1);
    // }
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
        ></Buttons>
      </div>
    </>
  );
}
