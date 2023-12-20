import Navbar from "./components/Navbar";
import Search from './components/Searchbar';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (
        //Fragments
        <>
            <Navbar></Navbar>
            <Search></Search>
            <Products></Products>
            <About></About>
            <Footer></Footer>

        </>


    )
}

export default App;