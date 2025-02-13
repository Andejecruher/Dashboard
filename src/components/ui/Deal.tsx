export interface DealsProps {
    imageUrl: string
    address: string
    price: number
    city: string
    state: string
    dateTime: string
    onClick?: () => void
}

const classes = {
    container: `w-full h-20 py-2.5 flex items-start gap-3 overflow-hidden`,
    content: `flex-grow h-14 flex items-center gap-4`,
    avatar: `w-11 h-11 rounded-3xl flex justify-center items-center overflow-hidden`,
    info: `flex-grow flex flex-col items-start`,
    infoContent: `w-full flex justify-between items-start gap-3`,
    label: `flex-grow text-navy text-base font-bold leading-7`,
    labelGrey: `text-right text-grey-600 text-sm font-normal leading-7`,
    alingRight: `flex items-start`
}

export default function Deal({ imageUrl, address, price, city, state, dateTime, onClick }: DealsProps) {
    return (
        <div className={classes.container} onClick={onClick}>
            <div className={classes.content}>
                <div className={classes.avatar}>
                    <img
                        src={imageUrl || "/placeholder.svg"}
                        alt={`Property at ${address}`}
                        width={44}
                        height={44}
                    />
                </div>
                <div className={classes.info}>
                    <div className={classes.infoContent}>
                        <div className={classes.label}>{address}</div>
                        <div className={classes.alingRight}>
                            <span className={classes.label}>
                                ${price.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <div className={classes.infoContent}>
                        <div className={classes.labelGrey}>
                            {city}, {state}
                        </div>
                        <div className={classes.labelGrey}>
                            {dateTime}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

