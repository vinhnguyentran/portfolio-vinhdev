import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] =  useState([])
  const genarateStar = () => {
    const numberOfStar = Math.floor((window.innerWidth * innerHeight) / 10000);

    const newStar = [];
    // id, size, x, y, opacity, animationDuration
    for (let i = 0; i < numberOfStar; i++) {
      newStar.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStar);
  };
  const genarateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];
    // id, size, x, y, delay, duration
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };
  useEffect(() => {
    genarateStar();
    genarateMeteors();
    const handleResize = () => {
        genarateStar();
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 15 + "px",
            height: meteor.size * 1 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            boxShadow: `0px 0px 10px ${meteor.size * 1}px rgba(255,255, 250, 0.4)`,
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
