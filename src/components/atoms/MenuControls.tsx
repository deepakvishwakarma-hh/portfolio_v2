import Menu from './Menu'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { hover_tracking_and_bold } from '@/animation'
const DynamicToggler = dynamic(() => import('./ThemeToggle'),
    { ssr: false })

import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

const MenuControls = ({ handleDefault, handleFocused, isMenuVisible, setMenuVisible }: any) => {
    const { theme } = useTheme()
    const { push } = useRouter()
    const handleClick = () => {
        push('/')
    }

    return (
        (
            <div className="w-full lg:h-full fixed lg:z-0 z-[999999] top-0 left-0 p-[24px] 4xl:p-[50px] 3xl:p-[50px] 2xl:p-[50px] xl:p-[25px] grid grid-cols-2 hidescrollbar bg-red-500-- pointer-events-none">
                <div>
                    <motion.h5
                        onClick={handleClick}
                        onHoverEnd={handleDefault}
                        onHoverStart={handleFocused}
                        style={theme === 'light' ? { color: 'black' } : { color: 'white' }}
                        className="cursor-pointer text-md text-black dark:text-white  pointer-events-auto"
                        whileHover={hover_tracking_and_bold}>Sahej Tuli's <br /> Portfolio</motion.h5>
                </div>

                <div>
                    <DynamicToggler />
                    <MobileMenuToggleButton {...{ isMenuVisible, setMenuVisible }} />
                </div>

                <div className="hidden lg:flex items-end w-full h-full">
                    <Menu />
                </div>

                <div className="hidden lg:flex items-end justify-end w-full h-full">
                    <Link href={'/'}>
                        <motion.h5
                            onHoverEnd={handleDefault}
                            onHoverStart={handleFocused}
                            onClick={() => { window.location.href = "mailto:someone @example.com" }}
                            className=" cursor-pointer text-md hidden lg:block pointer-events-auto"
                            whileHover={{ letterSpacing: '3px', color: '#4b6cc1', fontWeight: "bold" }}>Available for work!</motion.h5>
                    </Link>
                </div>
            </div>
        )

    )
}
export default MenuControls


const MobileMenuToggleButton = ({ isMenuVisible, setMenuVisible }: any) => {
    const transition = {
        duration: .4
    }
    const animation = {
        top: { rotate: isMenuVisible ? 45 : 0 },
        bottom: {
            rotate: isMenuVisible ? -45 : 0,
            marginTop: isMenuVisible ? 0 : 5
        }
    }
    const handleClick = () => {
        setMenuVisible(!isMenuVisible)
        console.log('hey')
    }
    return (
        <div className='lg:hidden justify-end flex pointer-events-auto '>
            <button
                className='p-5 pr-0'
                onClick={handleClick}>
                <motion.div
                    animate={animation.top}
                    transition={transition}
                    className='dark:bg-white bg-black h-[1px] w-[35px]'></motion.div>
                <motion.div
                    transition={transition}
                    animate={animation.bottom}
                    className='dark:bg-white bg-black h-[1px] w-[35px]'></motion.div>
            </button>
        </div>
    )
}