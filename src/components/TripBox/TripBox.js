import classNames from "classnames/bind";
import styles from './TripBox.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles)

function TripBox({src, price, name, city, review, day, sale, delPrice}) {
    return ( 
        <div className={cx('element')}>
            <a className={cx('tour-image')} href="/">
                <img 
                    width="700" 
                    height="466" 
                    src={src}
                    alt="French Autumn" 
                    className={cx('element-img')} />
                {sale && <div className={cx('sale-tour')}>
                    Sale
                </div>}
                <div className={cx('tour-price')}>
                    {sale && <span className={cx('cost')}>
                            {delPrice}
                        </span>}
                    {price}
                </div>
            </a>

            <div className={cx('tour-info')}>
                <div>
                    <h4 className={cx('tour-name')}>
                        {name}
                    </h4>
                    <div className={cx('city-name')}>
                        {city}
                    </div>
                </div>
                <div className={cx('tour-footer')}>
                    <div className={cx('star-review')}>
                        <div className={cx('star-icon')}>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className={cx('review')}>
                            {review} reviews
                        </div>
                    </div>
                    <div className={cx('tour-day')}>
                        <FontAwesomeIcon className={cx('clock-icon')} icon={faClockFour} />
                        <span className={cx('tour-day-content')}>
                            {day} days
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TripBox;