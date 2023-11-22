import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  width: 100%;

  .menu {
    height: 35px;
    background-color: #c20c0c;
  }
  .top {
    display: flex;
    padding-left: 246px;
    height: 35px;
    line-height: 35px;
    height: 35px;

    .item {
      height: 20px;
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        color: #fff;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`;