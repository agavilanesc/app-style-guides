export interface Menu {
    icon?     : string;
    title     : string;
    action?   : string;
    url?      : string;
    disabled  : boolean;
    children? : Menu[];
}
