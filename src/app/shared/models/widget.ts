export class Widget {
    widget_id : string;
    title     : string;
    section   : string;
    order     : number;
    class     : WidgetClass;
}

export class WidgetClass {
    class_header : string;
    class_body   : string;
    class_color  : string;
}