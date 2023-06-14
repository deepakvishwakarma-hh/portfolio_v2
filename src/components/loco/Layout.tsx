interface Props {
    children: any;
}
import { useRef } from "react"
import Cursor from "../Cursor";
import { useRouter } from "next/router"
import BackToTop from "../atoms/BackToTop";
import { LocomotiveScrollProvider as RLSProvider, useLocomotiveScroll } from 'react-locomotive-scroll';
import useMobileDetect from "@/hooks/useMobileDetect";

import { motion, useAnimationControls } from 'framer-motion'

import { useState } from 'react'

const Locomotive: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    const { asPath } = router
    const containerRef = useRef<any>(null)
    const isMobile = useMobileDetect()


    const skew = useAnimationControls()

    const skewRef = useRef<any>(null)


    const scroll = useRef({
        // the initial scroll is supposed to be 0, if the user doesnt do anything
        cache: 0,
        current: 0,
    });

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
            onUpdate={(ele: any) => {
                // on   
                ele.on('scroll', (args: any) => {
                    // console.log(args.scroll.y)
                    scroll.current.current = args.scroll.y;
                    // compute the distance from the current to the previous
                    const distance = scroll.current.current - scroll.current.cache;
                    // Then we will need to update the cache with the current scroll
                    scroll.current.cache = scroll.current.current;
                    // animating..  
                    // skew.start({ skewY: distance / 8 }, {
                    //     duration: .1,
                    // })
                    skewRef.current.style.transform = `skewY(${distance / 8}deg)`
                });

            }}
            onLocationChange={(scroll: any) => {

                setTimeout(() => {
                    scroll.scrollTo(0, { duration: 1, disableLerp: true })
                }, 500)

            }}>
            <div data-scroll-container className="4xl:px-[300px] 3xl:px-[250px] 2xl:px-[200px] xl:px-[176px] lg:px-[176px] md:px-[48px] px-[24px]" ref={containerRef}>
                {!isMobile && <Cursor />}
                <div id="skew-wrapper" ref={skewRef}>
                    {children}
                    {router.pathname !== '/projects/[name]' && <BackToTop />}
                </div>
            </div>
        </RLSProvider >

    )
}
export default Locomotive