import Image from "next/image";
import prime from '../public/prime.svg';
import SteamDB from '../components/home/steam-db';
import ControlPanel from '../components/home/control-panel';
import Summary from '../components/home/summary';
import Modal from '../components/Modal';
import {useState} from "react";


export default function Home() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <main className="mx-auto lg:w-[820px] lg:flex h-full relative">
                <div className="flex flex-col lg:w-1/2 lg:mr-5 justify-between">
                    <SteamDB onShow={() => setShowModal(true)}/>
                    <ControlPanel/>
                </div>
                <div className="lg:w-1/2">
                    <Summary/>
                </div>
                <Image className="absolute top-[18%] left-[-35%] z-[-1]" src={prime} width={440} alt="prime"/>
            </main>
            <div
                className="mx-auto mt-[20px] mb-[20px] lg:w-[820px] lg:flex bg-white bg-opacity-60 rounded-md border-[#EBEBEB] border flex-col">
                <div className="lg:flex lg:justify-between w-full h-[300px]">
                    <div className="p-7 w-full lg:w-1/2">
                        <h2 className="text-lg pb-5 font-medium">Withdraw</h2>
                        <div className="flex text-[13px] font-extralight leading-6">
                            <div className="mr-20">
                                <p>Total Items</p>
                                <p>200</p>
                            </div>
                            <div>
                                <p>Value</p>
                                <p>100$</p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="p-7 w-full lg:w-1/2">
                        <h2 className="text-lg pb-5 font-medium">Trade Bots</h2>
                        <div className="flex justify-between text-[13px] font-extralight leading-6">
                            <div>
                                <p>Accounts</p>
                                <p>2</p>
                            </div>
                            <div>
                                <p>Total Value</p>
                                <p>200$</p>
                            </div>
                            <div>
                                <p>Total Balance</p>
                                <p>200$</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-7">
                    <button
                        className="w-full py-[8px] bg-white rounded-md border border-[#EBEBEB] hover:opacity-75 mb-2 text-sm font-light">
                        Stop
                    </button>
                    <button
                        className="w-full py-[8px] bg-white rounded-md border border-[#EBEBEB] hover:opacity-75 text-sm font-light">
                        Settings
                    </button>
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}></Modal>
        </>
    )
}
