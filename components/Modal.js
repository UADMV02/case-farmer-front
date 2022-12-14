import close from '../public/close.svg';
import Image from "next/image";
import { Tab } from '@headlessui/react'
import AccountsManage from "./home/db_manage/manage_accounts";
import ComputersManage from "./home/db_manage/manage_computers";
import ServersManage from "./home/db_manage/manage_servers";
import SettingsManage from "./home/db_manage/manage_settings";

const Modal = ({isVisible, onClose}) => {
    if (!isVisible) return null;
    return (
        <div className="fixed inset-0 bg-[#2E2E2E] bg-opacity-80  backdrop-blur-0 flex justify-center items-center">
            <div className="w-[620px] bg-[#F2F2F2] h-[480px] border-[#EBEBEB] border p-3 px-5 rounded">
            <Tab.Group>
                <div className="flex flex-col w-full relative">
                    <div className="place-self-center text-sm font-medium">
                        <Tab.List>
                            <Tab className="ui-selected:opacity-100 ui-not-selected:opacity-30 mr-[10px]">Accounts</Tab>
                            <Tab className="ui-selected:opacity-100 ui-not-selected:opacity-30 mr-[10px]">Computers</Tab>
                            <Tab className="ui-selected:opacity-100 ui-not-selected:opacity-30 mr-[10px]">Servers</Tab>
                            <Tab className="ui-selected:opacity-100 ui-not-selected:opacity-30 mr-[10px]">Settings</Tab>
                        </Tab.List>
                    </div>
                    <button className="font-extrabold text-xl place-self-end absolute"  onClick={() => onClose()}>
                        <Image src={close} width={20} alt="close"></Image>
                    </button>
                </div>
                <Tab.Panels className="h-full">
                    <Tab.Panel className="h-full pb-5">{AccountsManage}</Tab.Panel>
                    <Tab.Panel className="h-full pb-5">{ComputersManage}</Tab.Panel>
                    <Tab.Panel className="h-full pb-5">{ServersManage}</Tab.Panel>
                    <Tab.Panel className="h-full pb-5">{SettingsManage}</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            </div>
        </div>
    )
}

export default Modal;