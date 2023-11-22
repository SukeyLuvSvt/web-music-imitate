import React, { memo, useEffect } from "react";

import PropTypes from "prop-types";
import { getSizeImage } from "@/utils/format";

import { LeaderboardWrapper } from "../styles/comps-style/leaderboard-sty";

const Leaderboard = function (props) {
  const { info } = props;
  const { tracks = [] } = info;

  return (
    <LeaderboardWrapper>
      <div className="leaderboard-top">
        <div className="top-left">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="" className="image_cover"></a>
        </div>
        <div className="top-right">
          <a href="">{info.name}</a>
          <div>
            <span className="btn play sprite_02"></span>
            <span className="btn favor sprite_02"></span>
          </div>
        </div>
      </div>
      <div className="leaderboard-content">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="rank-item">
              <div className="item-order">{index + 1}</div>
              <div className="item-info">
                <span>{item.name}</span>
                <div className="operate">
                  <span className="btn sprite_02 play"></span>
                  <span className="btn sprite_icon2 addto"></span>
                  <span className="btn sprite_02 favor"></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="leaderboard-footer">
        <a href="">查看全部&gt;</a>
      </div>
    </LeaderboardWrapper>
  );
};
Leaderboard.propTypes = {
  info: PropTypes.object.isRequired,
};

export default memo(Leaderboard);
