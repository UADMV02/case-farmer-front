import {Tab} from "@headlessui/react";

export default function AccountsManage(){
    return (
        <Tab.Group className="h-full flex flex-col" as="Fragment">
            <Tab.List className="place-self-center text-sm font-medium mt-2" as="Fragment">
                <Tab className="ui-selected:opacity-100 ui-not-selected:opacity-30 mr-[10px]">Farm</Tab>
                <Tab className="ui-selected:opacity-100 ui-not-selected:opacity-30 mr-[10px]">Trade</Tab>
            </Tab.List>
            <Tab.Panels className="h-full text-[13px] font-medium">
                <Tab.Panel className="h-full flex flex-col justify-between">
                    <div className="flex justify-center leading-6 mt-5">
                        <div className="mr-6">
                            <p>Accounts</p>
                            <p>1000</p>
                        </div>
                        <div className="mr-6">
                            <p>Farm Ready</p>
                            <p>850/1000</p>
                        </div>
                        <div className="mr-6">
                            <p>Farming</p>
                            <p>850/1000</p>
                        </div>
                        <div>
                            <p>Removed</p>
                            <p>50</p>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="mb-5">
                            <p className="mb-1">Accounts</p>
                            <div className="w-full flex justify-between">
                                <button className="w-[49%] bg-white h-9 border border-[#EBEBEB] rounded-md hover:bg-[#e0e0e0]">Choose Accounts.txt</button>
                                <button className="w-[49%] bg-white h-9 border border-[#EBEBEB] rounded-md hover:bg-[#e0e0e0]">Choose maFiles.zip</button>
                            </div>
                        </div>
                        <div>
                            <p className="mb-1">Actions</p>
                            <button className="w-full bg-white h-9 border border-[#EBEBEB] rounded-md mb-2 hover:bg-[#e0e0e0]">Add Accounts</button>
                            <button className="w-full bg-white h-9 border border-[#EBEBEB] rounded-md mb-2 hover:bg-[#e0e0e0]">Remove Accounts</button>
                            <button className="w-full bg-[#2E9BFF] text-white h-9 rounded-md hover:bg-[#278be8]">Download All Accounts.zip</button>
                        </div>
                    </div>
                </Tab.Panel>
                <Tab.Panel className="h-full flex flex-col justify-between font-medium">
                    <div className="flex justify-center leading-6 mt-5">
                        <div className="mr-6">
                            <p>Accounts</p>
                            <p>10</p>
                        </div>
                        <div className="mr-6">
                            <p>Completed</p>
                            <p>1/10</p>
                        </div>
                        <div>
                            <p>Total Value</p>
                            <p>4430$</p>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="mb-5">
                            <p className="mb-1">Accounts</p>
                            <div className="w-full flex justify-between">
                                <button className="w-[49%] bg-white h-9 border border-[#EBEBEB] rounded-md hover:bg-[#e0e0e0]">Choose Accounts.txt</button>
                                <button className="w-[49%] bg-white h-9 border border-[#EBEBEB] rounded-md hover:bg-[#e0e0e0]">Choose maFiles.zip</button>
                            </div>
                        </div>
                        <div>
                            <p className="mb-1">Actions</p>
                            <button className="w-full bg-white h-9 border border-[#EBEBEB] rounded-md mb-2 hover:bg-[#e0e0e0]">Add Accounts</button>
                            <button className="w-full bg-white h-9 border border-[#EBEBEB] rounded-md mb-2 hover:bg-[#e0e0e0]">Remove Accounts</button>
                            <button className="prime-button">Download All Accounts.zip</button>
                        </div>
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}