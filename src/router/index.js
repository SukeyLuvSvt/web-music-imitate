import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import Discover from "../pages/discover/index.js";

const DiscoverRecommend = lazy(() =>
  import("@/pages/discover/c-pages/recommend/index.js")
);
const DiscoverRanking = lazy(() =>
  import("@/pages/discover/c-pages/ranking/index.js")
);
const DiscoverSongList = lazy(() =>
  import("@/pages/discover/c-pages/song-list.js")
);
const DiscoverDjradio = lazy(() =>
  import("@/pages/discover/c-pages/djradio.js")
);
const DiscoverArtist = lazy(() => import("@/pages/discover/c-pages/artist.js"));
const DiscoverAlbum = lazy(() => import("@/pages/discover/c-pages/album.js"));
const SuspenseComp = (cmp) => (
  <Suspense fallback={<div>...loading...</div>}>{cmp}</Suspense>
);
export default function SetRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      exact: true,
      element: <Discover></Discover>,
      // action: () => {
      //   return redirect("/discover");
      // },
    },
    {
      path: "discover",
      exact: true,
      element: <Discover></Discover>,
      children: [
        {
          path: "recommend",
          element: SuspenseComp(<DiscoverRecommend />),
        },
        {
          path: "ranking",
          element: SuspenseComp(<DiscoverRanking />),
        },
        {
          path: "songs",
          element: SuspenseComp(<DiscoverSongList />),
        },
        {
          path: "djradio",
          element: SuspenseComp(<DiscoverDjradio />),
        },
        {
          path: "artist",
          element: SuspenseComp(<DiscoverArtist />),
        },
        {
          path: "album",
          element: SuspenseComp(<DiscoverAlbum />),
        },
      ],
    },
  ]);
  return routes;
}
