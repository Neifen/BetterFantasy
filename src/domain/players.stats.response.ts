import {PlayerStats} from './player.stats';
export interface PlayersStatsResponse {
    statType: String;
    season: String;
    week: String;
    players: PlayerStats[];
}
