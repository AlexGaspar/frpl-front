import axio from 'axios';

import constants from '../../../../constants/constants';
import type { SteamOwnedGames, SteamID64 } from './steam.type';

const STEAM_API_URI = 'https://api.steampowered.com';
const CSGO_APPID = 730;

function getSteamOwnedURL(steamID64: SteamID64): string {
  return `${STEAM_API_URI}/IPlayerService/GetOwnedGames/v0001/?key=${constants.STEAM_API_KEY}&steamid=${steamID64}`;
}

export async function genSteamCSGOHours(steamID64: SteamID64): Promise<number | null> {
  const response = await axio(getSteamOwnedURL(steamID64));

  const res: SteamOwnedGames = response.data.response;

  // Profile might be private
  if (res.games == null) {
    return null;
  }

  const csgo = res.games.find(game => game.appid === CSGO_APPID);

  if (csgo == null) {
    return null;
  }

  return Math.floor(csgo.playtime_forever / 60);
}

