'use client'
import React from 'react';
import styles from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
  return (
    <div className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.video}>
        <source src="/bloodcellsbackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
    </div>
  );
};

export default BackgroundVideo;
