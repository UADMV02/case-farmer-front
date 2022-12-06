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
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}></Modal>
        </>
    )
}
