export class File {
    name: string;
    type: string;
    path: string;
    childs: Array<File>;
    parent: File;
    expanded: boolean = true;
    selected: boolean = false;
    editable: boolean = false;
    content: any;
}
