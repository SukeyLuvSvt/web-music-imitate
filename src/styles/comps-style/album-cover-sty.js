import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
  .album-image {
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.size};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${(props) => props.size};
      height: ${(props) => props.size};
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-position: 0 ${(props) => props.bgp};
    }

    .play-icon {
      position: absolute;
      bottom: 3px;
      right: 22px;
      display: inline-block;
      width: 17px;
      height: 17px;
      background-position: 0 0;
    }
  }
  .album-info {
    width: ${(props) => props.size};
    font-size: 12px;

    div {
      white-space: nowrap;
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 18px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
    .name {
      color: #000;
      margin-top: 5px;
    }

    .artist {
      color: #666;
    }
  }
`;
