import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  box-sizing: border-box;
  height: 325px;
  padding-top: 33px;
  background-color: #f2f2f2;
  border-top: 1px solid #d3d3d3;

  .friendly-links {
    display: flex;
    justify-content: center;
    align-items: center;

    .item {
      width: 45px;
      text-align: center;
      color: #666;
      margin-right: 80px;

      span {
        display: inline-block;
        margin-top: 10px;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        color: rgba(0, 0, 0, 0.5);
        margin-left: -27.5px;
        width: 100px;
      }
    }
    .item:nth-last-of-type(1) {
      margin-right: 0;
    }
  }

  .text-content {
    margin-top: 60px;

    p {
      height: 24px;
    }
  }
  .service-links {
    display: flex;
    justify-content: center;

    span {
      display: inline-block;
      color: #666;
      font-size: 12px;
      line-height: 24px;

      span:nth-of-type(1) {
        cursor: pointer;
      }
      .divide {
        color: #d9d9d9;
        margin: 0 10px;
      }

      &:hover {
        text-decoration: underline;
      }
      &:nth-last-of-type(1) {
        .divide {
          display: none;
        }
      }
    }
  }
  .text-grah {
    display: flex;
    justify-content: center;
    color: #666;

    a,
    span {
      display: inline-block;
      margin-right: 12px;
      line-height: 24px;
      font-size: 12px;
    }
    span:nth-of-last-type(1) {
      margin-right: 0;
    }
  }
  .margin-2 {
    a {
      margin: 0;
    }
    span {
      margin-right: 2px;
    }
  }
  .margin-3 {
    span {
      margin: 0;
    }
    span:nth-of-type(1) {
      margin-right: 12px;
    }
    .police-logo {
      width: 14px;
      height: 14px;
      background: url(${require("@/assets/police.png")}) no-repeat;
      background-size: cover;
      display: inline-block;
      margin-right: 2px !important;
      vertical-align: -2px;
    }
  }
`;

export const ASpecial = styled.a`
  display: block;
  width: 45px;
  height: 45px;
  background-image: url(${(props) => props.imgUrl});
  background-size: 45px;
  &:hover {
    background-image: url(${(props) => props.imgUrlHover});
  }
`;

export const ALink = styled.a`
  display: block;
  width: 45px;
  height: 45px;
  background-image: url(${require("@/assets/sprite_footer_03.png")});
  background-size: 220px 220px;
  background-position: ${(props) => props.bgpX} ${(props) => props.bgpY};

  &:hover {
    background-position: ${(props) => props.bgpHoverX}
      ${(props) => props.bgpHoverY};
  }
`;
