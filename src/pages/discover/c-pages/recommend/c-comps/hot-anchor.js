import React, { memo, useState, useEffect } from "react";

import { recommend } from "@/fetch";
import { getSizeImage } from "@/utils/format";

import { HotAnchorWrapper } from "@/styles/discover/c-pages/recommend-sty";

export default memo(function HotAnchor() {
  const [djList, setDjList] = useState([]);

  useEffect(() => {
    recommend.getTopDj({ limit: 5 }).then((res) => {
      setDjList(res.data.list);
    });
  }, [recommend]);

  return (
    <HotAnchorWrapper>
      <div className="title">热门主播</div>
      <div className="content">
        {djList.map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <img src={getSizeImage(item.avatarUrl, 40)} alt="" />
              <div className="rgt">
                <div className="nickname">{item.nickName}</div>
                <div className="info">此接口未上线</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotAnchorWrapper>
  );
});
