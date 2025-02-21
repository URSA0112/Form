import { useEffect } from "react";

export function Buttons({ Forms, currentStep, setCurrentStep, handleOnSubmit, steps }) {
  //Button style <--
  const BackButtonStyle = "bg-slate-900 text-white rounded-md w-20 h-10";
  const ContinueBbuttonStyle = `bg-black text-white rounded-md  h-10 text-[20px] flex gap-[17%] items-center  ${currentStep === Forms.indexOf(Forms[0]) ? " w-[416px]" : "w-80"
    }`;
  // -->

  // Backbutton as Component <--
  function reminder() {

    if (currentStep < 3 && steps[currentStep].every((each) => each.trim() !== "")  ) {
      return <p className="ml-10">😍</p>
    }
    else { return <p className="ml-10">😇</p> }
  }


  function BackButton() {
    if (currentStep > 0)
      return (
        <button onClick={handleBackClick} className={BackButtonStyle}>
          back
        </button>

      );
  }
  //-->
  function handleBackClick() {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }

  }

  return (
    <div className="absolute bottom-[32px] flex gap-5 text-center">
      <BackButton></BackButton>

      <button
        onClick={handleOnSubmit}
        className={ContinueBbuttonStyle}
      >

        {reminder()} {currentStep < 3 ? `Continue ${currentStep + 1} /  ${Forms.length-1}`:" Submitted ✅"} </button>

    </div>
  );
}
