import Clock from "react-live-clock";
import Items from "./summary/items";
import {useEffect, useState} from "react";

export default function Summary(){
    const monthSummary = {
        month: 11,
        year: 2022,
        totalItems: 5292,
        avgDrop: 232,
        avgPrice: 0.21,
        profit: 567,
        items: [
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
            {
                name: "Danger Case",
                percent: 25,
                count: 12334,
                link: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
            },
            {
                name: "Clutch Case",
                percent: 25,
                count: 12334,
                href: "https://steamcommunity.com/market/listings/730/Clutch%20Case"
            },
        ]
    }

    return (
        <div className="lg:w-full h-full bg-white bg-opacity-60 rounded-md border-[#EBEBEB] border flex flex-col">
            <div className="px-7 pt-7 h-40">
                <div className="flex mb-8 justify-between items-center">

                    <div className="flex font-medium">
                        <h2 className="text-lg mr-[10px]">{getMonthName(monthSummary.month)} {monthSummary.year}</h2>
                        <p className="text-lg">
                            <Clock
                                format={'h:mm:ss A'}
                                ticking={true} />
                        </p>
                    </div>
                    <div>
                        <button className="px-[10px] leading-[20px] bg-white rounded border border-[#EBEBEB] hover:bg-[#f0f1f2]">&#60;</button>
                        <button className="px-[10px] leading-[20px] bg-white rounded border border-[#EBEBEB] hover:bg-[#f0f1f2]">&#62;</button>
                    </div>
                </div>
                <div className="flex mb-8 justify-between text-[13px] font-medium mx-5 leading-6">
                    <div>
                        <p>Total Items</p>
                        <p>{monthSummary.totalItems}</p>
                    </div>
                    <div>
                        <p>AVG Drop</p>
                        <p>{monthSummary.avgDrop} min</p>
                    </div>
                    <div>
                        <p>AVG Price</p>
                        <p>${monthSummary.avgPrice}</p>
                    </div>
                    <div>
                        <p>Profit</p>
                        <p>${monthSummary.profit}</p>
                    </div>
                </div>
            </div>
            <div className="px-7 py-[15px] bg-white text-[13px] overflow-y-scroll rounded-b-md mt-auto border-t border-[#EBEBEB]">
                <div className="flex justify-between py-1 font-medium">
                    <div>Item name</div>
                    <div className="flex justify-between w-[30%]">
                        <div>%</div>
                        <div>Count</div>
                    </div>
                </div>
                <Items items={monthSummary.items}/>
            </div>
        </div>
    )
}

function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', { month: 'long' });
}
