export enum MatchType {
  ALL = 'all',
  ONGOING = 'ongoing',
  UPCOMING = 'upcoming',
  PAST = 'past',
}

export enum HubOptions {
  MATCHES = 'matches',
}

export interface FaceitProfile {
  avatar: string,
  country: string,
  cover_featured_image: string,
  cover_image: string,
  faceit_url: string,
  friends_ids: string[],
  games: {
    csgo: {
      faceit_elo: number,
      game_player_id: string,
      game_player_name: string,
      game_profile_id: string,
      region: string,
      regions: any,
      skill_level: number,
      skill_level_label: string;
    },
  },
  infractions: any,
  membership_type: string,
  memberships: string[],
  new_steam_id: string,
  nickname: string,
  platforms: {
    additionalProp1: string,
    additionalProp2: string,
    additionalProp3: string;
  },
  player_id: string,
  settings: {
    language: string;
  },
  steam_id_64: string,
  steam_nickname: string;
}

export interface MemberFromHub {
  user_id: string;
  role: string[];
}

export interface FaceitHub {
  avatar: string,
  background_image: string,
  chat_room_id: string,
  cover_image: string,
  description: string,
  faceit_url: string,
  game_data: {
    assets: {
      cover: string,
      featured_img_l: string,
      featured_img_m: string,
      featured_img_s: string,
      flag_img_icon: string,
      flag_img_l: string,
      flag_img_m: string,
      flag_img_s: string,
      landing_page: string;
    },
    game_id: string,
    long_label: string,
    order: number,
    parent_game_id: string,
    platforms: string[],
    regions: string[],
    short_label: string;
  },
  game_id: string,
  hub_id: string,
  join_permission: string,
  max_skill_level: number,
  min_skill_level: number,
  name: string,
  organizer_data: {
    avatar: string,
    cover: string,
    description: string,
    facebook: string,
    faceit_url: string,
    followers_count: number,
    name: string,
    organizer_id: string,
    twitch: string,
    twitter: string,
    type: string,
    vk: string,
    website: string,
    youtube: string;
  },
  organizer_id: string,
  players_joined: number,
  region: string,
  rule_id: string;
}