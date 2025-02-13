import { SquareMeterIcon } from "./SquareMeterIcon"
import Button from "./ui/Button"

interface NextAppointmentProps {
    address: string
    city: string
    state: string
    zipCode: string
    appointmentDate: string
    price: number
    people: number
    roomArea: number
}

const classes = {
    card: `bg-blue rounded-xl border border-grey-100 relative p-6`,
    header: `flex items-center justify-between`,
    title: `text-white text-lg font-bold leading-7`,
    roundedSvg: `w-[350px] h-[350px] right-0 -bottom-40 absolute opacity-10 bg-gradient-to-b from-white to-white rounded-full`,
    dot: `w-2.5 h-2.5 bg-white rounded-xl`,
    avatar: `rounded-[30px] overflow-hidden`,
    label: `text-gray-300 text-sm font-normal leading-7`,
    value: `text-white text-sm font-bold leading-7`,
    wrapper: `self-stretch justify-start items-start gap-2 inline-flex overflow-hidden`,
    content: `flex items-center gap-4 mt-6`,
    subContent: `grow shrink flex-col justify-start items-start inline-flex`,
    footer: `flex items-center justify-between mt-6`,
    btnContent: `flex items-center justify-center`,
    button: `border border-gray-300 rounded-full bg-white text-black font-semibold hover:bg-gray-100 z-20`

}

export default function NextAppointment({
    address,
    city,
    state,
    zipCode,
    appointmentDate,
    price,
    people,
    roomArea,
}: NextAppointmentProps) {
    return (
        <section className={classes.card}>
            <div className={classes.header}>
                <div className={classes.title}>Next Appointment</div>
                <div className={classes.dot} />
            </div>
            <div className={classes.roundedSvg} />
            <div className={classes.content}>
                <div className={classes.avatar}>
                    <img
                        src={"https://placehold.co/50x50"}
                        alt={`Property at ${address}`}
                        width={50}
                        height={50}
                    />
                </div>
                <div className={classes.subContent}>
                    <div className={classes.wrapper}>
                        <div className={classes.value}>{address}</div>
                    </div>
                    <div className={classes.wrapper}>
                        <div className={classes.label}>{city},</div>
                        <div className={classes.label}>{state}</div>
                        <div className={classes.label}>{zipCode}</div>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.subContent}>
                    <div className={classes.wrapper}>
                        <div className={classes.label}>Appointment Date</div>
                    </div>
                    <div className={classes.wrapper}>
                        <div className={classes.value}>{appointmentDate}</div>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.subContent}>
                    <div className={classes.wrapper}>
                        <div className={classes.label}>Room Area</div>
                    </div>
                    <div className={classes.wrapper}>
                        <div className={classes.value}>{roomArea}</div>
                        <SquareMeterIcon />
                    </div>
                </div>
                <div className={classes.subContent}>
                    <div className={classes.wrapper}>
                        <div className={classes.label}>People</div>
                    </div>
                    <div className={classes.wrapper}>
                        <div className={classes.value}>{people}</div>
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <div className={classes.subContent}>
                    <div className={classes.wrapper}>
                        <div className={classes.label}>Price</div>
                    </div>
                    <div className={classes.wrapper}>
                        <div className={classes.value}>${price}</div>
                    </div>
                </div>
                <div className={classes.btnContent}>
                    <Button className={classes.button} size="large" onClick={() => console.log("See Detail Cliked !")} text="See Detail" intent="secondary" />
                </div>
            </div>
        </section>
    )
}

