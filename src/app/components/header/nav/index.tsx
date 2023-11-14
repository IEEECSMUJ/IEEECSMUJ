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
        title: "Events",
        href: "/events",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Blog",
        href: "https://medium.com/@ieeecs",
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
        <div className='lg:w-[20%] w-screen'>
            <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
                <div className={styles.body}>
                    <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                        <div className={styles.header}>
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
        </div>
    )
}