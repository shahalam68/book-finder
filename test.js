const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Animal Farm', author: 'George Orwell', year: 1945 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }
  ];
  
  books.sort((a, b) => a.title.localeCompare(b.title));
  
  console.log(books);