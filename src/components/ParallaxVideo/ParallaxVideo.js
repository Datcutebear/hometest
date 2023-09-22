import React from 'react';
import classNames from 'classnames/bind';
import styles from './ParallaxVideo.module.scss'

const cx = classNames.bind(styles)

const ParallaxVideo = () => {
  return (
    <div className={cx('parallax')}>
      <div className={cx('jarallax-container-0')}>
        <div></div>
      </div>
    </div>
  );
};

export default ParallaxVideo;