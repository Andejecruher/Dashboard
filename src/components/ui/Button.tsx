import React from "react"
import { cva } from "class-variance-authority"

// interface props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
    icon?: React.ReactNode
    intent?: "default" | "destructive" | "outline" | "ghost" | "link" | "primary" | "secondary" | "danger"
    size?: "default" | "sm" | "md" | "lg" | "small" | "large" | "icon" | "icon-sm" | "icon-lg" | "icon-xl"
    iconPosition?: "left" | "right" | "center"
    fullWidth?: boolean
    isLoading?: boolean
    onClick?: () => void
}

// style
const buttonStyles = cva(
    "inline-flex items-center justify-center border text-sm font-medium",
    {
        variants: {
            intent: {
                default:
                    "bg-[#6C5DD3] text-white shadow hover:bg-[#5B4EC2] active:bg-[#4A3DB1]",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                ghost: "text-[#6C5DD3] hover:bg-[#F8F9FE] hover:text-[#6C5DD3]",
                link: "text-primary underline-offset-4 hover:underline",
                primary: "bg-indigo-600 text-white hover:bg-indigo-700",
                secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
                danger: "bg-red-600 text-white hover:bg-red-700",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "px-3 py-1.5 text-xs",
                md: "px-4 py-2 text-sm",
                lg: "px-6 py-3 text-base",
                large: "px-6 py-3 text-base",
                small: "px-3 py-1.5 text-xs",
                icon: "h-10 w-10",
                "icon-sm": "h-5 w-5",
                "icon-lg": "h-10 w-10",
                "icon-xl": "h-13 w-13"
            },
            iconPosition: {
                left: "",
                right: "",
                center: ""
            },
            fullWidth: {
                true: "w-full",
            },
        },
        defaultVariants: {
            intent: "primary",
            size: "md",
            iconPosition: "left",
            fullWidth: false,
        },
    },
)

// component
const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ text, icon, intent, size, iconPosition, fullWidth, isLoading, className, onClick, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={buttonStyles({ intent, size, iconPosition, fullWidth, className })}
                disabled={isLoading || props.disabled}
                onClick={onClick}
                {...props}
            >
                {isLoading ? (
                    <span className="animate-spin mr-2">&#9696;</span>
                ) : (
                    <>
                        {icon && iconPosition === "center" && <span className="m-auto">{icon}</span>}
                        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
                        <span>{text}</span>
                        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
                    </>
                )}
            </button>
        )
    },
)

Button.displayName = "Button"

export default Button

