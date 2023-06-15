import { motion } from 'framer-motion'
interface props {
    text: string,
    wide?: number,
    className?: string,
    handleClick?: () => void,
    inline?: boolean
}

const TrackingText: React.FC<props> = ({ text, wide, className, handleClick }) => {
    return (
        <motion.p
            whileHover={{
                letterSpacing: '5px',
                color: '#4b6cc1',
                fontWeight: 'bold'
            }}
            onClick={handleClick}
            className={`${className} ct `}
        >{text}</motion.p>
    )
}
export default TrackingText