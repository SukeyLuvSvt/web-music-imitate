import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import RcmBanner from "./c-comps/banner";
import HotRecommend from "./c-comps/hot-recommend";
import NewAlbum from "./c-comps/new-album";
import RankList from "./c-comps/rank-list";
import UserLogin from "./c-comps/user-login";
import SettledSinger from "./c-comps/settled-singer";
import HotAnchor from "./c-comps/hot-anchor";

import { recommend } from "@/fetch";
import { setTopUpList, setTopNewList, setTopOriginList } from "@/store/ranking";
import { setSettledSingers } from "@/store/singer";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRgt,
} from "@/styles/discover/c-pages/recommend-sty.js";
export default memo(function DiscoverRecommend() {
  const dispatch = useDispatch();
  useEffect(() => {
    // 获取飙升榜
    recommend.getTopList({ id: 19723756 }).then((res) => {
      dispatch(setTopUpList(res.playlist || null));
    });
    // 获取新歌榜
    recommend.getTopList({ id: 3779629 }).then((res) => {
      dispatch(setTopNewList(res.playlist || null));
    });
    // 获取原创榜
    recommend.getTopList({ id: 2884035 }).then((res) => {
      dispatch(setTopOriginList(res.playlist || null));
    });
    // 获取入驻歌手-10
    recommend.getArtistList({ limit: 10, cat: 5001 }).then((res) => {
      dispatch(setSettledSingers(res.artists || null));
    });
  }, [recommend, dispatch]);

  return (
    <RecommendWrapper>
      <RcmBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <RankList></RankList>
        </RecommendLeft>
        <RecommendRgt>
          <UserLogin></UserLogin>
          <SettledSinger></SettledSinger>
          <HotAnchor></HotAnchor>
        </RecommendRgt>
      </Content>
    </RecommendWrapper>
  );
});
