import OutlineText from "../Animation/OutlineText"
const BackToTop = () => {
    const scrollToTop = () => {
        window?.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <section data-scroll-section className="flex items-center justify-center flex-col h-screen">
            <OutlineText onClick={scrollToTop} text="Back to top" classNames=" 
             4xl:text-h1-4xl 3xl:text-h1-3xl 2xl:text-h1-2xl xl:text-h1-xl lg:text-h1-lg md:text-h1-md text-h1-sm font-extrabold text-center cursor-pointer w-full" />
            <p className="text-center text-sm text-gray"> © 2023 - Sahej Tuli</p>
            <p className="text-center text-sm text-gray mt-2 mb-10">Made with love in San Francisco, CA</p>
        </section>
    )
}
export default BackToTop

