// Note: Badge component 
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

// interface props
interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof badgeStyles> {
    text: string
}

// styles
const badgeStyles = cva(
    "flex justify-center items-center flex-nowrap rounded-full font-['Inter'] font-bold text-sm leading-5 cursor-pointer",
    {
        variants: {
            intent: {
                primary: "bg-[#ecebfd] text-[#504ef2]",
                secondary: "bg-gray-200 text-gray-800",
                danger: "bg-[#fde8e8] text-[#e55353]",
                warning: "bg-[#fffae6] text-[#f7b955]",
                success: "bg-[#e6f7f2] text-[#53e5b9]",
                // Add more variants as needed
            },
            size: {
                small: "px-3 py-1",
                medium: "px-5 py-2",
                large: "px-6 py-3",
                sm: "px-3 py-1",
                md: "px-5 py-2",
                lg: "px-6 py-3",
                xl: "px-8 py-4",
            },
        },
        defaultVariants: {
            intent: "primary",
            size: "medium",
        },
    },
)

// component
const Badge: React.FC<BadgeProps> = React.memo(({ text, intent, size, className, ...props }) => {
    return (
        <button className={badgeStyles({ intent, size, className })} {...props}>
            {text}
        </button>
    )
})

// export
export default Badge