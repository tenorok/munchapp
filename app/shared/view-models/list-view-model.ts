/// <reference path="../../dependencies.d.ts" />

import { ObservableArray } from 'data/observable-array';

type Player = {
    name: string;
    level: number;
    attack: number;
};

export default class ListViewModel {
    private players: ObservableArray<Player>;

    constructor(players: Array<Player> = []) {
        this.players = new ObservableArray<Player>(players);
    }

    getPlayers(): ObservableArray<Player> {
        return this.players;
    }

    addPlayer(player: Player): ListViewModel {
        this.players.push(player);
        return this;
    }
}
