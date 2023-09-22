import classNames from "classnames/bind";
import styles from './footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faInstagram, faPinterestP, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ToTop from "~/components/ToTop";


const cx = classNames.bind(styles)

function Footer() {
    return ( 
        <div className={cx('footer')}>
           <div className={cx('container')}>
                <div className={cx('text-1')}>
                    <div className={cx('title')}>
                        Our Awards
                    </div>
                    
                    <div className={cx('content')}>
                        London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.
                    </div>
    
                    <div className={cx('image')}>
                        <img width="246" height="113" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png" alt="" />
                    </div>
                </div>
    
                <div className={cx('text-2')}>
                    <div className={cx('title')}>
                        Contact Info
                    </div>
    
                    <ul className={cx('contact')}>
                        <li className={cx('element')}>
                            <FontAwesomeIcon className={cx('element-icon')} icon={faPhone} />
                            1-567-124-44227
                        </li>
    
                        <li className={cx('element')}>
                            <FontAwesomeIcon className={cx('element-icon')} icon={faLocationDot} />
                            184 Main Street East Perl Habour 8007
                        </li>
    
                        <li className={cx('element')}>
                            <FontAwesomeIcon className={cx('element-icon')} icon={faClock} />
                            Mon - Sat 8.00 - 18.00 Sunday CLOSED
                        </li>
                    </ul>
    
                    <div className={cx('social')}>
                        <div className={cx('social-element','f')}>
                            <FontAwesomeIcon className={cx('face')} icon={faFacebookF} />
                        </div>
    
                        <div className={cx('social-element', 't')}>
                            <FontAwesomeIcon className={cx('twitter')} icon={faTwitter} />
                        </div>
    
                        <div className={cx('social-element', 'y')}>
                            <FontAwesomeIcon className={cx('youtube')} icon={faYoutube} />
                        </div>
    
                        <div className={cx('social-element', 'p')}>
                            <FontAwesomeIcon className={cx('printerest')} icon={faPinterestP} />
                        </div>
    
                        <div className={cx('social-element', 'i')}>
                            <FontAwesomeIcon className={cx('instagram')} icon={faInstagram} />
                        </div>
                    </div>
                </div>
    
                <div className={cx('recent-trip')}>
                    <div className={cx('title', 'title-1')}>
                        Recent Trips    
                    </div>
                    <div className={cx('trip-img')}>
                        <div className={cx('trip-img-top')}>
                            <div className={cx('trip-img-3')}>
                                <img className={cx('size-img')} src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia" />
                            </div>
                            <div className={cx('trip-img-3')}>
                                <img className={cx('size-img')} src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" alt="Gentoo Penguins, Falkland Islands (Islas Malvinas), British Overseas Territory" />
                            </div>
                            <div className={cx('trip-img-3')}>
                                <img className={cx('size-img')} src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" alt="Aerial View of Singapore CBD Skyline, Marina Bay Esplanade and Raffles Place, Singapore" />
                            </div>
                        </div>
                        <div className={cx('trip-img-bottom')}>
                            <div className={cx('trip-img-3')}>
                                <img className={cx('size-img')} src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" alt="View Of Sugarloaf Mountain, Botafogo And The City of Rio De Janeiro, Brazil, South America" />
                            </div>
                            <div className={cx('trip-img-3')}>
                                <img className={cx('size-img')} src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" alt="Sacre Coeur (Basilica of the Sacred Heart of Paris), Paris, France :: HDR" />
                            </div>
                            <div className={cx('trip-img-3')}>
                                <img className={cx('size-img')} src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" alt="The Great Gate (Darwaza-i rauza) of Taj Mahal, Agra, Uttar Pradesh, India :: HDR" />
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           <ToTop />
           <div className={cx('footer-title')}>
                <div className={cx('footer-title-content')}>
                    © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
                </div>
                <ul className={cx('footer-title-menu')}>
                    <li className={cx('menu-element')}>
                        Home
                    </li>
                    <li className={cx('menu-element')}>
                        Tours
                    </li>
                    <li className={cx('menu-element')}>
                        Blog
                    </li>
                    <li className={cx('menu-element')}>
                        Purchase Theme
                    </li>
                </ul>
           </div>   
        </div>
    );
}

export default Footer;