// DESC: ColumnDeal component that displays the deal information in table row
import React from "react";

// interface props
interface ColumnDealProps {
    image: string;
    description: string;
}

const classes = {
    container: `flex items-center gap-2 p-2`,
    image: `inline-block size-10 rounded-full ring-2 ring-white`,
    description: `text-base text-black`,

}

// ColumnNameDeal component
const ColumnNameDeal: React.FC<ColumnDealProps> = ({ image, description }) => {
    return (
        <div className={classes.container}>
            <img className={classes.image} src={image} alt={description} />
            <h3 className={classes.description}>{description}</h3>
        </div>
    );
};

// export 
export default ColumnNameDeal;