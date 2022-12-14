export default function ControlPanel() {
    return (
        <div
            className="card p-7 w-full h-1/2 mb-8 lg:mb-0 flex flex-col justify-between">
            <div>
                <h2 className="text-lg pb-5 font-medium">Control Panel</h2>
                <div className="text-[13px]">
                    <h3 className="font-semibold mb-2">Information</h3>
                    <div className="flex justify-between font-medium leading-6">
                        <div>
                            <p>In Queue</p>
                            <p>0</p>
                        </div>
                        <div>
                            <p>Working</p>
                            <p>0/150</p>
                        </div>
                        <div>
                            <p>Completion time</p>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-48 bg-white border border-[#EBEBEB] rounded-md p-[10px]
            text-[13px] font-normal
            overflow-scroll">
                <p>4:17:12 | Starting farm</p>
                <p>4:17:12 | Starting farm</p>
                <p>4:17:12 | Starting farm</p>
                <p>4:17:12 | Starting farm</p>
                <p>4:17:12 | Starting farm</p>
                <p>4:17:12 | Starting farm</p>
                <p>4:17:12 | Starting farm</p>
                <p>4:17:12 | Starting farm</p>
                <p>4:17:12 | Starting farm</p>
                <p>4:17:12 | Starting farm</p>
                <p>4:17:12 | Starting farm</p>
                <p>4:17:12 | Starting farm</p>
            </div>
            <div className="font-medium">
                <button className="prime-button">
                    Start
                </button>
            </div>

        </div>
    )
}