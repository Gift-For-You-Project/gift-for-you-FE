import { createSlice } from "@reduxjs/toolkit";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";

// 비동기 작업을 처리하기 위해 thunk를 사용하는 액션 생성자
export const bootChannelTalk = () => async (dispatch) => {
  const { REACT_APP_CHANNEL_PLUGIN_KEY } = process.env;

  // 스크립트 로드 후 익명으로 부트
  ChannelService.loadScript();
  ChannelService.boot({
    pluginKey: REACT_APP_CHANNEL_PLUGIN_KEY,
  });

  // 비동기 작업이 완료되면 동기적인 액션을 디스패치
  dispatch(channelTalkSlice.actions.bootChannelTalkSuccess());
};

const channelTalkSlice = createSlice({
  name: "channelTalk",
  initialState: {},
  reducers: {
    bootChannelTalkSuccess: (state, action) => {},
  },
});

export const { bootChannelTalkSuccess } = channelTalkSlice.actions;
export default channelTalkSlice.reducer;
