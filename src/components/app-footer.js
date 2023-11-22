import React, { memo } from "react";

import { friendlyLinks, serviceLinks } from "@/constants/local-data";

import {
  AppFooterWrapper,
  ASpecial,
  ALink,
} from "@/styles/comps-style/app-footer-sty";

export default memo(function AppFooter() {
  return (
    <AppFooterWrapper>
      <div className="friendly-links wrap-v2">
        {friendlyLinks.map((item, index) => {
          return (
            <div className="item" key={item.title}>
              {item.imgUrl ? (
                <ASpecial
                  href=""
                  className="a-special"
                  imgUrl={item.imgUrl}
                  imgUrlHover={item.imgUrlHover}
                ></ASpecial>
              ) : (
                <ALink
                  href=""
                  bgpX={item.bgpX}
                  bgpY={item.bgpY}
                  bgpHoverX={item.bgpHoverX}
                  bgpHoverY={item.bgpHoverY}
                  imgUrl={item.img}
                ></ALink>
              )}

              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <div className="text-content wrap-v2">
        <p className="service-links">
          {serviceLinks.map((item) => {
            return (
              <span key={item.title}>
                <span>{item.title}</span>
                <span className="divide">|</span>
              </span>
            );
          })}
        </p>
        <p className="text-grah">
          <a href="https://jubao.163.com/">廉正举报</a>
          <span>不良信息举报邮箱: 51jubao@service.netease.com</span>
          <span>客服热线：95163298</span>
        </p>
        <p className="text-grah margin-2">
          <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
          <span>增值电信业务经营许可证：浙B2-20150198</span>
          <a href="https://beian.miit.gov.cn/#/Integrated/index">
            粤B2-20090191-18 工业和信息化部备案管理系统网站
          </a>
        </p>
        <p className="text-grah margin-3">
          <span>网易公司版权所有©1997-2023</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a href="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/28066758115/1fc7/27fc/c5c1/158cb31a7117730c58652e2c6625e4c8.jpg">
            浙网文[2021] 1186-054号
          </a>
          <a href="https://beian.mps.gov.cn/#/query/webSearch">
            <span className="police-logo"></span>
            浙公网安备 33010902002564号
          </a>
        </p>
      </div>
    </AppFooterWrapper>
  );
});
