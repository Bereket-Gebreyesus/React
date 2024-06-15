import { useState, useEffect } from 'react';

function useWithinWindowWidth(minWidth, maxWidth) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width >= minWidth && width <= maxWidth;
}

export default useWithinWindowWidth;