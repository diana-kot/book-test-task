export interface IBook {
    id: string;
    title: string;
    description?: string;
    photoURL: string;
    categories: string[];
    authors: string[];
    imageLinks?: { smallThumbnail: string; thumbnail: string };
}

export type SearchBooksParams = {
    sortBy: string;
    orderBy: string;
    search: string;
    startIndex: number;
    maxResults: number;
    currentPage: number;
};
export interface BooksSliceState {
    items: Array<IBook>;
    status: null | string;
    totalItems: number;
    error: any;
}
