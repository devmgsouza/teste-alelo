import { Categorie } from './../categories/categorie.model';

export class List {
    id: string;
    itemId: Categorie = new Categorie();
    name: string;
}
