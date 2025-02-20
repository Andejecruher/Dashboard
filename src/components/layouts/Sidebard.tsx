// Desc: This file contains the Sidebar layout component
import React from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Button from "@/components/ui/Button"
import Search from "@/components/ui/Search"
import UserNav from "@/components/ui/UserNav"
import AddNew from "@/components/ui/AddNew"
import TooltipItem from "../ui/Tooltip"
import { CalendarDays, Users, Briefcase, LayoutGrid, ListChecks, Settings, BellDot } from "lucide-react"
import Logo from "@/assets/Logo.svg"

// styles
const classes = {
    container: `flex min-h-screen bg-grey`,
    sidebar: `hidden w-[85px] flex-col items-center border-r border-1 border-grey-100 bg-grey pb-4 pr-4 pl-4 md:flex`,
    logoContainer: `w-[85px] h-[75px] border-b border-grey-100 items-center flex justify-center`,
    logo: `w-[46px] w-[46px]`,
    button: `group h-[50px] w-[50px] rounded-[50px] hover:bg-blue-500 border border-1 border-grey-100 bg-white cursor-pointer`,
    icon: `h-5 w-5 text-gray-500 group-hover:text-white`,
    nav: `flex flex-1 flex-col gap-4 mt-4`,
    mainContent: `flex-1 bg-grey-10`,
    header: `flex h-[76px] items-center justify-between border-b border-grey-100`,
    headerContent: `flex flex-1 items-center gap-4 p-4 bg-grey h-full`,
    search: (full: boolean) => `flex items-center justify-end gap-4 p-4 h-full ${!full && 'bg-grey-200'} `,
    title: `text-3xl text-navy font-bold`,
    addNew: `rounded-4xl`,
    tooltip: `rounded-full`,
}

// sidebar Component
const Sidebard: React.FC = () => {
    const navigate = useNavigate()
    const handleNavigate = (page: string) => {
        navigate(page)
    }
    return (
        <div className={classes.container}>
            {/* Sidebar */}
            <div className={classes.sidebar}>
                <div className={classes.logoContainer}>
                    <img
                        src={Logo}
                        alt="Logo"
                        className={classes.logo}
                    />
                </div>
                <nav className={classes.nav}>
                    <TooltipItem position="right" tooltipsText="Dashboard" className={classes.tooltip}>
                        <Button onClick={() => handleNavigate('/Dashboard')} intent="ghost" size="md" className={classes.button} icon={<LayoutGrid className={classes.icon} />} iconPosition={'center'} />
                    </TooltipItem>
                    <TooltipItem position="right" tooltipsText="Deals" className={classes.tooltip}>
                        <Button onClick={() => handleNavigate('/Deals')} intent="ghost" size="md" className={classes.button} icon={<Briefcase className={classes.icon} />} iconPosition={'center'} />
                    </TooltipItem>
                    <TooltipItem position="right" tooltipsText="Costumers" className={classes.tooltip}>
                        <Button onClick={() => handleNavigate('/Costumers')} intent="ghost" size="md" className={classes.button} icon={<Users className={classes.icon} />} iconPosition="center" />
                    </TooltipItem>
                    <TooltipItem position="right" tooltipsText="Tasks" className={classes.tooltip}>
                        <Button onClick={() => handleNavigate('/Tasks')} intent="ghost" size="md" className={classes.button} icon={<ListChecks className={classes.icon} />} iconPosition="center" />
                    </TooltipItem>
                    <TooltipItem position="right" tooltipsText="Calendar" className={classes.tooltip}>
                        <Button onClick={() => handleNavigate('/Calendar')} intent="ghost" size="md" className={classes.button} icon={<CalendarDays className={classes.icon} />} iconPosition="center" />
                    </TooltipItem>
                    <TooltipItem position="right" tooltipsText="Notifications" className={classes.tooltip}>
                        <Button onClick={() => handleNavigate('/Notifications')} intent="ghost" size="md" className={classes.button} icon={<BellDot className={classes.icon} />} iconPosition="center" />
                    </TooltipItem>
                    <TooltipItem position="right" tooltipsText="Settings" className={classes.tooltip}>
                        <Button onClick={() => handleNavigate('/Settings')} intent="ghost" size="md" className={classes.button} icon={<Settings className={classes.icon} />} iconPosition="center" />
                    </TooltipItem>
                </nav>
            </div>

            {/* Main Content*/}
            <div className={classes.mainContent}>
                <header className={classes.header}>
                    <div className={classes.headerContent}>
                        <h1 className={classes.title}>Dashboard</h1>
                    </div>
                    <div className={classes.search(true)}>
                        <AddNew />
                        <Search />
                        <UserNav />
                    </div>
                </header>

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

// export
export default Sidebard