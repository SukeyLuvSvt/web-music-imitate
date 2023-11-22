import React, { memo, useCallback, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { getSizeImage } from "@/utils/format";
import { SettledSingerWrapper } from "@/styles/discover/c-pages/recommend-sty";

import { recommend } from "@/fetch";

export default memo(function SettledSinger() {
  const state = useSelector((state) => {
    return {
      settledSingers: state.singerReducer.settledSingers,
    };
  }, shallowEqual);

  const getArtistInfo = useCallback(
    async (id) => {
      let str = await recommend.getArtistInfo(id);
      return str.result;
    },
    [recommend]
  );

  return (
    <SettledSingerWrapper>
      <div className="title">
        <span>入驻歌手</span>
        <a href="">查看全部 &gt;</a>
      </div>
      <div className="singer-list">
        {state.settledSingers &&
          state.settledSingers.slice(0, 5).map((item, index) => {
            return (
              <div className="item" key={item.id}>
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="rgt">
                  <span className="name">{item.name}</span>
                  <span className="info">
                    {getArtistInfo(item.id).value || "此接口未上线"}
                  </span>
                </div>
              </div>
            );
          })}
      </div>

      <div className="btn">申请成为网易音乐人</div>
    </SettledSingerWrapper>
  );
});
