"use client";
import { useState, useEffect } from "react";
import { Form1 } from "./1";
import { Form2 } from "./2";
import { Form3 } from "./3";
import { Form4 } from "./4";
import { Header } from "./header";
import { Buttons } from "./Buttons";

export function FormContainer() {
  const [currentStep, setCurrentStep] = useState(0);
  const Forms = [Form1, Form2, Form3, Form4];
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
    img: ""
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
    img: ""
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
    let isValid = false

    if (data.firstName.trim() === "") {
      setError((prev) => ({ ...prev, firstName: "First name is required" }));

    } else {
      setError((prev) => ({ ...prev, firstName: "" }));
      isValid = true;
    }

    if (data.lastName.trim() === "") {
      setError((prev) => ({ ...prev, lastName: "Last name is required" }));

    } else {
      setError((prev) => ({ ...prev, lastName: "" }));
      isValid = true;
    }

    if (data.userName.trim() === "") {
      setError((prev) => ({ ...prev, userName: "User name is required" }));

    } else {
      setError((prev) => ({ ...prev, userName: "" }));
      isValid = true;
    }

    if (data.password.trim() === "") {
      setError((prev) => ({ ...prev, password: "Password is required" }));

    } else {
      setError((prev) => ({ ...prev, password: "" }));
      isValid = true;
    }

    if (data.confirmPassword.trim() === "") {
      setError((prev) => ({ ...prev, confirmPassword: "Confirm Password is required" }));

    } else if (data.password !== data.confirmPassword) {
      setError((prev) => ({ ...prev, confirmPassword: "Confirm Password does not match" }));

    } else {
      setError((prev) => ({ ...prev, confirmPassword: "" }));
      isValid = true;
    }

    if (data.birth === "") {
      setError((prev) => ({ ...prev, birth: "Birth date is required" }));

    } else if (new Date().getFullYear() - new Date(data.birth).getFullYear() < 18) {
      setError((prev) => ({ ...prev, birth: "You must be at least 18 years old" }));

    } else {
      setError((prev) => ({ ...prev, birth: "" }));
      isValid = true;
    }

    if (data.img === "") {
      setError((prev) => ({ ...prev, img: "Image is required" }));

    } else {
      setError((prev) => ({ ...prev, img: "" }));
      isValid = true;
    }

    if (data.email.trim() === "") {
      setError((prev) => ({ ...prev, email: "Email is required" }));
     

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError((prev) => ({ ...prev, email: "Invalid email format" }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, email: "" }));
      isValid = true;
    }

    if (data.phoneNumber.trim() === "") {
      setError((prev) => ({ ...prev, phoneNumber: "Phone number is required" }));

    } else if (!/^\d{8,15}$/.test(data.phoneNumber)) {
      setError((prev) => ({ ...prev, phoneNumber: "Invalid phone number" }));
      isValid = false;


    } else {
      setError((prev) => ({ ...prev, phoneNumber: "" }));
      isValid = true;
    }

    if (isValid) {
      handleContinueClick();
    }
  }
  const steps = {
    0: [data.firstName, data.lastName, data.userName],
    1: [data.email, data.phoneNumber, data.password, data.confirmPassword],
    2: [data.birth, data.img],
  };

  function handleContinueClick() {
    window.localStorage.setItem("multi-step-form", JSON.stringify(data));

    if (currentStep < Forms.length - 1
      && steps[currentStep].every((each) => each.trim() !== "")
      && data.password === data.confirmPassword) {
      setCurrentStep(currentStep + 1);
    }
  }

  return (
    <>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-br from-slate-100 to-slate-200 shadow-xl w-[480px] h-[655px] p-[32px] rounded-2xl border border-gray-300">
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
          steps={steps}
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
