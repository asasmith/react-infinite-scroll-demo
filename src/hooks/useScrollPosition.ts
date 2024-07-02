import { useEffect, useRef, useState } from 'react';

export function useScrollPosition(
    ref: React.MutableRefObject<HTMLElement | null>,
    debounceDelay: number = 0,
): number {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const el = ref.current;

        function handleScroll() {
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = window.setTimeout(() => {
                if (el) {
                    setScrollPosition(el.scrollTop);
                }
            }, debounceDelay);
        }

        if (el) {
            el.addEventListener('scroll', handleScroll);

            return () => {
                el.removeEventListener('scroll', handleScroll);
            };
        }
    });

    return scrollPosition;
}
