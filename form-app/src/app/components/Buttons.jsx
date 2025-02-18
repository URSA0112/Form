export function Buttons({ Forms, currentStep, setCurrentStep, data, setData, canContinue, error }) {
    //Button style <--
    const BackButtonStyle = "bg-slate-900 text-white rounded-md w-20 h-10"
    const ContinueBbuttonStyle = `bg-black text-white rounded-md  h-10 ${currentStep == Forms.indexOf(Forms[0]) ? " w-[416px]" : "w-80"}`
    // -->

    // Backbutton as Component <--
    function BackButton() {
        if (currentStep > 0)
            return (
                <button onClick={handleBackClick} className={BackButtonStyle}>back</button>
            )
    }
    //-->

    function handleBackClick() {
        if (currentStep != 0) { setCurrentStep(currentStep - 1) }
        return
    }

    // Object.values(data).every(value => value !== "")
    function handleContinueClick(e) {


        e.preventDefault();
        if (currentStep < Forms.length - 1 && Object.values(canContinue).every(each => each !== "")) { setCurrentStep(currentStep + 1) }

        // if (e.target.name == "firstName" && e.target.value.trim() == ""
        // ) { error.firstName = " Hooson bnshd" }
        console.log(error)
        return
    }

    return (
        <div className="absolute bottom-[32px] flex gap-5">
            <BackButton></BackButton>
            
            <button type="submit"
                onClick={handleContinueClick}
                className={ContinueBbuttonStyle}>{`Continue ${currentStep + 1} /  ${Forms.length}`}</button>

        </div>)
}