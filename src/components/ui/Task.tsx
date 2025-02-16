// Desc: Task component
import type React from "react"
import { format } from "date-fns"
import { Calendar } from "lucide-react"

// interfaces props
interface TaskProps {
    date: Date
    title: string
    isHighlighted?: boolean
    onClick?: () => void
}

// styles
const classes = {
    container: `w-full max-w-[368px] h-[51px] relative overflow-hidden mx-auto my-0 bg-white shadow-sm rounded-md border border-gray-200 hover:bg-gray-50 transition-colors duration-200 cursor-pointer`,
    content: `absolute top-1/2 left-6 transform -translate-y-1/2 flex items-center space-x-2`,
    label: (isHighlighted: boolean) => `w-4 h-4 ${isHighlighted ? "text-red-500" : "text-gray-400"}`,
    date: (isHighlighted: boolean) => `font-['Inter'] text-sm leading-5 ${isHighlighted ? "text-red-500 font-medium" : "text-gray-500"}`,
    footer: `absolute top-1/2 left-[144px] right-6 transform -translate-y-1/2`,
    footerTitle: `font-['Inter'] text-sm font-normal leading-5 text-gray-900 truncate`
}

//components
const Task: React.FC<TaskProps> = ({ date, title, isHighlighted = false, onClick }) => {
    return (
        <div
            className={classes.container}
            onClick={onClick}
        >
            <div className={classes.content}>
                <Calendar className={classes.label(isHighlighted)} />
                <span
                    className={classes.date(isHighlighted)}
                >
                    {format(date, "dd MMM yyyy")}
                </span>
            </div>
            <div className={classes.footer}>
                <span className={classes.footerTitle}>{title}</span>
            </div>
        </div>
    )
}

// export
export default Task

