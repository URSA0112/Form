export function Form2({ data, setData, handleOnSubmit, error }) {

    const inputContainerStyle = "w-[416px] h-[68px] "
    const labelStyle = " h-[16px] text-[14px] font-normal "
    const inputStyle = "  h-[40px] w-[100%] rounded-md pl-4 text-[18px]"
    const errorStyle = "text-red-500 text-[12px] ";

    function onchange(e) {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <form onSubmit={handleOnSubmit}
            className=" w-[416px] h-[auto] text-[20px] text-black flex flex-col gap-[20px] mt-[28px]" >
            <div id="label-container" className={inputContainerStyle}>
                <label className={labelStyle}>E-mail </label><br />
                <input
                    name="email"
                    value={data.email}
                    onChange={onchange}
                    type="text"
                    placeholder="Your e-mail"
                    className={inputStyle} />
                {error.email && <p className={errorStyle}>{error.email}</p>}
            </div>

            <div id="label-container" className={inputContainerStyle}>
                <label className={labelStyle}>Phone number</label><br />
                <input
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={onchange}
                    type="text"
                    placeholder=" Your Phone number"
                    className={inputStyle} />
                {error.phoneNumber && <p className={errorStyle}>{error.phoneNumber}</p>}
            </div>

            <div id="label-container" className={inputContainerStyle}>
                <label className={labelStyle}>Password </label><br />
                <input
                    name="password"
                    value={data.password}
                    onChange={onchange}
                    type="text"
                    placeholder="Your Password "
                    className={inputStyle} />
                      {error.password && <p className={errorStyle}>{error.password}</p>}
            </div>

            <div id="label-container" className={inputContainerStyle}>
                <label className={labelStyle}>Confirm password </label><br />
                <input
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={onchange}
                    type="text"
                    placeholder="Confirm password"
                    className={inputStyle} />
                      {error.confirmPassword && <p className={errorStyle}>{error.confirmPassword}</p>}
            </div>

        </form>
    )
}