export default function ComputersManage(){
    return (
        <div className="h-full flex flex-col justify-between text-[13px] font-medium">
            <div className="h-full py-5">
                <textarea className="w-full bg-white border border-[#EBEBEB] rounded-md p-2 outline-0 h-full resize-none"
                          placeholder="IP:Port:Login:Password"
                          ></textarea>
            </div>
            <div>
                <p className="mb-1">Actions</p>
                <button className="w-full bg-[#2E9BFF] text-white h-9 rounded-md mb-2 hover:bg-[#278be8]">Apply</button>
            </div>
        </div>
    )
}