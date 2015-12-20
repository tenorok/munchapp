import { Observable, EventData as ObservableEventData } from 'data/observable';
import * as view from 'ui/core/view';
import { ListPicker } from 'ui/list-picker';
import { Button } from 'ui/button';

import { CNClassList } from 'cnclasslist';
import { CLView } from '../../views/CLViewInterface';

export class Picker extends Observable {
    private _listPicker: ListPicker;
    private _picker: CLView;
    private _complete: Button;

    constructor(pickerView: view.View, items: Array<string|number>, selectedIndex: number = 0) {
        super();

        this._picker = view.getViewById(pickerView, 'picker');
        this._picker.classList = new CNClassList(this._picker);

        this._complete = <Button>view.getViewById(pickerView, 'complete');
        this._complete.on(Button.tapEvent, () => {

            this.notify({
                eventName: 'complete',
                object: this
            });

            this
                .setSelectedIndex()
                .hide();
        });

        this._listPicker = <ListPicker>view.getViewById(pickerView, 'list-picker');
        this._listPicker.items = items;
        this._listPicker.selectedIndex = selectedIndex;

        this.hide();
    }

    /**
     * XML-setter
     */
    set items(value: Array<string>) {
        this._listPicker.items = value;
    }

    set index(value: number) {
        this._listPicker.selectedIndex = value;
    }

    get index(): number {
        return this._listPicker.selectedIndex;
    }

    get value(): string {
        return this._listPicker.items[this._listPicker.selectedIndex];
    }

    setSelectedIndex(): Picker {
        this.index = this._listPicker.selectedIndex;
        return this;
    }

    isShown(): boolean {
        return this._picker.classList.contains('picker_visible');
    }

    show(): Picker {
        this._picker.classList.add('picker_visible');
        this.notify({
            eventName: 'show',
            object: this
        });
        return this;
    }

    hide(): Picker {
        this._picker.classList.remove('picker_visible');
        this.notify({
            eventName: 'hide',
            object: this
        });
        return this;
    }
}
