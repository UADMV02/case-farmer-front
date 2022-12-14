import SteamDB from "../components/home/steam-db";
import ControlPanel from "../components/home/control-panel";
import Summary from "../components/home/summary";
import Image from "next/image";
import prime from "../public/prime.svg";
import {useState} from "react";
import Modal from "../components/Modal";

export default function Dashboard() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="flex flex-col lg:w-1/2 lg:mr-5 justify-between">
                <SteamDB onShow={() => setShowModal(true)}/>
                <ControlPanel/>
            </div>
            <div className="lg:w-1/2">
                <Summary/>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}></Modal>
        </>
    )
}