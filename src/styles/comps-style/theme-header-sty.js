import styled from "styled-components";

export const ThemeHeaderWrapper = styled.div`
  height: 33px;
  line-height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 0 34px;
  background-position: -225px -155px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    a {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
      font-weight: normal;

      &:hover {
        text-decoration: none;
      }
    }
  }
  .keyword-list {
    display: flex;
    align-items: center;
    line-height: 24px;

    .item {
      font-size: 12px;
      color: #666;

      span:nth-of-type(1) {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      .divider {
        margin: 0 15px;
        color: #ccc;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666;

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;
