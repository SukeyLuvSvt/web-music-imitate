import styled from "styled-components";

export const RecommendWrapper = styled.div`
  color: #000;
  font-size: 16px;

  .wrap-v2 {
    width: 980px;
    margin: 0 auto;
  }
`;

export const BannerWrapper = styled.div`
  height: 270px;
  background: url(${(props) => props.$bgImage}) center center/6000px;

  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`;

export const BannerMain = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`;

export const BannerDownload = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank",
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/download.png")});
`;

export const BannerControl = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;

  .btn {
    position: absolute;
    transform: translateY(-50%);

    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .rgt {
    right: -68px;
    background-position: 0 -508px;
  }
`;

export const Content = styled.div`
  background-color: #fff;
  display: flex;
`;

export const RecommendLeft = styled.div`
  width: 735px;
  border: 1px solid #d3d3d3;
  border-bottom: none;
`;
export const RecommendRgt = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  border-bottom: none;
  border-left: 1px;
`;

export const HotCommendWrapper = styled.div`
  padding: 20px;
  padding-bottom: 0px;

  .hot-rcmd-songs-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const NewAlbumWrapper = styled.div`
  padding: 10px 20px 0px;

  .new-album-content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow {
      width: 23px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
    }
    .arrow-right {
      background-position: -300px -75px;
    }
    .album-main {
      width: 640px;
      height: 150px;

      .album-page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;

export const RankListWrapper = styled.div`
  padding: 20px;
  padding-bottom: 0px;

  .rank-list-content {
    margin: 30px 0 40px;
    display: flex;
    background-image: url(${require("@/assets/recommend-top-bg.png")});
    height: 472px;
  }
`;

export const UserLoginWrapper = styled.div`
  height: 126px;
  background-position: 0 0;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  p {
    line-height: 22px;
    font-size: 12px;
    color: #666;
  }

  a {
    margin-top: 15px;
    display: inline-block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;
    font-size: 12px;

    :hover {
      background-position: -110px -195px;
    }
  }
`;

export const SettledSingerWrapper = styled.div`
  padding: 15px 20px;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 23px;
    border-bottom: 1px solid #ccc;

    span {
      color: #333;
      font-size: 12px;
      font-weight: 700;
    }
    a {
      color: #666;
      font-size: 12px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .item {
    display: flex;
    height: 62px;
    margin-top: 14px;
    background-color: #fafafa;
    border: 1px solid #e9e9e9;
    cursor: pointer;

    &:hover {
      background-color: #f4f4f4;
    }

    img {
      width: 62px;
    }
    .rgt {
      display: flex;
      flex-direction: column;
      margin: 12px 0 0 10px;

      span {
        display: inline-block;
      }
      .name {
        color: #333;
        font-size: 14px;
        font-weight: 700;
      }
      .info {
        margin-top: 12px;
        font-size: 12px;
        color: #666;
      }
    }
  }

  .btn {
    margin-top: 12px;
    color: #333;
    font-weight: 700;
    text-align: center;
    height: 31px;
    line-height: 33px;
    border-radius: 4px;
    background-color: #fafafa;
    border: 1px solid #c3c3c3;
    font-size: 12px;
    background-position: right -100px;
    cursor: pointer;

    &:hover {
      background-color: #fdfdfd;
    }
  }
`;

export const HotAnchorWrapper = styled.div`
  padding: 15px 20px;
  .title {
    height: 23px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 12px;
    font-weight: 700;
  }
  .content {
    margin-top: 20px;

    .item {
      display: flex;
      height: 50px;

      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        cursor: pointer;
      }

      .rgt {
        font-size: 12px;
        line-height: 21px;
        color: #000;

        .nickname {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .info {
          color: #666;
        }
      }
    }
  }
`;
