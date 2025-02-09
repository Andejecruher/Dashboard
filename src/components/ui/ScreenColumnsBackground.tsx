import type React from "react"

// interface props
interface ScreenColumnsBackgroundProps {
    mainWidth?: string
    mainHeight?: string
    mainBgColor?: string
    rightColumnWidth?: string
    rightColumnBgColor?: string
    leftColumnWidth?: string
    dividerColor?: string
}

// component
const ScreenColumnsBackground: React.FC<ScreenColumnsBackgroundProps> = ({
    mainWidth = "w-full",
    mainHeight = "h-screen",
    mainBgColor = "bg-[#f6fafd]",
    rightColumnWidth = "w-[30%]",
    rightColumnBgColor = "bg-[#eef5fb]",
    leftColumnWidth = "w-[89px]",
    dividerColor = "bg-[#eaeef4]",
}) => {
    return (
        <div className={`relative ${mainWidth} ${mainHeight} ${mainBgColor}`}>
            <div className={`absolute top-0 bottom-0 right-0 ${rightColumnWidth} ${rightColumnBgColor}`} />
            <div className={`absolute top-0 bottom-0 left-0 ${leftColumnWidth}`} />
            <div className={`absolute top-0 bottom-0 left-[89px] w-px ${dividerColor}`} />
        </div>
    )
}

export default ScreenColumnsBackground

