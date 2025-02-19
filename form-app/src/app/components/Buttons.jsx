import { useEffect } from "react";

export function Buttons({
  Forms,
  currentStep,
  setCurrentStep,
  data,
  setData,
  handleContinueClick
}) {
  //Button style <--
  const BackButtonStyle = "bg-slate-900 text-white rounded-md w-20 h-10";
  const ContinueBbuttonStyle = `bg-black text-white rounded-md  h-10 ${
    currentStep == Forms.indexOf(Forms[0]) ? " w-[416px]" : "w-80"
  }`;
  // -->

  // Backbutton as Component <--
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
    if (currentStep != 0) {
      setCurrentStep(currentStep - 1);
    }
    return;
  }

  
  useEffect(() => {
    const localSavedData = JSON.parse(
      window.localStorage.getItem("multi-step-form")
    );

    if (!localSavedData) return;

    setData(localSavedData);
  }, []);

  return (
    <div className="absolute bottom-[32px] flex gap-5">
      <BackButton></BackButton>
      <button
        type="submit"
        onClick={handleContinueClick}
        className={ContinueBbuttonStyle}
      >{`Continue ${currentStep + 1} /  ${Forms.length}`}</button>
    </div>
  );
}
