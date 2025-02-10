import type React from "react"
import { useState, useEffect } from "react"
import {
    Search,
    Mail,
    Lock,
    User,
    Calendar,
    Phone,
    DollarSign,
    Percent,
    Hash,
    Check,
    AlertCircle,
    ChevronDown,
    Eye,
    EyeOff,
} from "lucide-react"

// interface props
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onClick"> {
    label?: string
    icon?: "search" | "mail" | "lock" | "user" | "calendar" | "phone" | "dollar" | "percent" | "hash"
    rightIcon?: "chevron-down" | "check" | "alert" | "eye" | "eye-off"
    error?: string
    success?: boolean
    validate?: (value: string) => string | null
    onValidated?: (isValid: boolean) => void
    onIconClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
    onRightIconClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
    // crear type para un ref de useRef
    ref?: React.RefObject<HTMLInputElement | null>;

}

// icons mapping
const iconMapping = {
    search: Search,
    mail: Mail,
    lock: Lock,
    user: User,
    calendar: Calendar,
    phone: Phone,
    dollar: DollarSign,
    percent: Percent,
    hash: Hash,
    "chevron-down": ChevronDown,
    check: Check,
    alert: AlertCircle,
    eye: Eye,
    "eye-off": EyeOff,
};

// styles
const classes = {
    container: "w-full max-w-[384px] rounded-[5px] relative mx-auto my-0",
    label: "block mb-2 font-['Inter'] text-[16px] font-bold leading-[30px] text-white",
    inputWrapper: (error: string, success: boolean) => `
    flex items-center w-full h-[50px] px-5 py-2.5 gap-3
    bg-white rounded-[8px]
    ${error ? "border-red-500" : success ? "border-green-500" : "border-[#eaeef4]"}
  `,
    input: "grow h-full bg-transparent border-none font-['Inter'] text-[16px] text-[#092c4c] placeholder-[#7e92a2] focus:outline-none",
    icon: "w-5 h-5 text-[#7e92a2] cursor-pointer",
    error: "mt-1 text-sm text-red-500",
};

// components
const Input: React.FC<InputProps> = ({
    label,
    icon,
    rightIcon,
    error: initialError,
    success: initialSuccess,
    className = "",
    validate,
    onValidated,
    onIconClick,
    onRightIconClick,
    ref,
    ...props
}) => {
    const [value, setValue] = useState(props.value || "")
    const [error, setError] = useState(initialError || null)
    const [success, setSuccess] = useState(initialSuccess || false)

    const Icon = icon ? iconMapping[icon] : null
    const RightIcon = rightIcon ? iconMapping[rightIcon] : null

    useEffect(() => {
        if (props.value !== undefined) {
            setValue(props.value as string)
        }
    }, [props.value])

    useEffect(() => {
        if (validate) {
            const validationError = validate(value as string)
            setError(validationError)
            setSuccess(!validationError)
            if (onValidated) {
                onValidated(!validationError)
            }
        }
    }, [value, validate, onValidated])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setValue(newValue)
        if (props.onChange) {
            props.onChange(e)
        }
    }

    return (
        <div className={classes.container}>
            {label && <label className={classes.label}>{label}</label>}
            <div className={classes.inputWrapper(error || "", success)}>
                {Icon && <Icon className={classes.icon} onClick={onIconClick} />}
                <input
                    ref={ref}
                    className={classes.input}
                    value={value}
                    onChange={handleChange}
                    {...props}
                />
                {RightIcon && <RightIcon className={classes.icon} onClick={onRightIconClick} />}
            </div>
            {error && <p className={classes.error}>{error}</p>}
        </div>
    )
}

export default Input

