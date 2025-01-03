
import Banner from "./components/banner";
import Progressor from "./components/progressor";
import Carsusel from "./components/carsusel";
import Card from "./components/card";
import Offers from "./components/offers";
import ProductList from "./components/productList";
import Testimonals from "./components/testimonals";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Reservation from "./components/reservation";
import Home from "./components/home";
 


export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 text-white min-h-screen">
      <Navbar />
      <Carsusel />
      <ProductList />
      <Banner />
      <Offers />
      <Home />
      <Progressor />
      <Reservation />
      <Card />
      <Footer />
      
      
     
     
      
      


    </div>
  );
}