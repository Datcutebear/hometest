import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ToTop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ToTop() {
  const [showToTop, setShowToTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setShowToTop(true);
    } else {
      setShowToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={cx('to-top', { 'hide': !showToTop })}
      onClick={handleScrollToTop}
    >
      <FontAwesomeIcon className={cx('up-icon')} icon={faChevronUp} />
    </div>
  );
}

export default ToTop;