import React from "react";
import Deal, { DealsProps } from "./ui/Deal";
import Button from "./ui/Button";

interface RecentDealsCardProps {
    deals: DealsProps[]
}

const classes = {
    container: `bg-white rounded-xl border border-grey-100 p-6`,
    header: `flex items-center justify-between`,
    title: `text-navy text-lg font-bold`,
    button: `border-none rounded-full text-blue text-sm font-medium`,
    content: `flex flex-col`
}

const RecentDeals: React.FC<RecentDealsCardProps> = ({ deals }) => {
    return (
        <section className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}>Recent Deals</div>
                <Button className={classes.button} onClick={() => console.log("View all deals clicked")} text="View all deals" intent="ghost" />
            </div>
            <div className={classes.content}>
                {deals.map((deal, index) => (
                    <Deal
                        key={index}
                        imageUrl={deal.imageUrl}
                        address={deal.address}
                        price={deal.price}
                        city={deal.city}
                        state={deal.state}
                        dateTime={deal.dateTime}
                        onClick={() => console.log("Deal clicked")}
                    />
                ))}
            </div>
        </section>
    );
};

export default RecentDeals;