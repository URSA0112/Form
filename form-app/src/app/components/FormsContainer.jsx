"use client";
import { useState, useEffect } from "react";
import { Form1 } from "./1";
import { Form2 } from "./2";
import { Form3 } from "./3";
import { Header } from "./header";


export function FormContainer() {

    const [currentStep, setCurrentStep] = useState(0)
    const Forms = [Form1, Form2, Form3][currentStep]



    function handleContinueClick() {

        setCurrentStep(currentStep + 1)
        return



    }


    function handleBackClick() {
        if (currentStep != 0) { setCurrentStep(currentStep - 1) }
        return 

    }
 
    return (
        <>
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-200  w-[480px] h-[655px] p-[32px]  rounded-lg">
                <Header></Header>
                <Forms></Forms>
                <div className="absolute bottom-[32px] flex gap-5">
                    <button onClick={handleBackClick} className="bg-black text-white rounded-md w-40 h-10">back</button>
                    <button onClick={handleContinueClick} className="bg-black text-white rounded-md w-40 h-10">continue</button>
                </div>
            </div>

        </>
    );

}