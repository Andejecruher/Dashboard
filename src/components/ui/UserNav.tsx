// Desc: UserNav component
import { useState } from "react"

// styles
const classes = {
    container: `relative inline-block`,
    containerButton: `h-[52x] w-[52px] flex justify-center items-center`,
    button: `w-full inline-flex items-center justify-center rounded-full bg-white text-sm font-semibold text-gray-900 shadow-xs`,
    avatar: `w-[52px] h-[52px] inline-block rounded-full`,
    dropdowns: `absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none`,
    dropdownsContent: `py-1`,
    dropdownsItem: `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left`
}

// component
const UserNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)

    return (
        <div className={classes.container}>
            <div className={classes.containerButton}>
                <button
                    type="button"
                    className={classes.button}
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                >
                    <img className={classes.avatar} src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar" />
                </button>
            </div>

            {isOpen && (
                <div
                    className={classes.dropdowns}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                    <div className={classes.dropdownsContent} role="none">
                        <a
                            href="#"
                            className={classes.dropdownsItem}
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-0"
                        >
                            Account settings
                        </a>
                        <a
                            href="#"
                            className={classes.dropdownsItem}
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-1"
                        >
                            Support
                        </a>
                        <a
                            href="#"
                            className={classes.dropdownsItem}
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-2"
                        >
                            License
                        </a>
                        <form method="POST" action="#" role="none">
                            <button
                                type="submit"
                                className={classes.dropdownsItem}
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-3"
                            >
                                Sign out
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

// export
export default UserNav

