import React, { memo } from "react";
import PropTypes from "prop-types";

import { getSizeImage, getCount } from "@/utils/format";

import { ThemeCoverWrapper } from "@/styles/comps-style/theme-cover-sty.js";
const ThemeCover = memo(function (props) {
  const { info } = props;

  return (
    <ThemeCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} />
        <div className="cover sprite_cover">
          <div className="cover-info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom ">{info.name}</div>
    </ThemeCoverWrapper>
  );
});

ThemeCover.propTypes = {
  info: PropTypes.object.isRequired,
};
export default ThemeCover;
