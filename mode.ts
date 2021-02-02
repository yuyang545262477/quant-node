declare module namespace {

    export interface Attribute {
        key: string;
        value: string;
    }

    export interface Attribute2 {
        key: string;
        value: string;
    }

    export interface Child4 {
        type: string;
        content: string;
    }

    export interface Child3 {
        type: string;
        tagName: string;
        attributes: Attribute2[];
        children: Child4[];
    }

    export interface Child2 {
        type: string;
        tagName: string;
        attributes: any[];
        children: Child3[];
    }

    export interface Child {
        type: string;
        tagName: string;
        attributes: any[];
        children: Child2[];
    }

    export interface RootObject {
        type: string;
        content: string;
        tagName: string;
        attributes: Attribute[];
        children: Child[];
    }

}

