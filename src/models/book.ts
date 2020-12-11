export default class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

export enum BookStatus {
  NotReading,
  Reading
}
