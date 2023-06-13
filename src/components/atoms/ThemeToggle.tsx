const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { cursor } from '@/store/slices'
import { useAppDispatch } from '@/store/hooks'

const ThemeToggle = () => {
    const dispatch = useAppDispatch()
    const { theme, setTheme } = useTheme();

    const handleFocused = () => {
        dispatch(cursor('focused'))
    }
    const handleDefault = () => {
        dispatch(cursor('default'))
    }

    const toggleSwitch = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    };


    return (
        <div
            onMouseEnter={handleFocused}
            onMouseLeave={handleDefault}
            className='lg:flex justify-end hidden pointer-events-auto'>

            <div className="switch"
                onClick={toggleSwitch}
                data-isOn={theme === 'dark'}>
                <motion.div
                    layout
                    transition={spring}
                    className="handle bg-black dark:bg-white" />
            </div>

        </div>
    )
}
export default ThemeToggle








