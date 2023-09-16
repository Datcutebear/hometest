import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './MenuItems.module.scss';
import MenuLists from '~/components/Popper/MenuLists/MenuLists';

const cx = classNames.bind(styles);

function MenuItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={cx('menu-item')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cx('title')}>
        {item.title}
        <div className={cx('icon')}>{item.icon}</div>
      </div>
      {isHovered && (
        <MenuLists id={item.id} items={item.children.data} visible={true} />
      )}
    </div>
  );
}

function MenuItems({ items = [], children }) {
  return (
    <div className={cx('wrapper')}>
      {items.map((item, index) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuItems;