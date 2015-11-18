import * as view from 'ui/core/view';
import { StackLayout } from 'ui/layouts/stack-layout';
import { ListPicker } from 'ui/list-picker';

export class Picker extends StackLayout {
    private _picker: ListPicker;

    constructor(pickerView: Picker, items: Array<string>, selectedIndex: number = 0) {
        super();

        this._picker = <ListPicker>view.getViewById(pickerView, 'picker');
        this._picker.items = items;
        this._picker.selectedIndex = selectedIndex;

        this.hide();
    }

    /**
     * XML-setter
     */
    set items(value: Array<string>) {
        this._picker.items = value;
    }

    set index(value) {
        this._picker.selectedIndex = value;
    }

    get index(): number {
        return this._picker.selectedIndex;
    }

    get value(): string {
        return this._picker.items[this._picker.selectedIndex];
    }

    isShown(): boolean {
        return this._picker.visibility === 'visible';
    }

    show(): Picker {
        this._picker.visibility = 'visible';
        return this;
    }

    hide(): Picker {
        this._picker.visibility = 'collapse';
        return this;
    }
}
