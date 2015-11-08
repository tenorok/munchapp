/// <reference path="../../dependencies.d.ts" />

import observable = require('data/observable');
import dialogs = require('ui/dialogs');

type Player = {
    name: string;
    level: number;
    attack: number;
};

export class HelloWorldModel extends observable.Observable {
    private players: Array<Player>;

    constructor() {
        super();

        this.players = [];
        //this.set("message", this.counter + " taps left");
    }

    onCreate() {
        dialogs.prompt({
            title: 'Имя игрока',
            okButtonText: 'Добавить',
            cancelButtonText: 'Отменить',
            inputType: dialogs.inputType.text
        }).then((data: dialogs.PromptResult) => {
            if(!data.result) return;

            this.players.push({
                name: data.text,
                level: 1,
                attack: 0
            });
        });
    }
}
export var mainViewModel = new HelloWorldModel();
