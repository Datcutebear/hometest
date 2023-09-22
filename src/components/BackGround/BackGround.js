import React from "react";
import classNames from "classnames/bind";
import styles from "./BackGround.module.scss"


const cx = classNames.bind(styles)

function BackGround({children}) {
  return ( 
    <div className={cx("wrapper")}>
        <img
          className={cx("background-image")}
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
          alt="Spectacular View"
        />
        {children}
    </div>
  );
}

export default BackGround;