/// <reference path="../../dependencies.d.ts" />

import { Observable, EventData } from 'data/observable';
import * as pages from 'ui/page';
import * as dialogs from 'ui/dialogs';
import ListViewModel from '../../shared/view-models/list-view-model';

let listModel = new ListViewModel();

let pageData = new Observable({
    playerList: listModel.getPlayers(),
    onCreate() {
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
});

export function main(args: EventData) {
    let page = <pages.Page>args.object;
    page.bindingContext = pageData;
}
