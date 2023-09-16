import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './MenuLists.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function MenuLists({ id, items = [], visible }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const renderSubMenu = (subItems) => {
    if (Array.isArray(subItems)) {
      return subItems.map((subItem, index) => (
        <div key={index} className={cx('menu-list-title')}>
          {subItem.title} 
        </div>
    ));
    }
    return null;
  };
  const renderMenuList = () => {
    return items.map((item, index) => (
      <div
        key={index}
        className={cx('title')}
        onMouseEnter={() => handleMouseEnter(item.id)}
        onMouseLeave={handleMouseLeave}
      >
        {item.title}
        {item.icon && (
          <div className={cx('icon')}>{item.icon}</div>
        )}
        {
          hoveredItem === item.id && 
          (
            <div className={cx('submenu', `submenu-${item.id}`)}>
              {renderSubMenu(item?.children?.data || [])}
            </div>
          )
        }
      </div>
    ));
  };

  return (
    <div className={cx('menu-lists', { visible: visible })}>
      <PopperWrapper className={cx('custom-popper')}>
        {renderMenuList()}
      </PopperWrapper>
    </div>
  );
}

export default MenuLists;