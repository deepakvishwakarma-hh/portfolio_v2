const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const toggleSwitch = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    };


    return (
        <div className='lg:flex justify-end hidden pointer-events-auto ct'>

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








