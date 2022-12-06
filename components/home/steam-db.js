export default function SteamDB({onShow}) {
    return (
        <div className="w-full h-1/2 bg-white p-7 bg-opacity-60 rounded-md mb-8 lg:mb-5 flex flex-col justify-between border-[#EBEBEB] border">
            <div>
                <h2 className="text-lg pb-5 font-medium">Steam Database</h2>
                <div className="flex justify-between text-[13px] font-extralight leading-6">
                    <div>
                        <p>Farm Ready</p>
                        <p>500</p>
                    </div>
                    <div>
                        <p>Cooldown now</p>
                        <p>400</p>
                    </div>
                    <div>
                        <p>Deleted Accounts</p>
                        <p>50</p>
                    </div>
                </div>
            </div>
            <button className="w-full py-[8px] bg-white rounded-md border border-[#EBEBEB] hover:opacity-75 text-sm font-light"
                    type="button"
                    data-modal-toggle="defaultModal"
                    onClick={() => onShow()}
            >
                Manage
            </button>
        </div>
    )
}