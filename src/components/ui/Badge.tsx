"use client"

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

// Updated interface with icon click handlers
interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof badgeStyles> {
    text: string
    leadingIcon?: LucideIcon
    trailingIcon?: LucideIcon
    iconClassName?: string
    onLeadingIconClick?: (e: React.MouseEvent<SVGElement, MouseEvent>) => void
    onTrailingIconClick?: (e: React.MouseEvent<SVGElement, MouseEvent>) => void
}

const badgeStyles = cva(
    "flex justify-center items-center flex-nowrap rounded-full font-['Inter'] font-bold text-sm leading-5 cursor-pointer gap-1.5",
    {
        variants: {
            intent: {
                primary: "bg-[#ecebfd] text-[#504ef2]",
                secondary: "bg-gray-200 text-gray-800",
                danger: "bg-[#fde8e8] text-[#e55353]",
                warning: "bg-[#fffae6] text-[#f7b955]",
                success: "bg-[#e6f7f2] text-[#53e5b9]",
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

const Badge = React.memo<BadgeProps>(
    ({
        text,
        intent,
        size,
        className,
        leadingIcon: LeadingIcon,
        trailingIcon: TrailingIcon,
        iconClassName,
        onLeadingIconClick,
        onTrailingIconClick,
        onClick,
        ...props
    }) => {
        // Icon size mapping based on badge size
        const getIconSize = (size?: string) => {
            switch (size) {
                case "small":
                case "sm":
                    return 14
                case "large":
                case "lg":
                    return 18
                case "xl":
                    return 20
                default:
                    return 16
            }
        }

        const iconSize = getIconSize(size ?? undefined)

        // Handle icon clicks with stopPropagation if there's a specific handler
        const handleLeadingIconClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
            if (onLeadingIconClick) {
                e.stopPropagation()
                onLeadingIconClick(e)
            }
        }

        const handleTrailingIconClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
            if (onTrailingIconClick) {
                e.stopPropagation()
                onTrailingIconClick(e)
            }
        }

        return (
            <button className={badgeStyles({ intent, size, className })} onClick={onClick} {...props}>
                {LeadingIcon && (
                    <LeadingIcon
                        size={iconSize}
                        className={cn("flex-shrink-0", onLeadingIconClick && "cursor-pointer hover:opacity-80", iconClassName)}
                        onClick={handleLeadingIconClick}
                    />
                )}
                {text}
                {TrailingIcon && (
                    <TrailingIcon
                        size={iconSize}
                        className={cn("flex-shrink-0", onTrailingIconClick && "cursor-pointer hover:opacity-80", iconClassName)}
                        onClick={handleTrailingIconClick}
                    />
                )}
            </button>
        )
    },
)

Badge.displayName = "Badge"

export default Badge

