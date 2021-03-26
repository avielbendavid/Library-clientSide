import { BookCategory } from "../enums/book-category.enum";

export class Book {
    constructor(
        public id?: number,
        public name?: string,
        public category?: BookCategory,
        public pages?: number,
        public price?: number,
        public quantity?: number
    ) { }
}
