export interface CardClass {
    class_type: string;
    class_color: string;
    class_animated: string;
}

export interface Card {
    code_left: string;
    code_right: string;
    header_title: string;
    header_subtitle: string;
    body_title: string;
    body_paragraph: string;
    chart_id: string;
    last_updated: string;
    class: CardClass;
}
