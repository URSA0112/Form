export function Form3({data,setData}){

function onchange(e){
    setData((prev)=>({...prev,[e.target.name]:e.target.value}))
}

function handleImageChange(e){
const file = e.target.files[0]
if(file)
{
    const imgURL = URL.createObjectURL(file);
    setData((prev)=>({...prev, img:imgURL}))
}}


    return(
        <form className=" w-[416px] h-[auto] text-[20px] text-black  mt-[28px]" >
            <div id="label-container" className="w-[416px] h-[68px] ">
                <label className=" h-[16px] text-[14px] font-normal ">Date of birth</label><br />
                <input 
                name="birth"
                value={data.birth}
                onChange={onchange}
                type="date" 
                placeholder="Your birthday"
                className="  h-[40px] w-[100%] rounded-md pl-4 text-[18px]" />
                <div className="mt-5 w-[416px] h-[250px] border-[2px] border-black rounded-md relative ">
                    <input type="file"  
                    className="w-[100%] h-[100%] absolute"
                    accept="image/*"
                    onChange={handleImageChange}></input>
                    </div>
                    {data.img&&<img src={data.img} alt="" className=" w-[416px] h-[250px]  object-contain absolute"/>}
            </div>
        </form>
    )
}