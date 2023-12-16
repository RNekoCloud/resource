interface CardProps {
    title: string,
    content: string,
    img: string,
}


export default function Card(props: CardProps) {
    const { title, content, img} = props

    return (
        <div className="w-1/4 px-6 py-8 border shadow-lg rounded-2xl">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-slate-400 text-base">{content}</p>
        </div>
    )
}