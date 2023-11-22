import React, { memo, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeHeader from "@/components/theme-header.js";
import ThemeCover from "@/components/theme-cover.js";

import { HotCommendWrapper } from "@/styles/discover/c-pages/recommend-sty.js";
import { recommend } from "@/fetch";

export default memo(function HotCommend() {
  const keywordList = ["华语", "流行", "摇滚", "民谣", "电子"];
  const [hotRcmdSongs, setHotRcmdSongs] = useState([]);

  const navigate = useNavigate();
  const keywordClick = useCallback(
    (keyword) => {
      navigate("/discover/songs", {
        cat: keyword,
      });
    },
    [navigate]
  );

  useEffect(() => {
    recommend.getHotRecommend().then((res) => {
      const { result } = res;
      if (result && result.length) {
        setHotRcmdSongs(result);
      }
    });
  }, [recommend]);

  return (
    <HotCommendWrapper>
      <ThemeHeader
        title="热门推荐"
        keywords={keywordList}
        moreLink="/discover/songs"
        keywordClick={keywordClick}
      ></ThemeHeader>
      <div className="hot-rcmd-songs-list">
        {hotRcmdSongs.slice(0, 8).map((item, index) => {
          return <ThemeCover info={item} key={item.id}></ThemeCover>;
        })}
      </div>
    </HotCommendWrapper>
  );
});
