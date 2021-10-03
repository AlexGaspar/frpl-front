import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { Members } from './member.type';

const initialState: Members = {
  list: [
    { "userId": "f9a2d2ba-0ff0-4bb1-85ae-4847ecb4bbf0", "matchCount": "30", "lastTimePlayed": 1570790396, "elo": 1297, "csgoHour": null, "nickname": "neLendirekt" },
    { "userId": "0a537b18-43b3-4015-9d05-6a26e54eca89", "matchCount": "1346", "lastTimePlayed": 1594748757, "elo": 2997, "csgoHour": 6970, "nickname": "mKZZZZZ" },
    { "userId": "ef8e00e2-8663-40dc-b41a-bc21df93f713", "matchCount": "820", "lastTimePlayed": 1623974452, "elo": 1710, "csgoHour": 6055, "nickname": "SundowN-" },
    { "userId": "04b4ff8c-2a26-4054-8311-60d72007441a", "matchCount": "1012", "lastTimePlayed": 1525396372, "elo": 1784, "csgoHour": 4265, "nickname": "LPK777" },
    { "userId": "54d999ce-1790-48c8-8a6a-99cb7cfaf69d", "matchCount": "2178", "lastTimePlayed": 1610575449, "elo": 1756, "csgoHour": null, "nickname": "Krixmas" },
    { "userId": "809eea44-9829-4681-964e-c6481b257f19", "matchCount": "856", "lastTimePlayed": 1586358370, "elo": 1869, "csgoHour": null, "nickname": "Hitman62" },
    { "userId": "4536752b-ae66-4b04-9c13-85a7e7e2beab", "matchCount": "549", "lastTimePlayed": 1592003330, "elo": 2021, "csgoHour": null, "nickname": "_kAis" },
    { "userId": "ff5dcfac-1e48-49d9-b4bd-fa243a1ed832", "matchCount": "859", "lastTimePlayed": 1588266755, "elo": 1912, "csgoHour": null, "nickname": "rockst4r_" }
  ]
};

export const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    addMember: (state, action: PayloadAction<number>) => {
      state.list.push(action.payload);
    },
    removeMember: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(user => user.userId === action);
    },
  }
});

export const selectMembers = (state: RootState): any => state.members.list;

export default memberSlice.reducer;