import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  // Auto-hide after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      {/* Logo/Title */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '60px' }}
      >
        <h1
          style={{
            fontSize: '64px',
            fontWeight: '700',
            color: 'white',
            margin: 0,
            letterSpacing: '4px',
          }}
        >
          HRMS
        </h1>
        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            margin: '16px 0 0 0',
            letterSpacing: '2px',
          }}
        >
          Human Resource Management System
        </p>
      </motion.div>

      {/* THE SPINNER */}
      <motion.div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: '5px solid rgba(255,255,255,0.3)',
          borderTopColor: 'white',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          color: 'white',
          marginTop: '32px',
          fontSize: '16px',
          fontWeight: '500',
          letterSpacing: '1px',
        }}
      >
        Loading...
      </motion.p>

      {/* Animated Dots */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'white',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;