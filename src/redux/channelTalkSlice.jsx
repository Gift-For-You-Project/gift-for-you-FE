import { createSlice } from "@reduxjs/toolkit";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";

const channelTalkSlice = createSlice({
  name: "channelTalk",
  initialState: {},
  reducers: {
    bootChannelTalk: async () => {
      const { REACT_APP_CHANNEL_PLUGIN_KEY } = process.env;

      // 스크립트 로드 후 익명으로 부트
      await ChannelService.loadScript();
      ChannelService.boot({
        pluginKey: REACT_APP_CHANNEL_PLUGIN_KEY,
      });
    },
    // ... 다른 액션 및 리듀서들
  },
});

export const { bootChannelTalk } = channelTalkSlice.actions;
export default channelTalkSlice.reducer;
