import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { dicoverMenu } from "@/constants/local-data.js";
import { DiscoverWrapper } from "@/styles/discover/style.js";

export default memo(function Discover(props) {
  return (
    <DiscoverWrapper>
      <div className="menu">
        <div className="top wrap-v2">
          {dicoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </div>
      </div>
      <Outlet />
    </DiscoverWrapper>
  );
});
