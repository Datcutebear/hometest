import classNames from "classnames/bind";
import styles from './ChooseUs.module.scss'

const cx = classNames.bind(styles)

function TripBox({src, content, name}) {
    return ( 
        <div className={cx('element')}>
            <a className={cx('choose-image')} href="/">
                <img 
                    src={src}
                    alt="French Autumn" 
                    className={cx('element-img')} />
            </a>

            <div className={cx('choose-container')}>
                <div className={cx('responsive')}>
                    <b className={cx('choose-content')}>
                        {name}
                    </b>
                </div>
                <div className={cx('choose-footer')}>
                    {content}
                </div>
            </div>
        </div>
    );
}

export default TripBox;