import { StaticImageData } from "next/image"
import Image from "next/image"
interface CardProps {
    title: string,
    content: string | React.ReactNode,
    imgCover: string | StaticImageData,
}


export default function Card(props: CardProps) {
    const { title, content, imgCover} = props

    return (
        <div className="w-1/4 mx-3 my-3 px-6 py-8 border shadow-lg rounded-2xl">
            <Image src={imgCover} alt={"Git"} width={100} className="text-center" />
            <h2 className="text-lg font-semibold mt-4">{title}</h2>
            <p className="text-slate-400 text-base">{content}</p>
        </div>
    )
}