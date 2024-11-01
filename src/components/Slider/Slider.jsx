import React from "react";
import Slider from "react-slick";
import s from './Slider.module.css';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={s.skiderr} {...settings}>
      <div>
        <img className={s.kartinka} src="https://i.ebayimg.com/images/g/xXYAAOSw2Xddllok/s-l1600.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://avatars.mds.yandex.net/i?id=5b264b4756cea82798a1d0a53f788f0f_l-5222323-images-thumbs&n=13"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://avatars.mds.yandex.net/i?id=27c91f65ef3aca735e3f4c422b419a61_l-4688954-images-thumbs&n=13"></img>
      </div>
      
    </Slider>
  );
}