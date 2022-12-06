export default function ControlPanel(){
    return (
        <div className="w-full h-1/2 bg-white p-7 bg-opacity-60 rounded-md mb-8 lg:mb-0 flex flex-col justify-between border-[#EBEBEB] border">
            <div>
                <h2 className="text-lg pb-5 font-medium">Control Panel</h2>
                <div className="flex justify-between text-[13px] font-light leading-6">
                    <div>
                        <p>In Queue</p>
                        <p>0</p>
                    </div>
                    <div>
                        <p>Working</p>
                        <p>0/200</p>
                    </div>
                    <div>
                        <p>Completion time</p>
                        <p>0</p>
                    </div>
                </div>
            </div>
            <div className="">
                <button className="w-full py-[8px] bg-white rounded-md border border-[#EBEBEB] hover:opacity-75 mb-2 text-sm font-light">
                    Stop
                </button>
                <button className="w-full py-[8px] bg-white rounded-md border border-[#EBEBEB] hover:opacity-75 text-sm font-light">
                    Restart
                </button>
            </div>

        </div>
    )
}