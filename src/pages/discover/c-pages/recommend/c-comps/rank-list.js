import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import store from "@/store";
// import { setTopUpList, setTopNewList, setTopOriginList } from "@/store/ranking";

import ThemeHeader from "@/components/theme-header";
import Leaderboard from "@/components/leaderboard";

// import { recommend } from "@/fetch";
import { RankListWrapper } from "@/styles/discover/c-pages/recommend-sty";

export default memo(function RankList() {
  // const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      topUpList: state.rankReducer.topUpList,
      topNewList: state.rankReducer.topNewList,
      topOriginList: state.rankReducer.topOriginList,
    };
  }, shallowEqual);
  // useEffect(() => {
  //   recommend.getTopList({ id: 19723756 }).then((res) => {
  //     dispatch(setTopUpList(res.playlist));
  //   });
  //   recommend.getTopList({ id: 3779629 }).then((res) => {
  //     dispatch(setTopNewList(res.playlist));
  //   });
  //   recommend.getTopList({ id: 2884035 }).then((res) => {
  //     dispatch(setTopOriginList(res.playlist));
  //   });
  // }, [recommend, dispatch]);

  return (
    <RankListWrapper>
      <ThemeHeader title="榜单" moreLink="/discover/ranking"></ThemeHeader>
      <div className="rank-list-content">
        <Leaderboard info={state.topUpList}></Leaderboard>
        <Leaderboard info={state.topNewList}></Leaderboard>
        <Leaderboard info={state.topOriginList}></Leaderboard>
      </div>
    </RankListWrapper>
  );
});
