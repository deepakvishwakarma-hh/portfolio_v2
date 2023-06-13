import OutlineText from "../Animation/OutlineText"
import { useLocomotiveScroll } from "react-locomotive-scroll";
const BackToTop = () => {
    const { scroll } = useLocomotiveScroll();
    const scrollToTop = () => {
        scroll.scrollTo(0, {
            duration: 1000, // The duration of the scroll animation in milliseconds
            easing: [0.25, 0.1, 0.25, 1], // The easing function to use for the animation
        });
    };
    return (
        <section data-scroll-section className="flex items-center justify-center flex-col md:h-[100vh] h-[80vh]">
            <OutlineText onClick={scrollToTop} text="Back to top" classNames=" 
             4xl:text-h1-4xl 3xl:text-h1-3xl 2xl:text-h1-2xl xl:text-h1-xl lg:text-h1-lg md:text-h1-md text-h1-sm font-extrabold text-center cursor-pointer w-full" />
            <p className="text-center text-sm text-gray"> © 2023 - Sahej Tuli</p>
            <p className="text-center text-sm text-gray mt-2 mb-10">Made with love in San Francisco, CA</p>
        </section>
    )
}
export default BackToTop

