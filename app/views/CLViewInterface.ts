import * as view from 'ui/core/view';
import { CNClassList } from 'cnclasslist';

export interface CLView extends view.View {
    classList?: CNClassList;
}
