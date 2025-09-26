//Assignment22:Use The Nullish Coalescing Operator (??)There are objects in the books 
// array that don't have the onlineContent property at all. Loop over the books array, 
// and log a string to the console in this format: "${title}" provides no data about its online content.

const books = [
    { title: "Book 1", author: "Author 1", onlineContent: true },
    { title: "Book 2", author: "Author 2", onlineContent: false },
    { title: "Book 3", author: "Author 3" },
    { title: "Book 4", author: "Author 4", onlineContent: true },
    { title: "Book 5", author: "Author 5" },
];

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const onlineContent = book.onlineContent ?? "no data about its online content";
    console.log(`"${book.title}" provides ${onlineContent}`);
}



 for (const book of books) {
     const onlineContent = book.onlineContent ?? "no data about its online content";
    console.log(`"${book.title}" provides ${onlineContent}`);
 }
 for (const { title, onlineContent } of books) {
     console.log(`"${title}" provides ${onlineContent ?? "no data about its online content"}`);
 }
