import classNames from "classnames/bind";
import styles from './Input.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles)

function Input({icon, type, placeholder}) {
    return ( 
        <div className={cx("input-group")}>
            <FontAwesomeIcon className={cx('icon')} icon={icon} />
            <input type={type} placeholder={placeholder} className={cx("input")} />
        </div>    
    );
}

export default Input;