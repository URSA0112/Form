export function Form3({ data, setData,handleOnSubmit,error}) {
    const errorStyle = "text-red-500 text-[12px] ";
    function onchange(e) {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleImageChange(e) {
        const file = e.target.files[0]
        if (file) {
            const imgURL = URL.createObjectURL(file);
            setData((prev) => ({ ...prev, img: imgURL }))
  
        }

    }


    return (
        <form onSubmit={handleOnSubmit} className=" w-[416px] h-[auto] text-[20px] text-black  mt-[28px]" >
            <div id="label-container" className="w-[416px] h-[68px] ">
                <label className=" h-[16px] text-[14px] font-normal ">Date of birth</label><br />
                <input
                    name="birth"
                    value={data.birth}
                    onChange={handleOnSubmit}
                    type="date"
                    placeholder="Your birthday"
                    className="  h-[40px] w-[100%] rounded-md pl-4 text-[18px]" />
                                    {error.birth && <p className={errorStyle}>{error.birth}</p>}
                <div className="mt-5 w-[416px] h-[250px] border-[2px] border-black rounded-md relative overflow-hidden">
                    <input
                        type="file"
                        className="w-full h-full absolute opacity-0 cursor-pointer"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {data.img ? (
                        <img
                            src={data.img}
                            alt="Uploaded"
                            className="w-full h-full object-contain absolute"
                        />
                    ) : (
                        <div className="w-full h-full flex justify-center items-center text-gray-500">
                            Click to Upload Image
                            
                        </div>
                    )}       
                </div> {error.img && <p className={errorStyle}>{error.img}</p>}</div>
        </form>
    )
}