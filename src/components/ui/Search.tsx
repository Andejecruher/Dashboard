// Desc: Search component
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SearchIcon, X } from "lucide-react"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"

// styles
const classes = {
    button: `group h-10 w-10 shadow-sm rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200`,
    icon: `h-5 w-5 text-gray-500 group-hover:text-white transition-colors duration-200`,
    searchContainer: `flex items-center rounded-full overflow-hidden shadow-md bg-white`,
    iconSearch: `h-5 w-5 text-gray-500 group-hover:text-blue-500 transition-colors duration-200`,
    buttonSearch: `group h-10 w-10 rounded-full hover:text-white transition-colors duration-200 border-transparent hover:bg-transparent`,
    input: `flex-1 h-[50px] pt-1 mr-1 ml-1 rounded-full border-transparent border-0 bg-white`
}

// component
const Search: React.FC = () => {
    const [open, setOpen] = useState(false)
    const searchRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)

    const handleOpenSearch = () => setOpen(true)
    const handleCloseSearch = () => setOpen(false)

    const handleSearch = () => {
        console.log("Buscar contenido", searchInputRef.current?.value)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                handleCloseSearch()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [handleCloseSearch]) // Added handleCloseSearch to dependencies

    return (
        <div ref={searchRef}>
            <AnimatePresence>
                {!open ? (
                    <Button onClick={handleOpenSearch} intent="ghost" size="icon-xl" className={classes.button} icon={<SearchIcon className={classes.icon} />} iconPosition="center" />
                ) : (
                    <motion.div
                        initial={{ width: 40, opacity: 0, scale: 0.8 }}
                        animate={{ width: "100%", opacity: 1, scale: 1 }}
                        exit={{ width: 40, opacity: 0, scale: 0.8 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.2 },
                        }}
                        className={classes.searchContainer}
                    >
                        <Button onClick={handleSearch} intent="ghost" size="icon" className={classes.buttonSearch} icon={<SearchIcon className={classes.iconSearch} />} iconPosition="center" />
                        <Input
                            ref={searchInputRef}
                            type="search"
                            placeholder="Search..."
                            className={classes.input}
                            onKeyDownCapture={(e) => {
                                if (e.key === "Enter" || e.keyCode === 13) {
                                    handleSearch()
                                }
                            }}
                        />
                        <Button onClick={handleCloseSearch} className={classes.buttonSearch} intent="ghost" size="icon" icon={<X className={classes.iconSearch} />} iconPosition="center" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}

// export
export default Search