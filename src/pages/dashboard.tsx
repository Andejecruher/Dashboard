import Costumers from "@/components/Costumers"
import NextAppointment from "@/components/NextAppointment"
import RecentDeals from "@/components/RecentDeals"
import KpiCard from "@/components/KpiCard"
import DealInProgress from "@/components/DealInProgress"
import { User, BriefcaseBusiness } from "lucide-react"

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

const classes = {
    section: `p-4`,
    container: `grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 justify-center mb-4`,
    kpis: `flex flex-col gap-4`,
    iconsKpis: `text-white w-10 h-10`
}

const Dashboard: React.FC = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <NextAppointment
                    address="319 Haul Road"
                    city="Glenrock"
                    state="WY"
                    zipCode="12345"
                    appointmentDate="Nov 18 2021, 17:00"
                    price={5750}
                    people={10}
                    roomArea={100} />
                <RecentDeals deals={recentDeals} />
                <Costumers costumers={costumers} />
                <div className={classes.kpis}>
                    <KpiCard title="Total Revenue" value={5750} icon={<User className={classes.iconsKpis} />} />
                    <KpiCard title="Total Costumers" value={10} icon={<BriefcaseBusiness className={classes.iconsKpis} />} />
                </div>
                <div>
                    <DealInProgress
                        imageUrl={deal.imageUrl}
                        address={deal.address}
                        city={deal.city}
                        state={deal.state}
                        onGoToDeal={() => console.log("Deal clicked")}
                        onLoadMore={() => console.log("Load more")}
                        comments={deal.comments}
                    />
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default Dashboard
