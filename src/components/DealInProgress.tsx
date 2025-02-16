// Desc: DealInProgress component
import Badge from "./ui/Badge"
import Button from "./ui/Button"
import Timeline from "./ui/TimeLine"
import { ArrowRight } from "lucide-react"

// interface comment
export interface Comment {
    dateTime: string
    comment: string
}

// interface props
export interface DealsProps {
    imageUrl: string
    address: string
    city: string
    state: string
    onGoToDeal?: () => void
    onLoadMore?: () => void
    comments?: Comment[]
}

// styles
const classes = {
    container: `w-full py-2 flex flex-col overflow-hidden bg-white rounded-xl border border-grey-100`,
    header: `flex items-center justify-between w-full border-b border-grey-100 p-6`,
    footer: `pl-6 pr-6 pb-0 pt-0`,
    content: `flex items-center gap-4 justify-between`,
    avatar: `w-11 h-11 rounded-3xl flex justify-center items-center overflow-hidden`,
    info: `flex-grow flex flex-col items-start`,
    address: `text-navy text-base font-bold leading-7`,
    city: `text-right text-grey-600 text-sm font-normal leading-7`,
    action: `flex items-center justify-end gap-4`,
    buttonAction: `border-0 rounded-xl cursor-pointer`,
    footerAction: `flex items-center justify-center`,
    buttonFooterAction: `border-none rounded-full font-extrabold cursor-pointer`,
}

// component
const DealInProgres: React.FC<DealsProps> = ({ imageUrl, address, city, state, onGoToDeal, onLoadMore, comments }) => {
    return (
        <section className={classes.container}>
            <div className={classes.header}>
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
                        <span className={classes.address}>{address}</span>
                        <span className={classes.city}>{city}, {state}</span>
                    </div>
                </div>
                <div className={classes.action}>
                    <Badge text="In Progress" intent="primary" size="large" />
                    <Button className={classes.buttonAction} size="md" onClick={onGoToDeal} intent="ghost" icon={<ArrowRight />} iconPosition="center" />
                </div>
            </div>
            <div className={classes.footer}>
                <Timeline items={comments || []} />
                <div className={classes.footerAction}>
                    <Button className={classes.buttonFooterAction} intent="ghost" size="lg" text="Load More" onClick={onLoadMore} />
                </div>
            </div>
        </section>
    )
}

// export
export default DealInProgres
