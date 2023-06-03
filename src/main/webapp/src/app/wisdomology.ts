/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2023-06-03 12:08:01.

export interface Author {
    id: string;
    firstName: string | null;
    lastName: string;
}

export interface Category {
    id: string;
    quoteId: string;
    category: string;
}

export interface Quote {
    id: string;
    quote: string;
    sourceText: SourceText | null;
    quoteComment: QuoteComment[];
    categories: Category[];
}

export interface QuoteComment {
    id: string;
    quoteId: string;
    comment: string;
}

export interface SourceLink {
    id: string;
    sourceTextId: string;
    url: string;
}

export interface SourceText {
    id: string;
    author: Author | null;
    title: string;
    translation: Translation | null;
    sourceLinks: SourceLink[];
}

export interface Translation {
    id: string;
    firstName: string | null;
    lastName: string;
}
