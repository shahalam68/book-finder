import SingleBook from "./SingleBook";

export default function BooksList({ books, onFav }) {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
      {books.map((book) => (
        <SingleBook key={book.id} book={book} onFav={onFav}></SingleBook>
      ))}
    </div>
  );
}
