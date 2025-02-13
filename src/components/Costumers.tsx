import React from "react";
import UserCard, { UserCardProps } from "./ui/UserCard";
import Button from "./ui/Button";
import { Pencil } from "lucide-react";

interface CostumersProps {
    costumers: UserCardProps[]
}

const classes = {
    container: `bg-white rounded-xl border border-grey-100 p-6`,
    header: `flex items-center justify-between`,
    title: `text-navy text-lg font-bold`,
    button: `border-none rounded-full text-blue text-sm font-medium`,
    content: `flex flex-col`
}


const Costumers: React.FC<CostumersProps> = ({ costumers }) => {
    return (
        <section className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}>Costumers</div>
                <Button className={classes.button} onClick={() => console.log("View all deals clicked")} text="View all deals" intent="ghost" />
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

export default Costumers;