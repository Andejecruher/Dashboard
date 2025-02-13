import type React from "react"
import { DotIcon } from "lucide-react"

interface TimelineItem {
    dateTime: string
    comment: string
    description?: string
}

interface TimelineProps {
    items: TimelineItem[]
    intercalate?: boolean
}

const classes = {
    container: `w-full h-full p-4`,
    content: `relative wrap overflow-hidden pl-6 pr-6 h-full`,
    border: `border-2-2 absolute border-opacity-20 border-gray-200 h-full border`,
    item: (intercalate: boolean | undefined, index: number) => `-ml-[15px] mb-4 flex items-center w-full ${index % 2 === 0 && intercalate ? "flex-row-reverse" : ""}`,
    dot: `z-22 flex items-center order-1 bg-blue w-8 h-8 rounded-full`,
    icon: `text-white w-11 h-11`,
    info: `order-1 pl-4 pr-4`,
    date: `text-gray-400 text-sm`,
    comment: `text-navy text-sm mt-1`,
    description: `text-sm leading-snug tracking-wide text-gray-900 text-opacity-100`

}

const Timeline: React.FC<TimelineProps> = ({ items, intercalate }) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div
                    className={classes.border}
                ></div>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={classes.item(intercalate, index)}
                    >
                        <div className={classes.dot}>
                            <DotIcon className={classes.icon} />
                        </div>
                        <div className={classes.info}>
                            <span className={classes.date}>{item.dateTime}</span>
                            <h4 className={classes.comment}>{item.comment}</h4>
                            {item.description && <p className={classes.description}>{item.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline

