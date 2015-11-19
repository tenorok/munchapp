import { Observable, EventData as ObservableEventData } from 'data/observable';
import * as pages from 'ui/page';
import * as dialogs from 'ui/dialogs';
import * as view from 'ui/core/view';

import * as _ from 'lodash';

import ListViewModel from '../../view-models/list';
import { Picker } from '../../xml-declaration/picker/Picker';

let listModel = new ListViewModel([
    { name: 'Tenorok', level: 38, attack: 7 },
    { name: 'Aeronka', level: 2, attack: 23 }
]);

let bindingContext = new Observable({
    players: listModel.players
});

let attackPicker: Picker;
let levelPicker: Picker;

export function main(args: ObservableEventData) {
    let page = <pages.Page>args.object;
    page.bindingContext = bindingContext;

    attackPicker = new Picker(
        <Picker>page.getViewById('attack-picker'),
        _.times<number>(50, function(i) { return i + 1; })
    );

    levelPicker = new Picker(
        <Picker>page.getViewById('level-picker'),
        _.times<number>(10, function(i) { return i + 1; })
    );
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

export function chooseAttack() {
    attackPicker.show();
}

export function chooseLevel() {
    levelPicker.show();
}
