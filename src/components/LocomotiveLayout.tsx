interface Props {
    children: any;
}
import { useRef } from "react"
import { useRouter } from "next/router"
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';

const Locomotive: React.FC<Props> = ({ children }) => {
    const { asPath } = useRouter()
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
        >
            <div data-scroll-container className="4xl:px-[300px] 3xl:px-[250px] 2xl:px-[200px] xl:px-[176px] lg:px-[176px] md:px-[48px]  px-[24px]" ref={containerRef}>
                {children}
            </div>
        </RLSProvider>
    )
}
export default Locomotive