import styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import Header from '../component/Header';
import Footer from '../component/Header/footer/footer';


const cx = classNames.bind(styles)
function DefaultLayout({children}){
    return(
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
} 

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default DefaultLayout