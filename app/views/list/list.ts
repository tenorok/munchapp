import { Observable, EventData as ObservableEventData } from 'data/observable';
import * as pages from 'ui/page';
import * as dialogs from 'ui/dialogs';
import * as view from 'ui/core/view';
import { Label } from 'ui/label';

import * as _ from 'lodash';

import ListViewModel from '../../view-models/list';
import { Picker } from '../../xml-declaration/picker/Picker';

let listModel = new ListViewModel([
    { name: 'Tenorok', level: 9, attack: 7 },
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
        page.getViewById('attack-picker'),
        _.times<number>(50, function(i) { return i + 1; })
    );

    levelPicker = new Picker(
        page.getViewById('level-picker'),
        _.times<number>(10, function(i) { return i + 1; })
    );

    attackPicker.on('show', (data) => {
        levelPicker.hide();
    });

    levelPicker.on('show', (data) => {
        attackPicker.hide();
    });
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

export function chooseAttack(args) {
    let view: Label = args.view;
    attackPicker.index = Number(view.text) - 1;
    attackPicker.show();
    attackPicker.on('complete', () => {
        view.text = attackPicker.value;
    });
}

export function chooseLevel(args) {
    let view: Label = args.view;
    levelPicker.index = Number(view.text) - 1;
    levelPicker.show();
    levelPicker.on('complete', () => {
        view.text = levelPicker.value;
    });
}
