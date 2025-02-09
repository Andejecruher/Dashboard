import type React from "react";
import { MoreVertical } from "lucide-react";

// interface props
interface UserCardProps {
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl?: string;
    onMoreClick?: () => void;
}

// styles
export const classes = {
    card: "flex w-full max-w-[341px] pt-[9px] pr-[14px] pb-[9px] pl-[24px] items-center flex-nowrap relative overflow-hidden mx-auto my-0 bg-white rounded-lg shadow-sm",
    contentWrapper: "flex gap-[16px] items-center grow shrink-0 basis-0 flex-nowrap relative",
    avatar: "w-[44px] h-[44px] shrink-0 rounded-[25px] relative overflow-hidden z-[1]",
    avatarImage: "w-full h-full object-cover rounded-[25px]",
    userInfo: "flex flex-col items-start grow shrink-0 basis-0 flex-nowrap relative z-[3]",
    nameWrapper: "flex gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]",
    firstName: "shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[27px] text-[#092c4c] relative text-left whitespace-nowrap z-[5]",
    lastName: "grow shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[27px] text-[#092c4c] relative text-left whitespace-nowrap z-[6]",
    email: "self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[27px] text-[#7e92a2] relative text-left whitespace-nowrap z-[7]",
    moreButton: "w-[50px] h-[50px] shrink-0 rounded-[50px] relative overflow-hidden z-[8] hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center",
    moreIcon: "w-5 h-5 text-gray-600",
};

// component
const UserCard: React.FC<UserCardProps> = ({ firstName, lastName, email, avatarUrl, onMoreClick }) => {
    return (
        <div className={classes.card}>
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
                <MoreVertical className={classes.moreIcon} />
            </button>
        </div>
    );
};

export default UserCard;