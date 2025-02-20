import { useEffect } from "react";

export function Form1({ data, setData, error, handleOnSubmit }) {
  function onchange(e) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  // style <--
  const labelStyle = " h-[16px] text-[14px] font-normal";
  const inputStyle = " h-[40px] w-[100%] rounded-md pl-4 text-[18px]";
  const inputContainerStyle = "w-[416px] h-[68px] ";
  const errorStyle = "text-red-500 text-[12px] ";
  //-->
  
  return (
    <form
      onSubmit={handleOnSubmit}
      className="w-[416px] h-[auto] text-[20px] text-black flex flex-col gap-[20px] mt-[28px]"
    >
      <div id="label-container" className={inputContainerStyle}>
        <label className={labelStyle}>First name </label>
        <br />
        <input
          name="firstName"
          value={data.firstName}
          onChange={onchange}
          type="text"
          placeholder="Your Firsrt name"
          className={inputStyle}
        />
        {error.firstName && <p className={errorStyle}>{error.firstName}</p>}
      </div>

      <div id="label-container" className={inputContainerStyle}>
        <label className={labelStyle}>Last name </label>
        <br />
        <input
          name="lastName"
          value={data.lastName}
          onChange={onchange}
          type="text"
          placeholder=" Your Last name"
          className={inputStyle}
        />
        {/* {error.firstName && <p className={errorStyle}>{error.lastName}</p>} */}
      </div>

      <div id="label-container" className={inputContainerStyle}>
        <label className={labelStyle}>User name </label>
        <br />
        <input
          name="userName"
          value={data.userName}
          onChange={onchange}
          type="text"
          placeholder="Your User name"
          className={inputStyle}
        />
        {/* {error.firstName && <p className={errorStyle}>{error.userName}</p>} */}
      </div>
    </form>
  );
}
