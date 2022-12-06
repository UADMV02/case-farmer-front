export default function Items({items}){
    return (
        <div className="w-full font-extralight">

            {items.map((item) => {
                return (
                    <div key={item.name} className="flex justify-between py-1 font-medium">
                        <p className="text-[#6096FF]">{item.name}</p>
                        <div className="flex justify-between w-[30%]">
                            <p>{item.percent}</p>
                            <p>{item.count}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}