"use client"

import Lenis from '@studio-freight/lenis';
import {useEffect} from "react";

export default function useLenis () {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, []);
}