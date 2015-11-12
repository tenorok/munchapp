/// <reference path="../../dependencies.d.ts" />

import { EventData } from 'data/observable';
import * as pages from 'ui/page';
import * as dialogs from 'ui/dialogs';
import ListViewModel from '../../shared/view-models/list-view-model';

let listModel = new ListViewModel();

export function main(args: EventData) {
    let page = <pages.Page>args.object;
    page.bindingContext = {
        playerList: listModel.getPlayers()
    };
}

export function onCreate() {
    dialogs.prompt({
        title: 'Имя игрока',
        okButtonText: 'Добавить',
        cancelButtonText: 'Отменить',
        inputType: dialogs.inputType.text
    }).then((data: dialogs.PromptResult) => {
        if(!data.result) return;

        listModel.addPlayer({
            name: data.text,
            level: 1,
            attack: 0
        });
    });
}
