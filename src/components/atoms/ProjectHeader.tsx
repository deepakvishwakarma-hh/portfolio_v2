interface props {
    name: string,
    index: string
}
import Section from '../loco/section';
import { motion } from 'framer-motion';
import TextRevealAnimation from '../Animation/TextRevealAnimation';

const Header: React.FC<props> = ({ name, index }) => {
    return (
        <Section className="relative">
            <div className="h-screen w-full">
                <div className=" flex items-center font-bold  justify-center h-full text-[#E5E5E5] dark:text-[#626262]">
                    <motion.div className='overflow-y-hidden flex items-center h-[40rem]'>
                        <div
                            data-scroll
                            data-scroll-speed="1">
                            <motion.div
                                animate={{ y: "0%", opacity: 1 }}
                                initial={{ y: "100%", opacity: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.87, 0, 0.13, 1],
                                    delay: 0,
                                }}>
                                <h1 className="relative 
                                4xl:text-[40rem]  
                                3xl:text-[32rem] 
                                2xl:text-[32rem] 
                                xl:text-[25rem] 
                                lg:text-[25rem] 
                                md:text-[20rem] 
                                text-[15rem] font-[800]">{index}</h1>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="h-screen w-full absolute top-0">
                <div className="4xl:text-h2-4xl 3xl:text-h2-3xl 2xl:text-h2-2xl xl:text-h2-xl lg:text-h2-lg md:text-h2-md text-h2-sm font-extrabold flex items-center  justify-center h-full text-black dark:text-white capitalize">
                    <TextRevealAnimation delay={.5} lines={[name]} />
                </div>
            </div>
        </Section>
    )
}
export default Header