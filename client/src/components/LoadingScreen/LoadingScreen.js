import React, { useState, useEffect, useRef } from 'react';
import { TimelineMax, Power4 } from 'gsap';

import {
    Container,
    ProgressBar,
    Number
} from './styles';

const LoadingScreen = props => {
    const [progress, setProgress] = useState(0);
    const [showLoading, setShowLoading] = useState(true);

    const loadingRef = useRef(null);
    const animationTL = new TimelineMax();


    useEffect(() => {
        animate();

        return () => {
            animationTL.kill();
        };
    }, [props.startLoading]);

    const updateCounter = (self, number) => {
        const newVal = Math.ceil(self.target.val);
        setProgress(newVal);
    };

    const animate = () => {
        const counter = {
            val: progress
        };

        if (props.startLoading) {
            animationTL
                .to(counter, 4.5, {
                    val: 100,
                    onUpdate: updateCounter,
                    onUpdateParams: ['{self}', 'val'],
                    ease: Power4.easeInOut
                })
                .to(loadingRef.current, 1, {
                    autoAlpha: 0,
                    onComplete: () => setShowLoading(false)
                });
        }
    }

    const renderLoading = () => {
        if (showLoading) {
            return (
                <Container ref={loadingRef} >
                    <ProgressBar progress={progress} />
                    <Number>{progress}</Number>
                </Container>
            );
        }
        return null;
    }

    return renderLoading();
};

export default LoadingScreen;

