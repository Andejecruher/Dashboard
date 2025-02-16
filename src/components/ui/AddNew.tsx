// Desc: AddNew component
import React, { useState } from "react"
import { Plus, X, ArrowRight, BriefcaseBusiness, UsersRound } from "lucide-react"
import Button from "./Button"

// styles
const classes = {
    addNew: `rounded-4xl`,
    container: `relative inline-block rounded-2xl`,
    dropdowns: `absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-2xl bg-white ring-1 shadow-lg ring-black/5 focus:outline-none`,
    dropdownsItem: (first: boolean) => `px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between items-center ${first && `border-b border-grey-300`}`,
    dropdownsItemSpan: `flex justify-between items-center gap-2 font-semibold`,
    dropdownsItemIcon: `text-grey-300 w-5`
}

// component
const AddNew: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)

    return (
        <div className={classes.container}>
            <Button onClick={toggleDropdown} intent="primary" text="Add New" size="large" className={classes.addNew} icon={<Plus />} iconPosition="right" />
            {isOpen && (
                <div
                    className={classes.dropdowns}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                    <div>
                        <div className="flex justify-between items-center p-4 border-b border-grey-300">
                            <span className="text-gray-500 font-body text-sm">Add New</span>
                            <Button onClick={toggleDropdown} intent="ghost" size="icon-sm" className="group rounded-[100%] bg-gray-600 hover:bg-gray-500 border-gray-50" icon={<X className="text-white font-bold w-3 h-3" />} iconPosition="center" />
                        </div>
                    </div>
                    <div>
                        <a
                            href="#"
                            className={classes.dropdownsItem(true)}
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-0"
                        >
                            <span className={classes.dropdownsItemSpan}>
                                <UsersRound className={classes.dropdownsItemIcon} />
                                Deal
                            </span>
                            <ArrowRight className="text-blue" />
                        </a>
                        <a
                            href="#"
                            className={classes.dropdownsItem(false)}
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-1"
                        >
                            <span className={classes.dropdownsItemSpan}>
                                <BriefcaseBusiness className={classes.dropdownsItemIcon} />
                                Costumer
                            </span>
                            <ArrowRight className="text-blue" />
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

// export
export default AddNew;

