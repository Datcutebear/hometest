import classNames from "classnames/bind";
import styles from './OptionBtn.module.scss'
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faGear, faShoppingCart,faHeart  } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function OptionBtn() {
    return ( 
        <div className={cx('option-menu')}>
            <Tippy
                className={cx('custom-tippy')}
                placement="left"
                content="Choose Theme Styling">
                <button className={cx('btn','setting-btn')}>
                    <FontAwesomeIcon icon={faGear} />
                </button>     
            </Tippy>

            <Tippy
                className={cx('custom-tippy')}
                placement="left"
                content='Showcase'>
                <button className={cx('btn','heart-btn')}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>      
            </Tippy>

            <Tippy
                className={cx('custom-tippy')}
                placement="left"
                content='Theme Documentation'>
                <button className={cx('btn','book-btn')}>
                    <FontAwesomeIcon icon={faBookOpen} />
                </button>         
            </Tippy>

            <Tippy
                className={cx('custom-tippy')}
                placement="left"
                content='Purchase Theme'>
                <button className={cx('btn','cart-btn')}><FontAwesomeIcon icon={faShoppingCart} /></button>
            </Tippy>

        </div>
    );
}

export default OptionBtn;