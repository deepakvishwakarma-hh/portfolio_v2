import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
import Locomotive from './loco/Layout';
import MenuControls from "./atoms/MenuControls";
import { useState, useEffect, useMemo } from 'react'
import HorizontalLine from './atoms/HorizontalLines';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});


const getRandomText = () => {
    function getDayName() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const dayIndex = currentDate.getDay();
        return days[dayIndex];
    }

    const welcome_texts = ['hold on a sec...', 'Hola, amigo!', 'getting it ready...', `happy ${getDayName()}!`]
    const randomNumber = Math.floor(Math.random() * 4)
    return welcome_texts[randomNumber]
}

const Layout = ({ children }: any) => {
    const isMobile = useMobileDetect()
    const [AnimeState, setAnimeState] = useState(true)
    const [isMenuVisible, setMenuVisible] = useState(!true)
    const loadingTextAnimationControls = useAnimationControls()

    const random_text = useMemo(() => getRandomText(), [])

    useEffect(() => {
        loadingTextAnimationControls.start({ y: "0%", opacity: 1 }, {
            duration: 1,
            ease: [0.87, 0, 0.13, 1],
        })

        const timer = setTimeout(() => {
            loadingTextAnimationControls.start({ y: "-110%", opacity: 0 }, {
                duration: 1,
                ease: [0.87, 0, 0.13, 1],
            })

            setTimeout(() => {
                setAnimeState(false)
            }, 1000)

        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div
            style={isMobile ? {
                'overflow': 'scroll'
            } : undefined}
            className="w-full h-full fixed top-0 left-0 hidescrollbar">

            {AnimeState ? (
                <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="fixed z-50 top-0 left-0 w-full h-full bg-white dark:bg-black flex items-center justify-center">
                    <motion.div className='overflow-y-hidden'>
                        <motion.div
                            style={{ y: "100%", opacity: 0 }}
                            animate={loadingTextAnimationControls}
                            initial={{ opacity: 1 }}>
                            <p className='4xl:text-h3-4xl 3xl:text-h3-3xl 2xl:text-h3-2xl xl:text-h3-xl lg:text-h3-lg md:text-h3-md text-h3-xs !font-bold dark:text-white text-black first-letter:capitalize
                                '>{random_text}</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            ) : (
                <>

                    <AnimatedCursor
                        innerSize={15}
                        outerSize={15}
                        color="75, 108, 193"
                        outerAlpha={0.4}
                        innerScale={0.7}
                        outerScale={5}
                        trailingSpeed={15}
                        clickables={[
                            'a',
                            'select',
                            'textarea',
                            'button',
                            '.ct',
                        ]}
                    />

                    <MenuControls {...{
                        isMenuVisible,
                        setMenuVisible
                    }} />
                    <AnimatePresence>
                        {isMenuVisible && <MobileMenu {...{ isMenuVisible, setMenuVisible }} />}
                    </AnimatePresence>
                    <HorizontalLine />
                    <Locomotive>
                        {children}
                    </Locomotive>

                </>
            )}
        </div>
    )
}
export default Layout

const MobileMenu = ({ isMenuVisible, setMenuVisible }: any) => {
    const { pathname } = useRouter()
    return (
        <motion.div
            style={{ height: '0px', maxHeight: '1px' }}

            animate={{
                height: 920,
                maxHeight: '920px',
                transition: {
                    duration: 1,
                    ease: [0.87, 0, 0.13, 1]
                }
            }}

            exit={{
                height: 0,
                maxHeight: '1px',
                transition: {
                    duration: 1,
                    ease: [0.87, 0, 0.13, 1],
                    delay: 2
                }
            }}
            className="bg-[#ececec] dark:bg-[#1a1a1a] w-full fixed lg:z-0 z-50 top-0 left-0  lg:hidden block">
            <motion.div className='md:mt-[15rem] mt-[5rem] p-[24px] 4xl:p-[50px] 3xl:p-[50px] 2xl:p-[50px] xl:p-[25px] pt-[6rem]'>

                <motion.div
                    style={{ height: 1, width: '0%' }}
                    className='bg-black dark:bg-white'
                    animate={{ width: '100%', transition: { delay: 1, duration: .6 } }}
                    exit={{ width: '0%', transition: { delay: 1.3, duration: .6, ease: [0.87, 0, 0.13, 1], } }}
                >&nbsp;</motion.div>

                <motion.div className='mt-5'>
                    <Item {...{ setMenuVisible, isMenuVisible, showDelay: .8, hideDelay: 1.1, text: 'Home', active: pathname === '/', path: '/' }} />
                    <Item {...{ setMenuVisible, isMenuVisible, showDelay: .9, hideDelay: 1, text: 'About', active: pathname === '/about', path: '/about' }} />
                    <Item {...{ setMenuVisible, isMenuVisible, showDelay: 1, hideDelay: .9, text: 'Projects', active: pathname === '/projects', path: '/projects' }} />
                    <Item {...{ setMenuVisible, isMenuVisible, showDelay: 1.1, hideDelay: .8, text: 'Contact', active: false, onclick: () => { window.location.href = "mailto:someone@example.com" } }} />
                    <Toggle />

                </motion.div>

            </motion.div>
        </motion.div>
    )
}





const Item = ({ setMenuVisible, isMenuVisible, showDelay, hideDelay, text, active, path, onclick }: any) => {

    const { push } = useRouter()
    const animation = useAnimationControls()

    const handleClick = () => {
        setTimeout(() => {
            if (path) {
                push(path);
                setMenuVisible(false)
            } else {
                onclick();
                setMenuVisible(false)
            }
        }, 1000)
        animation.start({
            letterSpacing: '4px', color: '#4b6cc1', transition: {
                duration: 1
            }
        })
    }

    return (
        <motion.div onClick={handleClick} className='overflow-y-hidden'>
            <motion.div
                className=' cursor-pointer hover:text-[#4b6cc1] tracking-[4px]'
                animate={{
                    y: "0%", opacity: 1, transition: {
                        duration: 1,
                        ease: [0.87, 0, 0.13, 1],
                        delay: showDelay,
                    }
                }}
                exit={{
                    y: "100%", opacity: 0, transition: {
                        duration: 1,
                        ease: [0.87, 0, 0.13, 1],
                        delay: hideDelay,
                    }
                }}
                initial={{ y: "100%", opacity: 0 }}
            >


                <motion.h1
                    animate={animation}
                    style={active ? { color: '#4b6cc1', fontWeight: '800' } : undefined}
                    className="text-[2.5rem] tracking-normal font-medium hover:tracking-widest transition-all duration-500 hover:text-blue hover:font-[800]">{text}</motion.h1>
            </motion.div>
        </motion.div >
    )
}

// this is theme toggler for small (responsiveness)
const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

import { useTheme } from 'next-themes';
import useMobileDetect from '@/hooks/useMobileDetect';

const Toggle = () => {
    const { theme, setTheme } = useTheme();

    const handleFocused = () => {
    }
    const handleDefault = () => {
    }

    const toggleSwitch = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    };

    return (
        <motion.div
            animate={{
                opacity: 1, transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 1.1,
                }
            }}
            exit={{
                opacity: 0, transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: .8,
                }
            }}
            initial={{ opacity: 0 }}
            className=' flex mt-5'>
            <div
                onMouseEnter={handleFocused}
                onMouseLeave={handleDefault}
                className='flex justify-end'>

                <div className="switch bg-white dark:bg-black"
                    onClick={toggleSwitch}
                    data-isOn={theme === 'dark'}>
                    <motion.div
                        layout
                        transition={spring}
                        className="handle bg-black dark:bg-white" />
                </div>

            </div>
        </motion.div>
    )
}