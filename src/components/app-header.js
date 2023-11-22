import React, { memo } from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { headerLinks } from "@/constants/local-data.js";
import {
  AppHeaderWrapper,
  HeaderLeft,
  HeaderRight,
} from "@/styles/comps-style/app-header.js";

export default memo(function AppHeader() {
  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      );
    }
  };

  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className={classnames("select-item")} key={item.title}>
                  {showItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search-inp"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          ></Input>
          <div className="creator-center">创作者中心</div>
          <div className="login-btn">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  );
});
