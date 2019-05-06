import { useState, useEffect } from 'react';

export const useWindowsWidth = () => {
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

    useEffect(() => {
        const windowResizeHandler = () => setWindowsWidth(window.innerWidth);
        window.addEventListener('resize', windowResizeHandler);

        return () => {
            window.removeEventListener('resize', windowResizeHandler);
        };
    })
    return windowsWidth;
};
