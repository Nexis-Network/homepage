// components/shared/AnimatedBackground.js

const AnimatedBackground = () => (
      // eslint-disable-next-line react/jsx-filename-extension
      <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          background: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
          opacity: 0.1,
          inset: '-200%',
          width: '400%',
          height: '400%',
          position: 'absolute',
          transform: 'translateX(0.4%) translateY(30%) translateZ(0px)'
        }} />
      </div>
    );
  
  export default AnimatedBackground;
  