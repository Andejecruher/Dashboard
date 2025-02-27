// Desc: Costumer component
import React from "react";
import UserCard, { UserCardProps } from "./ui/UserCard";
import Button from "./ui/Button";
import { Pencil } from "lucide-react";

// interface props
interface CostumersProps {
    costumers: UserCardProps[]
}

// styles
const classes = {
    container: `bg-white rounded-xl border border-grey-100 p-6`,
    header: `flex items-center justify-between`,
    title: `text-navy text-lg font-bold`,
    button: `border-none rounded-full text-blue text-sm font-medium z-10`,
    content: `flex flex-col`
}

// component
const Costumers: React.FC<CostumersProps> = ({ costumers }) => {
    return (
        <section className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}>Costumers</div>
                <Button className={classes.button} size="md" onClick={() => console.log("View all customers clicked")} text="View all costumers" intent="ghost" />
            </div>
            <div className={classes.content}>
                {costumers.map((costumer, index) => (
                    <UserCard
                        key={index}
                        firstName={costumer.firstName}
                        lastName={costumer.lastName}
                        email={costumer.email}
                        avatarUrl={costumer.avatarUrl}
                        onMoreClick={() => console.log("More options clicked")}
                        icon={<Pencil />}
                    />
                ))}
            </div>
        </section>
    );
};

// export
export default Costumers;