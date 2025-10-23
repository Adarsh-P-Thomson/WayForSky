import React from 'react';

const InProgress = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f2f5',
      color: '#333',
    },
    icon: {
      fontSize: '4rem',
      marginBottom: '20px',
    },
    title: {
      fontSize: '2.5rem',
      margin: '0 0 10px 0',
    },
    message: {
      fontSize: '1.2rem',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>🚧</div>
      <h1 style={styles.title}>Work in Progress</h1>
      <p style={styles.message}>This page is currently under construction. Please check back later!</p>
    </div>
  );
};

export default InProgress;

