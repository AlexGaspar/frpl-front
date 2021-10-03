interface SteamOwnedGame {
  appid: number,
  playtime_mac_forever: number,
  playtime_windows_forever: number,
  playtime_linux_forever: number,
  playtime_forever: number,
}

export type SteamID64 = string;

export interface SteamOwnedGames {
  game_count: number,
  games: SteamOwnedGame[],
}
