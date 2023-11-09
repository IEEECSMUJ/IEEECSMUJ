import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "blog",
        href: "https://medium.com/@ieeecs",
    },
    {
        title: "About Us",
        href: "/about",
    },
    {
        title: "Team",
        href: "/team",
    },
]

export default function index() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathname = usePathname();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
            <div className={styles.body}>
                <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map( (data, index) => {
                            return <Link key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link>
                        })
                    }
                </div>
                <Footer />
            </div>
            <Curve />
        </motion.div>
    )
}