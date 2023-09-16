import classNames from "classnames/bind";
import styles from './home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <h2>Home page</h2> 
        </div>   
    );
}

export default Home;