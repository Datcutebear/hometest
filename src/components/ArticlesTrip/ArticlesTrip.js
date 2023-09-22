import classNames from "classnames/bind";
import styles from './ArticlesTrip.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function ArticlesTrip({src, day, name, content }) {
    return ( 
        <div className={cx('element')}>
            <a className={cx('article-image')} href="/">
                <img 
                    width="700" 
                    height="466" 
                    src={src}
                    alt="French Autumn" 
                    className={cx('element-img')} />
            </a>

            <div className={cx('article-info')}>
                <div>
                    <h4 className={cx('article-day')}>
                        {day}
                    </h4>
                    <h4 className={cx('city-name')}>
                        {name}
                    </h4>
                </div>
                <div className={cx('article-footer')}>
                    <div className={cx('article-content')}>
                        {content}
                    </div>
                    <div className={cx('read-more')}>
                        Read More
                        <FontAwesomeIcon className={cx('more-icon')} icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticlesTrip;