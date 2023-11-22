import styled from "styled-components";

export const LeaderboardWrapper = styled.div`
  flex: 1;

  .leaderboard-top {
    height: 100px;
    display: flex;
    margin: 20px 0 0 20px;

    .top-left {
      width: 80px;
      height: 80px;
      position: relative;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .top-right {
      margin: 5px 0 0 10px;

      a {
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }
      .btn {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0);
      }
      .play {
        background-position: -267px -205px;
      }
      .favor {
        background-position: -300px -205px;
      }
      .play:hover {
        background-position: -267px -235px;
      }
      .favor:hover {
        background-position: -300px -235px;
      }
    }
  }

  .leaderboard-content {
    .rank-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;

      &:nth-child(-n + 3) .item-order {
        color: #c10d0c;
      }
      .item-order {
        width: 35px;
        text-align: center;
        margin-left: 15px;
        font-size: 16px;
        color: #666;
      }
    }

    .item-info {
      color: #000;
      width: 170px;
      height: 17px;
      padding-right: 5px;
      line-height: 17px;
      display: flex;
      flex: 1;
      justify-content: space-between;

      > span {
        display: block;
        flex: 1;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      .operate {
        display: flex;
        align-items: center;
        width: 82px;
        display: none;

        .btn {
          width: 17px;
          height: 17px;
          display: none;

          margin-left: 8px;
          cursor: pointer;
        }
        .play {
          background-position: -267px -268px;
        }
        .play:hover {
          background-position: -267px -288px;
        }
        .addto {
          background-position: 0 -700px;
          transform: translateY(2px);
        }
        .addto:hover {
          background-position: -22px -700px;
        }
        .favor {
          background-position: -297px -268px;
        }
        .favor:hover {
          background-position: -297px -288px;
        }
      }
    }

    .rank-item:hover {
      .item-info {
        > span {
          text-decoration: underline;
        }
        .operate {
          display: flex;
        }
        .btn {
          display: block;
        }
      }
    }
  }

  .leaderboard-footer {
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 32px;
    justify-content: flex-end;

    a {
      color: #000;
      font-size: 12px;
    }
  }
`;
