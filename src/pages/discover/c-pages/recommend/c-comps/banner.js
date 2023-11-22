import React, { memo, useState, useEffect, useRef, useCallback } from "react";

import { Carousel } from "antd";

import {
  BannerWrapper,
  BannerMain,
  BannerDownload,
  BannerControl,
} from "@/styles/discover/c-pages/recommend-sty";

import { recommend } from "@/fetch";
export default memo(function Banner() {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerRef = useRef();

  useEffect(() => {
    recommend.getTopBanner().then((res) => {
      if (res && res.banners) {
        setBanners(res.banners);
      }
    });
  }, [recommend]);

  const bannerChange = useCallback((curInd, nextInd) => {
    // setTimeout(() => {
    setCurrentIndex(nextInd);
    // }, 0);
  }, []);

  const bgImg =
    banners[currentIndex] &&
    banners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper $bgImage={bgImg}>
      <div className="banner wrap-v2">
        <BannerMain>
          <Carousel
            autoplay
            effect="fade"
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {banners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerMain>
        <BannerDownload></BannerDownload>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => bannerRef.current.prev()}
          ></button>
          <button
            className="btn rgt"
            onClick={() => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
