export function Form2(){
  
    return(
        <form className=" w-[416px] h-[auto] text-[20px] text-black flex flex-col gap-[12px] mt-[28px]" >
            <div id="label-container" className="w-[416px] h-[68px] ">
                <label className=" h-[16px] text-[14px] font-normal ">E-mail </label><br />
                <input type="text" placeholder="Your e-mail"
                    className="  h-[40px] w-[100%] rounded-md pl-4 text-[18px]" />
            </div>

            <div id="label-container" className="w-[416px] h-[68px] ">
                <label className=" h-[16px] text-[14px] font-normal ">Phone number</label><br />
                <input type="text" placeholder=" Your Phone number"
                    className="  h-[40px] w-[100%] rounded-md pl-4 text-[18px]" />
            </div>
            
            <div id="label-container" className="w-[416px] h-[68px] ">
                <label className=" h-[16px] text-[14px] font-normal ">Password </label><br />
                <input type="text" placeholder="Your Password "
                    className="  h-[40px] w-[100%] rounded-md pl-4 text-[18px]" />
            </div>

            <div id="label-container" className="w-[416px] h-[68px] ">
                <label className=" h-[16px] text-[14px] font-normal ">Confirm password </label><br />
                <input type="text" placeholder="Confirm password"
                    className="  h-[40px] w-[100%] rounded-md pl-4 text-[18px]" />
            </div>

        </form>
    )
}