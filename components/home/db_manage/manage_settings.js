export default function SettingsManage(){
    return(
        <div className="h-full flex flex-col justify-between mt-2 text-[13px] font-medium">
            <div>
                <div className="mb-2">
                    <p className="mb-1">Your login</p>
                    <input type="text" className="w-full bg-white h-9 border border-[#EBEBEB] rounded-md px-2 outline-0" value="SkyForce" disabled/>
                </div>
            </div>
            <div>
                <p className="mb-1">Actions</p>
                <button className="w-full bg-white h-9 border border-[#EBEBEB] rounded-md mb-2 hover:bg-[#e0e0e0]">Logout</button>
                <button className="w-full bg-[#2E9BFF] text-white h-9 rounded-md mb-2 hover:bg-[#278be8]">Apply</button>
            </div>
        </div>
    )
}