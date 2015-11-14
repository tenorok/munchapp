import { ObservableArray } from 'data/observable-array';

type Player = {
    name: string;
    level: number;
    attack: number;
};

export default class ListViewModel {
    private _players: ObservableArray<Player>;

    constructor(players: Array<Player> = []) {
        this._players = new ObservableArray<Player>(players);
    }

    get players(): ObservableArray<Player> {
        return this._players;
    }

    addPlayer(player: Player): ListViewModel {
        this._players.push(player);
        return this;
    }
}
