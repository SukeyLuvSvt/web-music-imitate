import React, { memo, useState, useCallback } from "react";
import PropTypes from "prop-types";

import { getSizeImage } from "@/utils/format";
import { AlbumCoverWrapper } from "@/styles/comps-style/album-cover-sty";

export default memo(function AlbumCover(props) {
  const [showPlay, setShowPlay] = useState(false);
  const { info, size = "100px", width = "118px", bgp = "-570px" } = props;

  const playMove = useCallback(() => {
    setShowPlay(true);
  }, [showPlay]);

  const changePlay = useCallback(
    (type) => {
      setShowPlay(type);
    },
    [showPlay]
  );

  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl)} alt="" />
        <a
          href=""
          className="cover sprite_cover"
          onMouseOver={(e) => changePlay(true)}
          onMouseLeave={(e) => changePlay(false)}
        ></a>
        {showPlay ? (
          <a
            href=""
            className="sprite_icon play-icon"
            onMouseOver={(e) => playMove()}
          ></a>
        ) : (
          ""
        )}
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  );
});
