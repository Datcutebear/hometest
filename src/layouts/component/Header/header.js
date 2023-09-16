import classNames from "classnames/bind";
import styles from './header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import MenuItems from "~/components/Popper/MenuItems";
import OptionBtn from "~/components/OptionBtn";


const cx = classNames.bind(styles)
const MENU = [
    {
        title: 'Home',
        icon: <FontAwesomeIcon icon={faChevronDown} />,
        children: {
            data: [
                {
                    id: 1,
                    title: 'Home 1 - Background Image'
                },
                {
                    id: 2,
                    title: 'Home 2 - Youtube Video'
                },
                {
                    id: 3,
                    title: 'Home 3 - Google Inspired'
                },
                {
                    id: 4,
                    title: 'Home 4 - Travel Site'
                }
            ]
        }
    },
    {
        title: 'Tours',
        icon: <FontAwesomeIcon icon={faChevronDown} />,
        children: {
            data: [
                {
                    id: 1,
                    title: 'Tour Classic Fullwidth',
                    icon: <FontAwesomeIcon icon={faChevronRight} />,
                    children: {
                        data: [
                            {
                                id: 1,
                                title: '2 columns'
                            },
                            {
                                id: 2,
                                title: '3 columns'
                            },
                            {
                                id: 3,
                                title: '4 column'
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    title: 'Tour Classic Sidebar',
                    icon: <FontAwesomeIcon icon={faChevronRight} />,
                    children: {
                        data: [
                            {
                                id: 1,
                                title: 'Right Sidebar'
                            },
                            {
                                id: 2,
                                title: 'Left Sidebar'
                            },
                        ]
                    }
                },
                {
                    id: 3,
                    title: 'Tour Grid Fullwidth',
                    icon: <FontAwesomeIcon icon={faChevronRight} />,
                    children: {
                        data: [
                            {
                                id: 1,
                                title: '2 columns'
                            },
                            {
                                id: 2,
                                title: '3 columns'
                            },
                            {
                                id: 3,
                                title: '4 column'
                            }
                        ]
                    }
                },
                {
                    id: 4,
                    title: 'Tour Grid Sidebar',
                    icon: <FontAwesomeIcon icon={faChevronRight} />,
                    children: {
                        data: [
                            {
                                id: 1,
                                title: 'Right Sidebar'
                            },
                            {
                                id: 2,
                                title: 'Left Sidebar'
                            },
                        ]
                    }
                },
                {
                    id: 5,
                    title: 'Tour List Sidebar',
                    icon: <FontAwesomeIcon icon={faChevronRight} />,
                    children: {
                        data: [
                            {
                                id: 1,
                                title: 'Right Sidebar'
                            },
                            {
                                id: 2,
                                title: 'Left Sidebar'
                            },
                        ]
                    }
                },
                {
                    id: 6,
                    title: 'Tour Header Type',
                    icon: <FontAwesomeIcon icon={faChevronRight} />,
                    children: {
                        data: [
                            {
                                id: 1,
                                title: 'Feature Image'
                            },
                            {
                                id: 2,
                                title: 'Video'
                            },
                        ]
                    }
                },
                {
                    id: 7,
                    title: 'Tour Categories',
                    icon: <FontAwesomeIcon icon={faChevronRight} />,
                    children: {
                        data: [
                            {
                                id: 1,
                                title: 'Rural'
                            },
                            {
                                id: 2,
                                title: 'Snow & Ice'
                            },
                            {
                                id: 3,
                                title: 'Wildlife'
                            },
                            {
                                id: 4,
                                title: 'Mountain'
                            },
                            
                        ]
                    }
                }
            ]
        }
    },
    {
        title: 'Booking',
        icon: <FontAwesomeIcon icon={faChevronDown} />,
        children: {
            data: [
                {
                    id: 8,
                    title: 'Online Payment for Booking',
                    icon: <FontAwesomeIcon icon={faChevronRight} />,
                    children: {
                        data: [
                            {
                                id: 1,
                                title:'Variable Tour Pricing'
                            },
                            {
                                id: 2,
                                title: 'Simple Tour Pricing'
                            }
                        ]
                    }
                },
                {
                    id: 9,
                    title: 'Custom Booking Form',
                    icon: <FontAwesomeIcon icon={faChevronRight} />,
                    children: {
                        data: [
                            {
                                id: 1,
                                title:'Booking From + Sub Tour Date'
                            },
                            {
                                id: 2,
                                title: 'Booking From + Custom Date'
                            }
                        ]
                    }
                },
                {
                    id: 10,
                    title: 'Tour Durations',
                    icon: <FontAwesomeIcon icon={faChevronRight} />,
                    children: {
                        data: [
                            {
                                id: 1,
                                title:'Single Day Tour'
                            },
                            {
                                id: 2,
                                title: 'Multiple Days Tour'
                            }
                        ]
                    }
                },
                {
                    id: 11,
                    title: 'Custom Booking URL for Affiliate Tour'
                },
                {
                    id: 12,
                    title: 'Custom Book using custom HTML & Shortcode'
                },
                {
                    id: 13,
                    title: 'Header Options',
                    icon: <FontAwesomeIcon icon={faChevronRight} />,
                    children: {
                        data: [
                            {
                                id: 1,
                                title:'Standard Background Header'
                            },
                            {
                                id: 2,
                                title: 'Video Background Header'
                            }
                        ]
                    }
                },
                {
                    id: 14,
                    title: 'Layout Options',
                    icon: <FontAwesomeIcon icon={faChevronRight} />,
                    children: {
                        data: [
                            {
                                id: 1,
                                title:'With Sidebar'
                            },
                            {
                                id: 2,
                                title: 'Fullwidth'
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        title: 'Destinations',
        icon: <FontAwesomeIcon icon={faChevronDown} />,
        children: {
            data: [
                {
                    id: 1,
                    title: 'Destination Fullwidth',
                },
                {
                    id: 2,
                    title: 'Destination + Video Header',
                },
                {
                    id: 3,
                    title: 'Destination Right Sidebar'
                },
                {
                    id: 4,
                    title: 'Destination Left Sidebar'
                },
                {
                    id: 5,
                    title: 'Single Destination'
                },
                {
                    id: 6,
                    title: 'Single Destination + Video'
                }
            ]
        }
    },
    {
        title: 'Pages',
        icon: <FontAwesomeIcon icon={faChevronDown} />,
        children: {
            data: [
                {
                    id: 1,
                    title: 'About Us'
                },
                {
                    id: 2,
                    title: 'Contact Us'
                },
                {
                    id: 3,
                    title: 'FAQS'
                },
                {
                    id: 4,
                    title: 'Gallery'
                },
                {
                    id: 5,
                    title: 'Page Fullwidth'
                },
                {
                    id: 6,
                    title: 'Page + Video Background Header'
                },
                {
                    id: 7,
                    title: 'Page Right Sidebar'
                },
                {
                    id: 8,
                    title: 'Page Left Sidebar'
                }
            ]
        }
    },
    {
        title: 'Blogs',
        icon: <FontAwesomeIcon icon={faChevronDown} />,
        children: {
            data: [
                {
                    id: 1,
                    title: 'Blog Right Sidebar'
                },
                {
                    id: 2,
                    title: 'Blog Left Sidebar'
                },
                {
                    id: 3,
                    title: 'Blog Fullwidth'
                },
                {
                    id: 4,
                    title: 'Blog Grid Right Sidebar'
                },
                {
                    id: 5,
                    title: 'Blog Grid Left Sidebar'
                },
                {
                    id: 6,
                    title: 'Blog Grid Fullwidth'
                },
                {
                    id: 7,
                    title: 'Blog Full + Grid Right Sidebar'
                },
                {
                    id: 8,
                    title: 'Blog Full + Grid Left Sidebar'
                },
                {
                    id: 9,
                    title: 'Blog Full + Grid Fullwidth'
                }
            ]
        }
    },
    {
        title: 'Shortcodes',
        icon: <FontAwesomeIcon icon={faChevronDown} />,
        children: {
            data: [
                {
                    id: 1,
                    title: 'Accordion & Toggles'
                },
                {
                    id: 2,
                    title: 'Alert Boxes'
                },
                {
                    id: 3,
                    title: 'Animated Content'
                },
                {
                    id: 4,
                    title: 'Buttons & Social Icons'
                },
                {
                    id: 5,
                    title: 'Columns'
                },
                {
                    id: 6,
                    title: 'Google Maps'
                },
                {
                    id: 7,
                    title: 'Image Frame & Animations'
                },
                {
                    id: 8,
                    title: 'Image Teasers'
                },
                {
                    id: 9,
                    title: 'Pricing tables'
                },
                {
                    id: 10,
                    title: 'Tabs'
                }
            ]
        }
    },
    {
        title: 'Shops',
        icon: <FontAwesomeIcon icon={faChevronDown} />,
        children: {
            data: [
                {
                    id: 1,
                    title: 'Shop Fullwidth'
                },
                {
                    id: 2,
                    title: 'Shop Sidebar'
                },
                {
                    id: 3,
                    title: 'Single Product FullWidth'
                },
                {
                    id: 4,
                    title: 'Single Product With Sidebar'
                }
            ]
        }
    }

]
function Header() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('standard-wrapper')}>
                <div className={cx('logo')}>
                    <div className={cx('logo-image')}>
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png" 
                            alt="" 
                            width="92" 
                            height="22" 
                            data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png" 
                            data-ll-status="loaded" className="entered lazyloaded" />
                    </div>

                    <div className={cx('menu-list')}>
                        <MenuItems items = {MENU} />
                        <FontAwesomeIcon className={cx('mobile-icon')} icon={faBars} />
                        <div className={cx('shopping-cart')}>
                            <FontAwesomeIcon className={cx('shopping-icon')} icon={faCartShopping} />
                            <div className={cx('shopping-count')}>
                                0
                            </div>
                        </div>
                    </div>

                    <OptionBtn />

                </div>
            </div>
        </div>
     );
}

export default Header;