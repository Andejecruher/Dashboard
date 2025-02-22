// component
interface SvgProps {
    width?: number
    height?: number
    fill?: string
}

const SquareMeterIcon: React.FC<SvgProps> = ({ width = 16, height = 16, fill = "white" }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 16 11" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 1.47002V10.5H1.85185V4.60053H1.92681L4.26367 10.4559H5.52469L7.86155 4.62257H7.93651V10.5H9.78836V1.47002H7.43386L4.94709 7.53704H4.84127L2.3545 1.47002H0Z"
                fill={fill}
            />
            <path
                d="M11.1188 5.98501H15.4266V4.88272H13.0677V4.83422L13.8525 4.2522C14.8975 3.55556 15.3649 2.98677 15.3649 2.21076C15.3649 1.24956 14.5183 0.5 13.2044 0.5C11.9257 0.5 11.0086 1.17901 11.0086 2.31217H12.3093C12.3093 1.83157 12.6576 1.56702 13.1867 1.56702C13.6806 1.56702 14.0774 1.80511 14.0774 2.2284C14.0774 2.63404 13.7599 2.89418 13.2661 3.29541L11.1188 5.01058V5.98501Z"
                fill={fill}
            />
        </svg>
    )
}

// export
export default SquareMeterIcon
