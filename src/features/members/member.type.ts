export interface Members {
  list: any[];
}

export type Timestamp = number;

export interface Member {
  user_id: string;
  roles?: string[];
  nickname?: string;
}

export interface MemberWithCriteria {
  userId: string,
  roles?: string[],
  nickname: string,
  elo: number;
  matchCount: number;
  csgoHour: number | null;
  lastTimePlayed: Timestamp;
}

export interface MemberFromApproval {
  user: ApprovalUser;
}

interface ApprovalUser {
  guid: string;
}