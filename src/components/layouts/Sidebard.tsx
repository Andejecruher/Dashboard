import React from "react"
import { Outlet } from "react-router-dom"
import Button from "@/components/ui/Button"
import Search from "@/components/ui/Search"
import UserNav from "@/components/ui/UserNav"
import AddNew from "@/components/ui/AddNew"
import { CalendarDays, Users, Briefcase, LayoutGrid, CalendarClock, Settings } from "lucide-react"
import Logo from "@/assets/Logo.svg"

const classes = {
    container: `flex min-h-screen bg-grey`,
    sidebar: `hidden w-[89px] flex-col items-center border-r border-1 border-grey-100 bg-grey pb-4 pr-4 pl-4 md:flex`,
    logoContainer: `w-[89px] h-[89px] border-b border-grey-100 items-center flex justify-center`,
    logo: `w-[46px] w-[46px]`,
    button: `group h-[50px] w-[50px] rounded-[50px] hover:bg-blue-500 hover:text-white border border-1 border-grey-100 bg-white`,
    icon: `h-5 w-5 text-gray-500 group-hover:text-white transition-colors`,
    nav: `flex flex-1 flex-col gap-4 mt-4`,
    mainContent: `flex-1 bg-grey-10`,
    header: `flex h-[90px] items-center justify-between border-b border-grey-100`,
    headerContent: `flex flex-1 items-center gap-4 p-4 bg-grey h-full`,
    search: (full: boolean) => `flex items-center justify-end gap-4 w-[600px] p-4 h-full ${!full && 'bg-grey-200'} `,
    title: `text-3xl text-navy font-bold`,
    main: `flex bg-grey-10`,
    leftArea: `flex-1 space-y-8 p-8 bg-grey`,
    rightArea: (full: boolean) => `w-[600px] space-y-8 p-8 ${!full && 'bg-grey-200'}`,
    addNew: `rounded-4xl`,
    containerContent: `space-y-8 p-8 bg-grey`
}

interface BaseLayoutProps {
    children: React.ReactNode
}


const Sidebard: React.FC<BaseLayoutProps> = ({ children }) => {
    React.useEffect(() => {
        // Convertimos los hijos en un array y verificamos si alguno es ContentCenter
        const childrenArray = React.Children.toArray(children);
        const found = childrenArray.some(
            (child) => {
                console.log(child)
                return (child as any).type && (child as any).type.name === "ContentCenter"
            }
        );
        console.log("🚀 > React.useEffect > found:", found)

    }, [children]);
    // Find ContentLeft, ContentRight and Content components among children
    const contentLeft = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === Outlet,
    )
    const contentRight = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === Outlet,
    )

    const contentCenter = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === Outlet,
    )

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
                    <Button intent="ghost" size="md" className={classes.button} icon={<LayoutGrid className={classes.icon} />} iconPosition={'center'} />
                    <Button intent="ghost" size="md" className={classes.button} icon={<Briefcase className={classes.icon} />} iconPosition={'center'} />
                    <Button intent="ghost" size="md" className={classes.button} icon={<Users className={classes.icon} />} iconPosition="center" />
                    <Button intent="ghost" size="md" className={classes.button} icon={<CalendarClock className={classes.icon} />} iconPosition="center" />
                    <Button intent="ghost" size="md" className={classes.button} icon={<CalendarDays className={classes.icon} />} iconPosition="center" />
                    <Button intent="ghost" size="md" className={classes.button} icon={<Settings className={classes.icon} />} iconPosition="center" />
                </nav>
            </div>

            {/* Main Content*/}
            <div className={classes.mainContent}>

                <header className={classes.header}>
                    <div className={classes.headerContent}>
                        <h1 className={classes.title}>Dashboard</h1>
                    </div>
                    <div className={classes.search(contentCenter ? true : false)}>
                        <AddNew />
                        <Search />
                        <UserNav />
                    </div>
                </header>

                <main className={classes.main}>
                    {contentCenter ?
                        (
                            <div className={classes.containerContent}>
                                {contentCenter}
                            </div>
                        )
                        : (
                            <>
                                <div className={classes.leftArea}>
                                    {contentLeft}
                                </div><div className={classes.rightArea(contentCenter ? true : false)}>
                                    {contentRight}
                                </div>
                            </>
                        )}

                </main>
            </div>
        </div>
    )
}

// ContentLeft component
export function ContentLeft({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}

// ContentRight component
export function ContentRight({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}

// ContentCenter component
export function ContentCenter({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}

export default Sidebard