export default function Items({items}){
    return (
        <div className="w-full font-extralight">

            {items.map((item) => {
                return (
                    <div key={item.name} className="flex justify-between py-1 font-medium">
                        <a className="text-[#6096FF]" href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
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