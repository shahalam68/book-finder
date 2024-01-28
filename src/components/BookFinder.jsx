import { useState } from "react";
import booksData from "../books.json";
import BooksList from "./BooksList";

export default function BookFinder() {
  const AllBooksData = booksData.books;
  const [allBooks, setAllBooks] = useState(AllBooksData);
  const [selectOption, setSelectOption] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    const filterd = allBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAllBooks([...filterd]);
    setSearchTerm("");
  };

  // const sortedData = () => {
  //   const newOrderData = [...allBooks];
  //   if (selectOption === "name_asc") {
  //     return newOrderData.sort((a, b) => a.title.localeCompare(b.title));
  //   } else if (selectOption === "name_desc") {
  //     return newOrderData.sort((a, b) => b.title.localeCompare(a.title));
  //   } else if (selectOption === "year_desc") {
  //     return newOrderData.sort((a, b) => b.year - a.year);
  //   } else if (selectOption === "year_asc") {
  //     return newOrderData.sort((a, b) => a.year - b.year);
  //   } else {
  //     return newOrderData;
  //   }
  // };

  const handleSelectChange = (event) => {
    event.preventDefault();
    const newSelectOption = event.target.value;
    setSelectOption(newSelectOption);
    console.log(newSelectOption);

    switch (newSelectOption) {
      case "name_asc":
        setAllBooks(
          [...allBooks].sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case "name_desc":
        setAllBooks(
          [...allBooks].sort((a, b) => b.title.localeCompare(a.title))
        );
        break;
      case "year_asc":
        setAllBooks([...allBooks].sort((a, b) => a.year - b.year));
        break;
      case "year_desc":
        setAllBooks([...allBooks].sort((a, b) => b.year - a.year));
        break;
      default:
        // Handle default case (if any)
        break;
    }
  };
  const handleFav = (bookId) => {
    console.log("clicked", bookId);
    const bookIndex = allBooks.findIndex((book) => book.id === bookId);
    console.log(bookIndex);
    const newBooks = [...allBooks];
    console.log(newBooks);
    newBooks[bookIndex].isFev = !newBooks[bookIndex].isFev;
    setAllBooks(newBooks);
  };

  return (
    <main className="my-10 lg:my-14">
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <div>
            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
            <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
              Trending Books of the Year
            </h2>
            <form onSubmit={handleSearch}>
              <div className="flex">
                <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
                  <input
                    name="search"
                    type="search"
                    value={searchTerm}
                    onChange={() => setSearchTerm(event.target.value)}
                    id="search-dropdown"
                    className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                    placeholder="Search Book"
                    required
                  />
                  <div className="absolute right-0 top-0 flex h-full items-center">
                    <button
                      type="submit"
                      className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                    >
                      <svg
                        className="h-[14px] w-[14px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span>Search</span>
                    </button>
                    <button
                      type="submit"
                      className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white hidden"
                    >
                      <svg
                        className="h-[14px] w-[14px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex items-stretch space-x-3">
            <select
              className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
              name="sortBy"
              id="sortBy"
              value={selectOption}
              onChange={handleSelectChange}
            >
              <option value="">Sort</option>
              <option value="name_asc">Name (A-Z)</option>
              <option value="name_desc">Name (Z-A)</option>
              <option value="year_asc">Publication Year (Oldest)</option>
              <option value="year_desc">Publication Year (Newest)</option>
            </select>
          </div>
        </div>
      </header>
      <BooksList books={allBooks} onFav={handleFav}></BooksList>
    </main>
  );
}
