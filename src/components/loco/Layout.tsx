interface Props {
    children: any;
}
import { useRouter } from "next/router"
import { useRef, useEffect } from "react"
import BackToTop from "../atoms/BackToTop";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';

const Locomotive: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    const { asPath } = router
    const containerRef = useRef(null)
    return (
        <RLSProvider
            options={{
                smooth: true,
                getDirection: true,
                smoothMobile: false,
                lerp: 0.08
            }}
            watch={
                ["/", 1170]
            }
            location={asPath}
            containerRef={containerRef}
            onLocationChange={(scroll: any) => {

                setTimeout(() => {
                    scroll.scrollTo(0, { duration: 1, disableLerp: true })
                }, 500)

            }}

        >
            <div data-scroll-container className="4xl:px-[300px] 3xl:px-[250px] 2xl:px-[200px] xl:px-[176px] lg:px-[176px] md:px-[48px] px-[24px]" ref={containerRef}>
                {children}
                {router.pathname !== '/projects/[name]' && <BackToTop />}
            </div>
        </RLSProvider >

    )
}
export default Locomotive