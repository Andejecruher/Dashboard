// Desc: Dashboard page
import Costumers from "@/components/Costumers"
import NextAppointment from "@/components/NextAppointment"
import RecentDeals from "@/components/RecentDeals"
import KpiCard from "@/components/KpiCard"
import DealInProgress from "@/components/DealInProgress"
import TaskToDo from "@/components/TaskToDo"
import { User, BriefcaseBusiness } from "lucide-react"

// recent deals example
const recentDeals = [
    {
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "WY",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
    },
    {
        address: "47 Spruce Drive",
        price: 5750,
        city: "Quantico",
        state: "VA",
        dateTime: "Nov 15, 08:00 AM",
        imageUrl: "https://placehold.co/44x44",
    },
    {
        address: "165 Belmont Drive",
        price: 5750,
        city: "Parowan",
        state: "UT",
        dateTime: "Nov 16, 09:00 AM",
        imageUrl: "https://placehold.co/44x44",
    },
    {
        address: "1538 Hammer Road",
        price: 5750,
        city: "Cleveland",
        state: "OH",
        dateTime: "Nov 17, 10:00 AM",
        imageUrl: "https://placehold.co/44x44",
    }
]

// deal example
const deal = {
    address: "1538 Hammer Road",
    price: 5750,
    city: "Cleveland",
    state: "OH",
    dateTime: "Nov 17, 10:00 AM",
    imageUrl: "https://placehold.co/50x50",
    comments: [
        {
            dateTime: "Nov 17, 10:00 AM",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  turpis. Nullam nec sagittis"
        },
        {
            dateTime: "Nov 17, 10:00 AM",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec sagittis turpis. "
        }
    ]
}

// costumer example
const costumers = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "example@gmail.com",
        avatarUrl: "https://placehold.co/44x44",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        email: "example@gamil.com",
        avatarUrl: "https://placehold.co/44x44",
    },
    {
        firstName: "John",
        lastName: "Doe",
        email: "example@gmail.com",
        avatarUrl: "https://placehold.co/44x44",
    },
    {
        firstName: "John",
        lastName: "Doe",
        email: "example@gmail.com",
        avatarUrl: "https://placehold.co/44x44",
    }
]

// tasks example
const tasks = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        isHighlighted: true,
        date: new Date()
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        isHighlighted: true,
        date: new Date()
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        isHighlighted: true,
        date: new Date()
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        isHighlighted: false,
        date: new Date()
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        isHighlighted: false,
        date: new Date()
    }
]

// appointment example\
const appointment = {
    address: "1538 Hammer Road",
    city: "Cleveland",
    state: "OH",
    zipCode: "44114",
    appointmentDate: "Nov 17, 10:00 AM",
    price: 5750,
    people: 4,
    roomArea: 350
}


// style
const classes = {
    section: `p-4`,
    container: `grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 justify-center mb-4`,
    kpis: `flex flex-col gap-4 `,
    iconsKpis: `text-white w-10 h-10`
}

// page component
const Dashboard: React.FC = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <NextAppointment
                    appointment={appointment} />
                <RecentDeals deals={recentDeals} />
                <Costumers costumers={costumers} />
                <div className={classes.kpis}>
                    <KpiCard title="Total Revenue" value={5750} icon={<User className={classes.iconsKpis} />} />
                    <KpiCard title="Total Costumers" value={10} icon={<BriefcaseBusiness className={classes.iconsKpis} />} />
                </div>
                <div>
                    <DealInProgress
                        deal={deal}
                    />
                </div>
                <div>
                    <TaskToDo tasks={tasks} />
                </div>
            </div>
        </section>
    )
}

// export
export default Dashboard
