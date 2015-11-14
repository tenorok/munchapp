import { EventData } from 'data/observable';
import * as pages from 'ui/page';
import * as dialogs from 'ui/dialogs';
import ListViewModel from '../../view-models/list';

let listModel = new ListViewModel([
    { name: 'Tenorok', level: 38, attack: 7 },
    { name: 'Aeronka', level: 2, attack: 23 }
]);

export function main(args: EventData) {
    let page = <pages.Page>args.object;
    page.bindingContext = listModel;
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
