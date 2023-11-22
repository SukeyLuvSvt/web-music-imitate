import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
  height: 70px;
  background-color: #242424;
  font-size: 14px;

  .content {
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      a :last-of-type {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a,
      .active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  .search-inp {
    width: 158px;
    height: 32px;
    border-radius: 32px;

    input {
      outline: none;

      &:hover {
        outline: none;
      }
      &::placeholder {
        font-size: 12px;
        color: #9b9b9b;
      }
    }
  }

  .creator-center {
    width: 90px;
    height: 32px;
    color: #ccc;
    border: 1px solid #4f4f4f;
    border-radius: 20px;
    text-align: center;
    line-height: 32px;
    font-size: 12px;
    margin: 0 12px;
  }

  .login-btn {
    color: #787878;
  }
`;
