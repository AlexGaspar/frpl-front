import constants from '../../../../constants/constants';
import memoize from 'memoizee';

import type { FaceitProfile, FaceitHub, MatchType } from './faceit.type';
import { HubOptions } from './faceit.type';
import axios from 'axios';
import { Timestamp } from '../../member.type';

const Faceit = require('faceit-js');

const GAME = 'csgo';

const api = new Faceit(constants.APP_TOKEN);

const FACEIT_API = "https://open.faceit.com/data/v4";

const genProfileInfo = memoize(genProfileInfoImpl, { promise: true, max: 200, maxAge: 60000 });

async function genProfileInfoImpl(userId: string): Promise<FaceitProfile> {
  return await api.players(userId);
}

export async function genEloCSGO(userId: string): Promise<number> {
  const userData = await genProfileInfo(userId);
  return userData.games.csgo.faceit_elo;
}

export async function genSteamID64(userId: string): Promise<string> {
  const userData = await genProfileInfo(userId);
  return userData.steam_id_64;
}

export async function genFaceitNickname(userID: string): Promise<string> {
  const userData = await genProfileInfo(userID);
  return userData.nickname;
}

export async function genLastMatch(userId: string): Promise<Timestamp> {
  const matchHistory = await api.players(userId, 'history', GAME);
  const lastMatch = matchHistory.items[0];

  return lastMatch.finished_at;
}

export async function genFetchMatches(type: MatchType) {
  return await genHub(HubOptions.MATCHES, { type });
}

export async function genMatchesCount(memberId: string): Promise<number> {
  try {
    const res = await axios({
      method: 'GET',
      url: constants.PUBLIC_API_STATS + memberId + '/games/csgo',
      headers: {
        authorization: `Bearer ${constants.AUTH_TOKEN}`,
        content_type: 'application/json',
      },
    });

    return res.data.lifetime.m1;
  } catch (e) {
    console.error(e);
    return -1; // TODO: might be better to throw here instead of swallowing the exception
  }
}

export async function genRemoveFromHub(userId: string): Promise<boolean> {
  try {
    await axios({
      method: 'delete',
      url: constants.PUBLIC_API_HUB + constants.HUB_ID + '/membership/' + userId,
      headers: {
        authorization: `Bearer ${constants.AUTH_TOKEN}`,
        content_type: 'application/json',
      },
    });
    return true; // TODO: check the response?
  } catch (e) {
    return false;
  }
}

export async function genHubInfo(): Promise<FaceitHub> {
  return await api.hubs(constants.HUB_ID);
}

export async function genHubMembers(offset: number, limit: number): Promise<any> {
  return await api.hubs(constants.HUB_ID, 'members', offset, limit);
}

export async function genWaittingMembers(offset: number, limit: number): Promise<any> {
  return await axios.get(
    constants.PUBLIC_API_HUB + constants.HUB_ID + '/application?limit=' + limit + '&offset=' + offset + '&sort=asc',
    {
      headers: {
        authorization: `Bearer ${constants.AUTH_TOKEN}`,
        content_type: "application/json",
      }
    },
  );
}

export async function genApproveMember(memberId: string): Promise<boolean> {
  try {
    await axios({
      method: 'post',
      url: constants.PUBLIC_API_HUB + constants.HUB_ID + '/application/' + memberId + '/accept',
      headers: {
        authorization: `Bearer ${constants.AUTH_TOKEN}`,
        content_type: 'application/json',
      },
      data: {
        hubGuid: constants.HUB_ID,
        userGuid: memberId,
      },
    });
    return true;
  } catch (e) {
    return false;
  }
}

const fetchOptions = {
  method: 'GET',
  headers: {
    authorization: `Bearer ${constants.APP_TOKEN}`,
  },
};

async function gen(uri: string) {
  const reponse = await fetch(`${FACEIT_API}/${uri}`, fetchOptions);
  return await reponse.json();
}

async function genHub(option: HubOptions, queryOptions: any) {
  const queryString = Object
    .keys(queryOptions)
    .map((key: string) => key + '=' + queryOptions[key])
    .join('&');

  const data = await gen(`hubs/${constants.HUB_ID}/${option}?${queryString}`);
  return data.items;
}

export default api;