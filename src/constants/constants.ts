import secrets from './secrets';

interface constant {
  HUB_ID: string;
  PUBLIC_API_HUB: string;
  PUBLIC_API_STATS: string;

  APP_TOKEN: string;
  AUTH_TOKEN: string;

  STEAM_API_KEY: string;

  PAUSE_BETWEEN_RUN: number;
  PAUSE_BETWEEN_RUN_ACCETPER: number;
  PAUSE_BETWEEN_REQUEST: number;

  DEBUG: boolean;
  RUN_KICK: boolean;
  RUN_KICK_DRY_RUN: boolean;
  RUN_APPROVAL: boolean;
  RUN_APPROVAL_DRY_RUN: boolean;

  MIN_ELO: number;
  MIN_MATCHES: number;
  MIN_CSGO_HOURS: number;

  SHIELDED_ROLE: string[];

  worker: any;

  fake_applications: any;

}

const data: constant = Object.freeze({
  // HUB_ID: 'd7e41119-ab72-465b-ad93-00923c148baf',
  HUB_ID: '84a5026b-9aa5-47bd-b638-dbd15d2e41d8',
  PUBLIC_API_HUB: 'https://api.faceit.com/hubs/v1/hub/',
  PUBLIC_API_STATS: 'https://api.faceit.com/stats/v1/stats/users/',

  // Secrets
  ...secrets,

  // App Settings
  PAUSE_BETWEEN_RUN: 60 * 60 * 1000, // in ms (1 hour)
  PAUSE_BETWEEN_RUN_ACCETPER: 20 * 1000, // in ms (20 sec)
  PAUSE_BETWEEN_REQUEST: 5000, // in ms (5 sec)
  DEBUG: false,

  RUN_KICK: true, // should we run the kick function
  RUN_KICK_DRY_RUN: true,
  RUN_APPROVAL: false, // should we run the approval function
  RUN_APPROVAL_DRY_RUN: false,

  MIN_ELO: 1800,
  MIN_MATCHES: 300,
  MIN_CSGO_HOURS: 500,

  SHIELDED_ROLE: [
    'owner',
    'de5d1039-bfc7-4202-9963-87b00120749a', // Basic Shielded role
  ],

  // Worker Options
  worker: {
    maxWorkers: 5,
  },

  // Fake data
  fake_applications: [
    {
      user: {
        avatarUrl: 'https://assets.faceit-cdn.net/avatars/151104a0-b2da-4d56-b76f-51f1d482434e_1614023054024.jpg',
        nickname: 'testUser',
        guid: '151104a0-b2da-4d56-b76f-51f1d482434e',
        country: 'FR'
      },
      competition: {
        guid: 'd7e41119-ab72-465b-ad93-00923c148baf',
        game: 'csgo',
        name: 'Test - 2400 Elo',
        organizerGuid: '158ffdcb-9262-434c-bc7b-0dae494b61fd'
      },
      applicantInput: 'jhgrhzh iezapghipo huierpz h',
      status: 'pending',
      createdBy: { guid: '151104a0-b2da-4d56-b76f-51f1d482434e' },
      createdAt: '2021-05-18T19:10:16.992+00:00',
      applicantSkillLevel: 8
    },
    {
      user: {
        avatarUrl: 'https://assets.faceit-cdn.net/avatars/151104a0-b2da-4d56-b76f-51f1d482434e_1614023054024.jpg',
        nickname: 'testUser',
        guid: '151104a0-b2da-4d56-b76f-51f1d482434e',
        country: 'FR'
      },
      competition: {
        guid: 'd7e41119-ab72-465b-ad93-00923c148baf',
        game: 'csgo',
        name: 'Test - 2400 Elo',
        organizerGuid: '158ffdcb-9262-434c-bc7b-0dae494b61fd'
      },
      applicantInput: 'jhgrhzh iezapghipo huierpz h',
      status: 'pending',
      createdBy: { guid: '151104a0-b2da-4d56-b76f-51f1d482434e' },
      createdAt: '2021-05-18T19:10:16.992+00:00',
      applicantSkillLevel: 8
    },
    {
      user: {
        avatarUrl: 'https://assets.faceit-cdn.net/avatars/151104a0-b2da-4d56-b76f-51f1d482434e_1614023054024.jpg',
        nickname: 'testUser',
        guid: '151104a0-b2da-4d56-b76f-51f1d482434e',
        country: 'FR'
      },
      competition: {
        guid: 'd7e41119-ab72-465b-ad93-00923c148baf',
        game: 'csgo',
        name: 'Test - 2400 Elo',
        organizerGuid: '158ffdcb-9262-434c-bc7b-0dae494b61fd'
      },
      applicantInput: 'jhgrhzh iezapghipo huierpz h',
      status: 'pending',
      createdBy: { guid: '151104a0-b2da-4d56-b76f-51f1d482434e' },
      createdAt: '2021-05-18T19:10:16.992+00:00',
      applicantSkillLevel: 8
    },
    {
      user: {
        avatarUrl: 'https://assets.faceit-cdn.net/avatars/151104a0-b2da-4d56-b76f-51f1d482434e_1614023054024.jpg',
        nickname: 'testUser',
        guid: '151104a0-b2da-4d56-b76f-51f1d482434e',
        country: 'FR'
      },
      competition: {
        guid: 'd7e41119-ab72-465b-ad93-00923c148baf',
        game: 'csgo',
        name: 'Test - 2400 Elo',
        organizerGuid: '158ffdcb-9262-434c-bc7b-0dae494b61fd'
      },
      applicantInput: 'jhgrhzh iezapghipo huierpz h',
      status: 'pending',
      createdBy: { guid: '151104a0-b2da-4d56-b76f-51f1d482434e' },
      createdAt: '2021-05-18T19:10:16.992+00:00',
      applicantSkillLevel: 8
    },
    {
      user: {
        avatarUrl: 'https://assets.faceit-cdn.net/avatars/151104a0-b2da-4d56-b76f-51f1d482434e_1614023054024.jpg',
        nickname: 'testUser',
        guid: '151104a0-b2da-4d56-b76f-51f1d482434e',
        country: 'FR'
      },
      competition: {
        guid: 'd7e41119-ab72-465b-ad93-00923c148baf',
        game: 'csgo',
        name: 'Test - 2400 Elo',
        organizerGuid: '158ffdcb-9262-434c-bc7b-0dae494b61fd'
      },
      applicantInput: 'jhgrhzh iezapghipo huierpz h',
      status: 'pending',
      createdBy: { guid: '151104a0-b2da-4d56-b76f-51f1d482434e' },
      createdAt: '2021-05-18T19:10:16.992+00:00',
      applicantSkillLevel: 10
    },
    {
      user: {
        avatarUrl: 'https://assets.faceit-cdn.net/avatars/151104a0-b2da-4d56-b76f-51f1d482434e_1614023054024.jpg',
        nickname: 'testUser',
        guid: '151104a0-b2da-4d56-b76f-51f1d482434e',
        country: 'FR'
      },
      competition: {
        guid: 'd7e41119-ab72-465b-ad93-00923c148baf',
        game: 'csgo',
        name: 'Test - 2400 Elo',
        organizerGuid: '158ffdcb-9262-434c-bc7b-0dae494b61fd'
      },
      applicantInput: 'jhgrhzh iezapghipo huierpz h',
      status: 'pending',
      createdBy: { guid: '151104a0-b2da-4d56-b76f-51f1d482434e' },
      createdAt: '2021-05-18T19:10:16.992+00:00',
      applicantSkillLevel: 8
    },
    {
      user: {
        avatarUrl: 'https://assets.faceit-cdn.net/avatars/151104a0-b2da-4d56-b76f-51f1d482434e_1614023054024.jpg',
        nickname: 'testUser',
        guid: '151104a0-b2da-4d56-b76f-51f1d482434e',
        country: 'FR'
      },
      competition: {
        guid: 'd7e41119-ab72-465b-ad93-00923c148baf',
        game: 'csgo',
        name: 'Test - 2400 Elo',
        organizerGuid: '158ffdcb-9262-434c-bc7b-0dae494b61fd'
      },
      applicantInput: 'jhgrhzh iezapghipo huierpz h',
      status: 'pending',
      createdBy: { guid: '151104a0-b2da-4d56-b76f-51f1d482434e' },
      createdAt: '2021-05-18T19:10:16.992+00:00',
      applicantSkillLevel: 8
    }
  ],
});


export default data;