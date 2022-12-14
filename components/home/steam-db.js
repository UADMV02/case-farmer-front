export default function SteamDB({onShow}) {
    return (
        <div className="card p-7 w-full h-1/2 mb-8 lg:mb-5 flex flex-col justify-between">
            <div>
                <h2 className="text-lg pb-5 font-medium">Steam Database</h2>
                <div className="text-[13px] mb-6">
                    <h3 className="font-semibold mb-2">Farm bots</h3>
                    <div className="flex justify-between font-medium leading-6">
                        <div>
                            <p>Accounts</p>
                            <p>1000</p>
                        </div>
                        <div>
                            <p>Farm Ready</p>
                            <p>850/1000</p>
                        </div>
                        <div>
                            <p>Cooldown</p>
                            <p>400</p>
                        </div>
                    </div>
                </div>
                <div className="text-[13px] mb-6">
                    <h3 className="font-semibold mb-2">Trade bots</h3>
                    <div className="flex justify-between font-medium leading-6">
                        <div>
                            <p>Accounts</p>
                            <p>100</p>
                        </div>
                        <div>
                            <p>Completed</p>
                            <p>1/10</p>
                        </div>
                        <div>
                            <p>Total value</p>
                            <p>4430$</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="prime-button"
                    type="button"
                    data-modal-toggle="defaultModal"
                    onClick={() => onShow()}
            >
                Manage
            </button>
        </div>
    )
}