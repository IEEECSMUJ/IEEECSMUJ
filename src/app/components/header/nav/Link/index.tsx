import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function Index({data, isActive, setSelectedIndicator}) {

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { title, href, index} = data;

    return (

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        <motion.div className={styles.link} onMouseEnter={() => { // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
            setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <Link href={href}>{title}</Link>
        </motion.div>
    )
}