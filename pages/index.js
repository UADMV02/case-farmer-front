import Modal from '../components/Modal';
import {useState} from "react";
import {Tab} from "@headlessui/react";
import prime from "../public/prime.svg";
import Image from "next/image";
import Dashboard from "./dashboard";
import Withdraw from "./withdraw";


export default function Home() {
    return (
        <Tab.Group className="h-full" as="Fragment">
            <Tab.List className="mx-auto w-40 flex mb-4 font-medium text-sm" as="Fragment">
                <Tab className="ui-selected:opacity-100 ui-not-selected:opacity-30 mr-[10px]">Dashboard</Tab>
                <Tab className="ui-selected:opacity-100 ui-not-selected:opacity-30 mr-[10px]">Withdraw</Tab>
            </Tab.List>
            <Tab.Panels className="mx-auto lg:w-[820px] lg:flex h-full relative">
                <Tab.Panel className="lg:w-full lg:flex">
                    <Dashboard/>
                </Tab.Panel>
                <Tab.Panel className="lg:w-full lg:flex lg:flex-col justify-between h-full">
                    <Withdraw/>
                </Tab.Panel>
                <Image className="absolute top-[18%] left-[-35%] z-[-1]" src={prime} width={440} alt="prime"/>
            </Tab.Panels>
        </Tab.Group>
    )
}
