import styled from "styled-components";

export const ThemeCoverWrapper = styled.div`
  width: 140px;
  margin: 20px 0 30px;

  .cover-top {
    width: 140px;
    height: 140px;
    position: relative;

    img {
      /* position: absolute; */
      /* top: 0; */
      /* left: 0; */
      width: 140px;
      height: 140px;
      display: inline-block;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 140px;
      height: 140px;
      background-position: 0 0;
      cursor: pointer;

      &-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-position: 0 -537px;
        color: #ccc;
        width: 100%;
        height: 27px;
        line-height: 24px;
        box-sizing: border-box;
        cursor: text;

        span {
          font-size: 12px;
        }

        .erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
          cursor: pointer;
        }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 8px;
    width: 140px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
    text-overflow: ellipsis;
    overflow: hidden;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
