"use client";
import { useState, useEffect } from "react";
import { Form1 } from "./1";
import { Form2 } from "./2";
import { Form3 } from "./3";
import { Header } from "./header";
import { Buttons } from "./Buttons";


export function FormContainer() {
    const [currentStep, setCurrentStep] = useState(0)
    const Forms = [Form1, Form2, Form3]
    const Component = Forms[currentStep]

    const [data, setData] = useState(
        {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            birth: "",
        }
    )
    const [error, setError] = useState(
        {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            birth: "",

        })
    const steps = {
        1: [data.firstName, data.lastName, data.userName],
        2: [data.email, data.phoneNumber, data.password, data.confirmPassword],
        3: [data.birth]
    }
    const canContinue = steps[currentStep + 1]
    // console.log(canContinue)

    return (
        <>
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-200  w-[480px] h-[655px] p-[32px]  rounded-lg">
                <Header></Header>
                <Component
                    data={data} setData={setData}
                    error={error} setError={setError}
                ></Component>
                <Buttons
                    currentStep={currentStep}
                    Forms={Forms}
                    setCurrentStep={setCurrentStep}
                    data={data} setData={setData}
                    steps={steps}
                    canContinue={canContinue}
                    error={error} setError={setError}
                ></Buttons>
            </div>

        </>
    );

}