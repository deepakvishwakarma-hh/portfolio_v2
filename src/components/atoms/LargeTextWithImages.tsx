// upgrade needed : props_names, basic performs

interface Props {
    heading: string,
    href: string,
    discription: string,
    first_image_url: string,
    second_image_url: string
}
import { cursor } from "@/store/slices"
import { useRouter } from "next/router"
import Parallax from "../Animation/Parallax"
import { useAppDispatch } from "@/store/hooks"
import { motion, useAnimationControls } from 'framer-motion'

const LargeTextWithImages: React.FC<Props> = ({
    href,
    heading,
    discription,
    first_image_url,
    second_image_url }) => {
    const { push } = useRouter()
    const dispatch = useAppDispatch()
    const simpleTextControl = useAnimationControls()
    const OutlineTextControl = useAnimationControls()

    const handleInnerMouseEnter = () => {
        dispatch(cursor('focused'))
        OutlineTextControl.start({ opacity: 0 }, { duration: .4 })
    }

    const handleInnerMouseLeave = () => {
        dispatch(cursor('default'))
        OutlineTextControl.start({ opacity: 1 }, { duration: .4 })
    }

    const handleClick = () => {
        push(`/projects/${href}`)
    }

    const comp = (
        <motion.div className='flex relative'>
            <motion.h3 className='tracking-wider 4xl:text-h2-4xl 3xl:text-h2-3xl 2xl:text-h2-2xl xl:text-h2-xl lg:text-h2-lg md:text-h2-md text-h2-sm !font-extrabold capitalize' animate={simpleTextControl}>{heading}</motion.h3>
            <motion.h3 className={` absolute outline-text tracking-wider 4xl:text-h2-4xl 3xl:text-h2-3xl 2xl:text-h2-2xl xl:text-h2-xl lg:text-h2-lg md:text-h2-md text-h2-sm !font-extrabold capitalize`} animate={OutlineTextControl}>{heading}</motion.h3>
        </motion.div>
    )

    return (
        <motion.div
            onClick={handleClick}
            onTouchEnd={handleInnerMouseLeave}
            onTouchStart={handleInnerMouseEnter}
            onMouseEnter={handleInnerMouseEnter}
            onMouseLeave={handleInnerMouseLeave}
            className='py-[5rem] border-y-[1px] border-gray cursor-pointer'>
            <div
                data-scroll
                data-scroll-speed="1"
                className="lg:block hidden mb-10"
            >{comp}
            </div>

            <div className="lg:hidden block">{comp}</div>
            <p className='text-lg text-gray mb-[2rem]'>{discription}</p>
            <img src={first_image_url} width="60%" className="ml-auto" alt="project-image" />
            <div
                data-scroll
                data-scroll-speed="2"
                className="-mt-[6rem] mb-[5rem]"
            >
                <img src={second_image_url} width="60%" className="" alt="poject-image" />

            </div>

        </motion.div >
    )
}

export default LargeTextWithImages


