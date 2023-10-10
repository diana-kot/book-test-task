export interface IBook  {
    id: string;
    title: string;
    description?: string;
    photoURL: string;
    categories: string[];
    authors: string[];
};
export interface BookSliceState {
    item: IBook
    status: null | string;
    error: String | null,

}
