import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ThemeHeaderWrapper } from "@/styles/comps-style/theme-header-sty";

const ThemeHeader = memo(function (props) {
  const { title, keywords, moreLink, keywordClick } = props;

  return (
    <ThemeHeaderWrapper className="sprite_02">
      <div className="left">
        <Link to={moreLink}>{title}</Link>
        <div className="keyword-list">
          {keywords &&
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span onClick={() => keywordClick(item)}>{item}</span>
                  <span className="divider">|</span>
                </div>
              );
            })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink}>更多</Link>
        <i className="icon sprite_02"></i>
      </div>
    </ThemeHeaderWrapper>
  );
});

ThemeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
};

export default ThemeHeader;
