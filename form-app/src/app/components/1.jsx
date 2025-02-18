export function Form1() {
    const labelStyle = " h-[16px] text-[14px] font-normal"
    const inputStyle = " h-[40px] w-[100%] rounded-md pl-4 text-[18px]"
    const inputContainerStyle = "w-[416px] h-[68px] "

    return (
        <form className="w-[416px] h-[auto] text-[20px] text-black flex flex-col gap-[12px] mt-[28px]" >
            <div id="label-container" className={inputContainerStyle}>
                <label className={labelStyle}>First name </label><br />
                <input type="text" placeholder="name"
                    className={inputStyle} />
            </div>

            <div id="label-container" className={inputContainerStyle}>
                <label className={labelStyle}>First name </label><br />
                <input type="text" placeholder="name"
                    className={inputStyle} />
            </div>

            <div id="label-container" className={inputContainerStyle}>
                <label className={labelStyle}>First name </label><br />
                <input type="text" placeholder="name"
                    className={inputStyle} />
            </div>

        </form>

    )
}