import React, { memo, useState, useEffect, useRef } from "react";
import { Carousel } from "antd";

import ThemeHeader from "@/components/theme-header";
import AlbumCover from "@/components/album-cover";

import { NewAlbumWrapper } from "@/styles/discover/c-pages/recommend-sty";

import { recommend } from "@/fetch";

export default memo(function NewAlbum() {
  const [newAlbums, setNewAlbums] = useState([]);
  const carouselRef = useRef();

  useEffect(() => {
    recommend.getNewAlbum({ limit: 10, offest: 0 }).then((res) => {
      const { albums } = res;
      if (albums && albums.length) {
        setNewAlbums(albums);
      }
    });
  }, [recommend]);

  return (
    <NewAlbumWrapper>
      <ThemeHeader title="新碟上架" moreLink="/discover/album"></ThemeHeader>
      <div className="new-album-content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => carouselRef.current.prev()}
        ></div>
        <div className="album-main">
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="album-page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return <AlbumCover key={iten.id} info={iten}></AlbumCover>;
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => carouselRef.current.next()}
        ></div>
      </div>
    </NewAlbumWrapper>
  );
});
