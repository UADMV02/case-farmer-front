export default function Items({items}){
    return (
        <div className="w-full font-extralight">

            {items.map((item) => {
                return (
                    <div key={item.name} className="flex justify-between py-1">
                        <p className="text-[#6096FF] font-medium">{item.name}</p>
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