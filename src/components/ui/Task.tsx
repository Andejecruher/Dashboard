// Desc: Task component
import type React from "react"
import { format } from "date-fns"
import { Calendar, OctagonAlert, SquareCheck } from "lucide-react"

// interfaces props
interface TaskProps {
    date: Date
    title?: string
    isHighlighted?: boolean
    onClick?: () => void
}

// styles
const classes = {
    container: `w-full max-w-full h-12 rounded-xl relative overflow-hidden  bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer pt-3 pb-3`,
    content: `absolute top-1/2 left-6 transform -translate-y-1/2 flex items-center space-x-2`,
    label: (isHighlighted: boolean) => `w-4 h-4 ${isHighlighted ? "text-red-500" : "text-gray-400"}`,
    date: (isHighlighted: boolean) => `text-sm leading-5 ${isHighlighted ? "text-red-500 font-medium" : "text-gray-500"}`,
    footer: `absolute top-1/2 left-[144px] right-6 transform -translate-y-1/2`,
    footerTitle: `text-sm font-normal leading-5 text-gray-900 truncate flex gap-4 items-center`,
    icon: `w-4 h-4 text-red-500`,
    iconCheck: `w-4 h-4 text-green-500`,
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
                <span className={classes.footerTitle}>
                    {isHighlighted ? (
                        <OctagonAlert className={classes.icon} />
                    ) : (<SquareCheck className={classes.iconCheck} />)}
                    {title && title}
                </span>
            </div>
        </div>
    )
}

// export
export default Task

