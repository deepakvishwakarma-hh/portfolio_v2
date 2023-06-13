import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
const Cursor = () => {

    const _cursor = useAppSelector(store => store.deafult.cursorState)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const varients = {
        focused: {
            zIndex: 1,
            width: '60px',
            height: '60px',
            top: mousePos.y + -30,
            left: mousePos.x + -30,
            background: '#4b6dc14d',
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        def: {
            zIndex: 1,
            width: '15px',
            height: '15px',
            top: mousePos.y + -7.5,
            left: mousePos.x + -7.5,
            background: '#4b6cc1',
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    }


    const handleMouseMove = (event: any) => {
        setMousePos({ x: event.clientX, y: event.clientY });
    };
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            style={{ pointerEvents: 'none' }}
            className="circle z-40 fixed rounded-full"
            animate={_cursor == 'default' ? varients.def : varients.focused}>
        </motion.div>
    )
}
export default Cursor