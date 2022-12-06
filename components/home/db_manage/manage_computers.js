export default function ComputersManage(){
    return (
        <div className="h-full flex flex-col justify-between mt-2 text-[13px] font-light">
            <div>
                <div className="flex items-center mb-2">
                    <input type="checkbox" className="mx-2 w-[18px] h-[18px] outline-[#FFFFFF]"/>
                    <input type="text" className="w-full bg-white h-9 border border-[#EBEBEB] rounded-md px-2 outline-0" value="125.95.206.193:67515:Administrator:Password"/>
                </div>
            </div>
            <div>
                <p className="font-normal mb-1">Actions</p>
                <button className="w-full bg-white h-9 border border-[#EBEBEB] rounded-md mb-2">Add Computer</button>
                <button className="w-full bg-white h-9 border border-[#EBEBEB] rounded-md mb-2">Remove Selected</button>
                <button className="w-full bg-[#2E9BFF] text-white h-9 rounded-md mb-2">Apply & Install Software</button>
            </div>
        </div>
    )
}