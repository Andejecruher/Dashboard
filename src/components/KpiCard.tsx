// Desc: KpiCard component
import React from 'react'

// interface props
interface KpiProps {
    title: string
    value: number
    icon: React.ReactNode
}

// styles
const classes = {
    container: `w-full h-44 relative overflow-hidden flex justify-between items-center bg-gradient-to-r from-blue to-blue-100 rounded-xl p-6`,
    title: `block font-inter text-lg font-medium text-white`,
    value: `block mt-2.5 font-manrope text-5xl font-semibold text-white`,
    contentIcon: `w-20 h-20 rounded-full`,
    icon: `bg-gradient-to-tl from-green to-blue-500 rounded-full w-16 h-16 flex justify-center items-center`
}

// component
const KpiCard: React.FC<KpiProps> = ({ title, value, icon }) => {
    return (
        <div className={classes.container}>
            <div>
                <span className={classes.title}>{title}</span>
                <span className={classes.value}>{value}</span>
            </div>
            <div className={classes.contentIcon}>
                <div className={classes.icon}>
                    {icon}
                </div>
            </div>
        </div>
    )
}

// export
export default KpiCard