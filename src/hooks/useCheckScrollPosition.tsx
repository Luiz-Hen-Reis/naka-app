"use client";

import { useEffect, useRef, useState } from "react";

export function useCheckScrollPosition() {
    const [isStickyVisible, setIsStickyVisible] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
              const { top } = ref.current.getBoundingClientRect();
              setIsStickyVisible(top < 0);
            }
            };

            window.addEventListener('scroll', handleScroll);
        
            return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { isStickyVisible, ref };
}
