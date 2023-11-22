import { createSlice } from "@reduxjs/toolkit";

const rankingReducer = createSlice({
  name: "ranking",
  initialState: {
    topUpList: {}, // 飙升榜
    topNewList: {}, // 新歌榜
    topOriginList: {}, // 原创榜
    topHotList: {}, // 热歌榜
  },
  reducers: {
    setTopUpList: (state, action) => {
      state.topUpList = action.payload;
    },
    setTopNewList: (state, action) => {
      state.topNewList = action.payload;
    },
    setTopOriginList: (state, action) => {
      state.topOriginList = action.payload;
    },
    setTopHotList: (state, action) => {
      state.topHotList = action.payload;
    },
  },
});
export default rankingReducer.reducer;
export const { setTopUpList, setTopNewList, setTopOriginList, setTopHotList } =
  rankingReducer.actions;
