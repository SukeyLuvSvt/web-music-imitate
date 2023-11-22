import React, { memo, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { recommend } from "@/fetch";
import { setTopHotList } from "@/store/ranking";
import { specialRanks, globalRanks } from "@/constants/local-data";
import { getSizeImage } from "@/utils/format";

import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "@/styles/discover/c-pages/ranking-sty.js";

export default memo(function DisRanking() {
  const weeks = ["一", "二", "三", "四", "五", "六", "七"];

  const dispatch = useDispatch();
  const [topHotListState, setTopHotListState] = useState({});

  const state = useSelector(
    (state) => ({
      ...state.rankReducer,
    }),
    shallowEqual
  );
  const formatUpdate = useCallback((timper) => {
    const currentTime = new Date().getTime();
    if (currentTime - timper < 86400000) {
      // 一天内更新
      return "刚刚更新";
    } else {
      const day = new Date(timper).getDay();
      const str = `每周${weeks[day - 1]}更新`;
      return str;
    }
  });
  useEffect(() => {
    recommend
      .getTopList({ id: specialRanks[specialRanks.length - 1].id })
      .then((res) => {
        dispatch(setTopHotList(res?.playlist || null));
        setTopHotListState(res?.playlist || {});
      });
  }, [recommend, dispatch]);

  return (
    <RankingWrapper>
      <div className="ranking-content wrap-v2">
        <RankingLeft>
          <div className="rank-classify featuredRank">
            <p className="classify-title">云音乐特色榜</p>
            <div className="classify-content">
              {Object.keys(state).map((item, index) => {
                return (
                  <div className="item">
                    <img
                      src={getSizeImage(state[item].coverImgUrl, 40)}
                      alt=""
                    />
                    <div className="rgt">
                      <span>{state[item].name}</span>
                      <span>{formatUpdate(state[item].updateTime)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rank-global featuredRank">
            <p className="classify-title">全球媒体榜</p>
            <div className="classify-content">
              {Object.keys(state).map((item, index) => {
                return (
                  <div className="item">
                    <img
                      src={getSizeImage(state[item].coverImgUrl, 40)}
                      alt=""
                    />
                    <div className="rgt">
                      <span>{state[item].name}</span>
                      <span>{formatUpdate(state[item].updateTime)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </RankingLeft>
        <RankingRight></RankingRight>
      </div>
    </RankingWrapper>
  );
});
