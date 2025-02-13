import type React from "react";
import { MoreVertical } from "lucide-react";

// interface props
export interface UserCardProps {
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl?: string;
    onMoreClick?: () => void;
    icon?: React.ReactNode;
    className?: string;
}

// styles
export const classes = {
    card: "flex h-20 w-full py-2.5 items-center flex-nowrap bg-white overflow-hidden ",
    contentWrapper: "flex gap-6 items-center grow shrink-0 basis-0 flex-nowrap relative",
    avatar: "w-10 h-10 shrink-0 rounded-3xl relative overflow-hidden z-[1]",
    avatarImage: "w-full h-full object-cover rounded-3xl",
    userInfo: "flex flex-col items-start grow shrink-0 basis-0 flex-nowrap relative z-[3]",
    nameWrapper: "flex gap-1 items-start self-stretch shrink-0 flex-nowrap relative z-[4]",
    firstName: "shrink-0 basis-auto text-base font-bold leading-7 text-navy relative text-left whitespace-nowrap z-[5]",
    lastName: "grow shrink-0 basis-auto text-base font-bold leading-7 text-navy relative text-left whitespace-nowrap z-[6]",
    email: "self-stretch shrink-0 basis-auto text-base font-normal leading-7 text-grey-700 relative text-left whitespace-nowrap z-[7]",
    moreButton: "w-12 h-12 shrink-0 rounded-[50px] relative overflow-hidden z-[8] hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center",
    moreIcon: "w-5 h-5 text-gray-600",
};

// component
const UserCard: React.FC<UserCardProps> = ({ firstName, lastName, email, avatarUrl, onMoreClick, icon, className }) => {
    return (
        <div className={classes.card + className}>
            <div className={classes.contentWrapper}>
                <div className={classes.avatar}>
                    <img
                        src={avatarUrl || `/placeholder.svg?height=44&width=44`}
                        alt={`${firstName} ${lastName}`}
                        className={classes.avatarImage}
                    />
                </div>
                <div className={classes.userInfo}>
                    <div className={classes.nameWrapper}>
                        <span className={classes.firstName}>{firstName}</span>
                        <span className={classes.lastName}>{lastName}</span>
                    </div>
                    <span className={classes.email}>{email}</span>
                </div>
            </div>
            <button
                className={classes.moreButton}
                onClick={onMoreClick}
                aria-label="More options"
            >
                {icon || <MoreVertical className={classes.moreIcon} />}
            </button>
        </div>
    );
};

export default UserCard;