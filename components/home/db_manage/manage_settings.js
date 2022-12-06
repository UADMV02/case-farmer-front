export default function SettingsManage(){
    return(
        <div className="h-full flex flex-col justify-between mt-2 text-[13px] font-light">
            <div>
                <div className="mb-2">
                    <p className="font-normal mb-1">Your login</p>
                    <input type="text" className="w-full bg-white h-9 border border-[#EBEBEB] rounded-md px-2 outline-0" value="skyforce"/>
                </div>
                <div className="mb-2">
                    <p className="font-normal mb-1">Proxy API (proxy.house)</p>
                    <input type="text" className="w-full bg-white h-9 border border-[#EBEBEB] rounded-md px-2 outline-0" value="2e35fc58425c24d56d15458d72315d53"/>
                </div>
            </div>
            <div>
                <p className="font-normal mb-1">Actions</p>
                <button className="w-full bg-white h-9 border border-[#EBEBEB] rounded-md mb-2">Logout</button>
                <button className="w-full bg-[#2E9BFF] text-white h-9 rounded-md mb-2">Apply</button>
            </div>
        </div>
    )
}