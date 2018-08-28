export class Book {
    constructor(public title: string, public authors: string[], public coverImage: string) {
        this.previewMode = true;
    }
    previewMode: true
    getAuthorsList() : string {
        return this.authors.join(", ");
    }
}