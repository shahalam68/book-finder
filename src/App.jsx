import BookFinder from "./components/BookFinder";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <BookFinder></BookFinder>
      <Footer></Footer>
    </>
  );
}
