interface props {
    text: string,
    classNames?: string,
    onClick?: any
}

import { motion, useAnimationControls } from "framer-motion"

const OutlineText: React.FC<props> = ({
    text, classNames, onClick
}) => {

    const simpleTextControl = useAnimationControls()
    const OutlineTextControl = useAnimationControls()

    const handleInnerMouseEnter = () => {
        OutlineTextControl.start({ opacity: 0 }, { duration: .4 })
    }
    const handleInnerMouseLeave = () => {
        OutlineTextControl.start({ opacity: 1 }, { duration: .4 })
    }

    return (
        <motion.div
            onClick={onClick}
            className='flex relative ct'
            onTouchEnd={handleInnerMouseLeave}
            onMouseEnter={handleInnerMouseEnter}
            onMouseLeave={handleInnerMouseLeave}
            onTouchStart={handleInnerMouseEnter}>
            <motion.h3
                animate={simpleTextControl}
                className={`tracking-wider ct ${classNames}`}
                initial={{ opacity: 1 }}>{text}</motion.h3>
            <motion.h3
                animate={OutlineTextControl}
                className={`absolute outline-text ct  tracking-wider ${classNames}`}
                initial={{ opacity: 1 }}>{text}</motion.h3>
        </motion.div>

    )
}
export default OutlineText