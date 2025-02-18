export function Buttons({ Forms, currentStep, setCurrentStep }) {
    //Button style <--
    const BackButtonStyle = "bg-slate-900 text-white rounded-md w-20 h-10"
    const ContinueBbuttonStyle = `bg-black text-white rounded-md  h-10 ${currentStep == Forms.indexOf(Forms[0]) ? " w-[416px]" : "w-80"}`
    // -->
    function handleContinueClick() {
        if (currentStep < Forms.length - 1)
            setCurrentStep(currentStep + 1)
        return
    }
    function handleBackClick() {
        if (currentStep != 0) { setCurrentStep(currentStep - 1) }
        return
    }
    function BackButton() {
        if (currentStep > 0)
            return (
                <button onClick={handleBackClick} className={BackButtonStyle}>back</button>
            )
    }
    return (
        <div className="absolute bottom-[32px] flex gap-5">
            <BackButton></BackButton>

            <button onClick={handleContinueClick} className={ContinueBbuttonStyle}>{`Continue ${currentStep + 1} /  ${Forms.length}`}</button>

        </div>)
}