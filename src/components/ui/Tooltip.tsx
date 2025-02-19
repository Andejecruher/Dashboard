// Desc: Tooltip Component
import type React from "react"

// interface props
interface TooltipProps {
    children: React.ReactNode
    tooltipsText: string
    position: "top" | "right" | "bottom" | "left"
}

// styles
const classes = {
    tooltip: `inline-block`, // Changed from flex to inline-block
    group: `group relative inline-block`,
    divRight: `absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded border border-light bg-white px-4 py-[6px] text-sm font-semibold text-body-color invisible group-hover:visible dark:border-dark-3 dark:bg-dark dark:text-dark-6`,
    divTop: `absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded border border-light bg-white px-4 py-[6px] text-sm font-semibold text-body-color invisible group-hover:visible dark:border-dark-3 dark:bg-dark dark:text-dark-6`,
    divLeft: `absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded border border-light bg-white px-4 py-[6px] text-sm font-semibold text-body-color invisible group-hover:visible dark:border-dark-3 dark:bg-dark dark:text-dark-6`,
    divBottom: `absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded border border-light bg-white px-4 py-[6px] text-sm font-semibold text-body-color invisible group-hover:visible dark:border-dark-3 dark:bg-dark dark:text-dark-6`,
    spanRight: `absolute -left-1 top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-r-sm border-b border-l border-light bg-white dark:border-dark-3 dark:bg-dark`,
    spanTop: `absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-l-sm border-b border-r border-light bg-white dark:border-dark-3 dark:bg-dark`,
    spanLeft: `absolute -right-1 top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm border-r border-t border-light bg-white dark:border-dark-3 dark:bg-dark`,
    spanBottom: `absolute -top-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-light bg-white dark:border-dark-3 dark:bg-dark`,
}

// Tooltip Component
const TooltipItem: React.FC<TooltipProps> = ({ children, tooltipsText, position }) => {
    return (
        <div className={classes.tooltip}>
            <div className={classes.group}>
                {children}
                <div
                    className={
                        position === "right"
                            ? classes.divRight
                            : position === "top"
                                ? classes.divTop
                                : position === "left"
                                    ? classes.divLeft
                                    : classes.divBottom
                    }
                >
                    <span
                        className={
                            position === "right"
                                ? classes.spanRight
                                : position === "top"
                                    ? classes.spanTop
                                    : position === "left"
                                        ? classes.spanLeft
                                        : classes.spanBottom
                        }
                    />
                    {tooltipsText}
                </div>
            </div>
        </div>
    )
}

//export
export default TooltipItem

