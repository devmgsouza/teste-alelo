import { List } from './../lists/list.model';

export class Item {
    id: string;
    listId: List = new List();
    name: string;
    done: boolean;
}
