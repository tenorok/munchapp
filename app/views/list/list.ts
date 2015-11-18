import { Observable, EventData as ObservableEventData } from 'data/observable';
import * as pages from 'ui/page';
import * as dialogs from 'ui/dialogs';
import * as view from 'ui/core/view';
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

export function main(args: ObservableEventData) {
    let page = <pages.Page>args.object;
    page.bindingContext = bindingContext;
    attackPicker = new Picker(
        <Picker>page.getViewById('attack-picker'),
        Array.apply(null, Array(50)).map(function (e, i) { return i + 1; })
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

export function onAttack() {
    attackPicker.show();
}
