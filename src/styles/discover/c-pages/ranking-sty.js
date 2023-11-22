import styled from "styled-components";

export const RankingWrapper = styled.div`
  color: #000;

  .ranking-content {
    border: 1px solid #d3d3d3;
    border-top: none;
    border-bottom: none;
    display: flex;
  }
`;

export const RankingLeft = styled.div`
  width: 240px;
  padding-top: 12px;

  .featuredRank {
    margin-top: 28px;

    p {
      font-family: monospace;
      font-size: 14px;
      font-weight: 700;
      padding: 0 10px 15px 12px;
    }

    .item {
      display: flex;
      align-items: center;
      padding: 10px 0 10px 20px;

      &:hover {
        background-color: #f4f2f2;
      }
      &:active {
        background-color: #e6e6e6;
      }
      img {
        width: 40px;
        height: 40px;
      }
      .rgt {
        margin-left: 10px;

        span {
          display: block;
          font-size: 12px;
          color: #999;
        }
        span:nth-of-type(1) {
          color: #000;
          margin: 2px 0 8px;
        }
      }
    }
  }
`;
export const RankingRight = styled.div`
  width: 740px;
`;
