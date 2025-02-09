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
    header: `flex h-[90px] items-center justify-between border-b border-grey-100 p-4`,
    headerContent: `flex items-center gap-4`,
    title: `text-3xl text-navy font-bold`,
    search: `flex items-center gap-4`,
    main: `flex gap-8 p-8 bg-grey-10`,
    leftArea: `flex-1 space-y-8`,
    rightArea: `w-[300px] space-y-8`,
    addNew: `rounded-4xl`
}

export default function DashboardPage() {
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
                </nav>
                <Button intent="ghost" size="md" className={classes.button} icon={<Settings className={classes.icon} />} iconPosition="center" />
            </div>

            {/* Main Content*/}
            <div className={classes.mainContent}>
                <header className={classes.header}>
                    <div className={classes.headerContent}>
                        <h1 className={classes.title}>Dashboard</h1>
                    </div>
                    <div className={classes.search}>
                        <AddNew />
                        <Search />
                        <UserNav />
                    </div>
                </header>

                <main className={classes.main}>
                    <div className={classes.leftArea}>

                    </div>
                    <div className={classes.rightArea}>

                    </div>
                </main>
            </div>
        </div>
    )
}

