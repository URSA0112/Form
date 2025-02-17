export function Form3(){

    return(
        <form className=" w-[416px] h-[auto] text-[20px] text-black flex flex-col gap-[12px] mt-[28px]" >
            <div id="label-container" className="w-[416px] h-[68px] ">
                <label className=" h-[16px] text-[14px] font-normal ">Date of birth</label><br />
                <input type="date" placeholder="Your birthday"
                    className="  h-[40px] w-[100%] rounded-md pl-4 text-[18px]" />
            </div>
        </form>
    )
}