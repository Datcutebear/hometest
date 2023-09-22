import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import BackGround from "~/components/BackGround/BackGround";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarAlt, faChevronDown, faChevronUp, faUpDown, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import OptionBtn from "~/components/OptionBtn";
import Input from "~/components/Input";
import TripBox from "~/components/TripBox/TripBox";
import ChooseUs from "~/components/ChooseUs";
import ParallaxVideo from "~/components/ParallaxVideo";
import ArticlesTrip from "~/components/ArticlesTrip";

const cx = classNames.bind(styles);

function Home() {
  const [clickBtn, setClickBtn] = useState(false);
  const [icon, setIcon] = useState(faChevronDown);

  const handleClick = () => {
    setClickBtn(!clickBtn);
    setIcon(clickBtn ? faChevronDown : faChevronUp);
  };

  return (
    <div>
      <BackGround>
        <div className={cx("content")}>
          <div className={cx("main-content")}>
            <span className={cx("main")}>Where do you want to go?</span>
            <span className={cx("title")}>
              Trips, experience and places. All in one service
            </span>

            <div className={cx("inputs")}>
              <div className={cx("main-inputs")}>
                <Input type="text" placeholder="Destination, city" icon={faSearch} />

                <Input type="text" placeholder="Any month" icon={faCalendarAlt} />

                <Input type="text" placeholder="Sort By Date" icon={faUpDown} />

                <button className={cx("search-btn")}>Search</button>
              </div>
              <div className={cx("advance-inputs", { close: !clickBtn })}>
                <Input type="text" placeholder="All Categories" icon={faChevronDown} />

                <Input type="text" placeholder="Any Destination" icon={faChevronDown} />

                <Input type="text" placeholder="Max budget ex.500" icon={faDollarSign} />
              </div>

              <div onClick={handleClick} className={cx("advance-btn")}>
                <FontAwesomeIcon className={cx("advance-btn-icon")} icon={icon} />
                Advance Search
              </div>
            </div>
          </div>
        </div>
      </BackGround>

      <OptionBtn />

      <div className={cx('popular')}>
        <div className={cx('destination-content')}>
          <h2 className={cx('wrapper-content')}>
            Popular Destinations
          </h2>
          <div className={cx('wrapper-title')}>
            World's best tourist destinations
          </div>
        </div>

        <div className={cx('destination')}>
          <div className={cx('destination-element')}>
            <div className={cx('tokyo', 'background')}>
              <h3 className={cx('place-title')}>
                Tokyo
              </h3>
            </div>
          </div>

          <div className={cx('destination-element')}>
            <div className={cx('seoul','background')}>
              <h3 className={cx('place-title')}>
                Seoul
              </h3>
            </div>
          </div>

          <div className={cx('destination-element')}>
            <div className={cx('paris', 'background')}>
              <h3 className={cx('place-title')}>
                Paris
              </h3>
            </div>
          </div>

          <div className={cx('destination-element')}>
            <div className={cx('london', 'background')}>
              <h3 className={cx('place-title')}>
                London
              </h3>
            </div>
          </div>
        </div>
      </div>
      
      <div className={cx('trip')}>
        <div className={cx('destination-content')}>
          <h2 className={cx('wrapper-content')}>
            Best Value Trips
          </h2>
          <div className={cx('wrapper-title')}>
            Best offers trips from us
          </div> 
        </div>
      
        <div className={cx('trip-container')}>
          <TripBox 
            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg" 
            price = "$5,000" 
            name = "French Autumn" city = "City Tours, Urban" 
            review = "4" day = "5" />  
          <TripBox 
            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg" 
            price = "$6,000" 
            name = "Grand Switzerland" city = "Shopping, Mountain, Snow and Ice" 
            review = "4" day = "6"/> 
          <TripBox 
            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg" 
            price = "$2,500" 
            name = "Discover Japan" city = "City Tours, Iconic" 
            review = "4" day = "5" sale delPrice="$3,000"/> 
        </div> 
      </div>

      <div className={cx('choose-us')}>
        <div className={cx('destination-content')}>
          <h2 className={cx('wrapper-content')}>
            Why Choose us
          </h2>
          <div className={cx('wrapper-title')}>
            Here are reasons you should plan trip with us
          </div> 
        </div>
        <div className={cx('choose-container')}>
          <ChooseUs 
            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png" 
            name ="Handpicked Hotels"
            content="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa" 
          />

          <ChooseUs 
            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png" 
            name ="World Class Service"
            content="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa" 
          />

          <ChooseUs 
            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png" 
            name ="Best Price Guarantee"
            content="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa" 
          />  
        </div>
      </div>

      <div className={cx('video')}>
        <ParallaxVideo />
      </div>

      <div className={cx('article')}>
        <div className={cx('destination-content')}>
          <h2 className={cx('wrapper-content')}>
            Articles & Tips
          </h2>
          <div className={cx('wrapper-title')}>
            Explore some of the best tips from around the world
          </div> 
        </div>

        <div className={cx('article-container')}>
            <ArticlesTrip 
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
              day="DECEMBER 10, 2016"
              name="Memorial Day to Someone Told Me to Travel"
              content="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
            />

            <ArticlesTrip 
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
              day="DECEMBER 10, 2016"
              name="7 Tips For Nomads On A Budget Trips"
              content="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
            />

            <ArticlesTrip 
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
              day="DECEMBER 10, 2016"
              name="Taking A Travel Blog Victory Lap"
              content="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
            /> 
        </div>
      </div>
    </div>
  );
}

export default Home;