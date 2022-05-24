import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/NavBar";
import { Index } from "./Components/Content/Index";
import { SearchBar } from "./Components/Searchbar/SearchBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <SearchBar />
      <Index />
      <Footer />
    </>
  );
}

export default App;
