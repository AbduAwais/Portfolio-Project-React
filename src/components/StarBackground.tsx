import { useState } from "react";


export const StarBackground = () => {
    const [stars] = useState(() => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        return Array.from({ length: numberOfStars }, (_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,
        }));
    });

    const [meteors] = useState(() =>
        Array.from({ length: 8 }, (_, i) => ({
            id: i,
            size: Math.random() * 2 + 1,
            x: Math.random() * 100,
            y: Math.random() * 20,
            delay: Math.random() * 15,
            animationDuration: Math.random() * 3 + 3,
        }))
    );

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacity: star.opacity,
                    animationDuration: `${star.animationDuration}s`,
                }}></div>
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: `${meteor.size * 50}px`,
                    height: `${meteor.size * 2}px`,
                    left: `${meteor.x}%`,
                    top: `${meteor.y}%`,
                    animationDelay: `${meteor.delay}s`,
                    animationDuration: `${meteor.animationDuration}s`,
                }}></div>
            ))}
        </div>

    );
};