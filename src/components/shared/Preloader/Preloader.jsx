// Preloader.jsx
import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css'; // If you're using CSS modules

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const shapesGroup = document.querySelector('.shapes-group');
        if (shapesGroup) {
          shapesGroup.classList.add('shapes-phase-2');
        }

        const clippedLight = document.querySelector('.clipped-light');
        if (clippedLight) {
          clippedLight.classList.add('clipped-light-2');
        }

        setLoading(false);
      }, 2000);
    });

    return () => {
      window.removeEventListener('load', () => setLoading(false));
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className={styles.preloader}>
      {/* Your preloader HTML goes here */}
      <style jsx>{`
        /* Your CSS goes here */
      `}</style>
    </div>
  );
};

export default Preloader;
