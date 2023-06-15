interface props {
    text: string,
    active?: boolean
    click: () => void,
}

import { motion } from 'framer-motion'

export const MenuButton: React.FC<props> = ({ click, text, active }) => {
    const hoverProp = { letterSpacing: '5px', color: '#4b6cc1', fontWeight: '700' }
    return (
        <motion.button
            onClick={click}
            style={active ? hoverProp : {}}
            className="text-left text-md font-semibold capitalize w-max cursor-pointer text-black dark:text-white 
            hover:tracking-[5px] hover:text-blue hover:text-bold transition-all duration-500 pointer-events-auto"
        >{text}</motion.button>
    )
}

