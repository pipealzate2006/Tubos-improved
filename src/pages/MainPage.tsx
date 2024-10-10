import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import CarouselComponent from "../components/Carousel.tsx";

const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <CarouselComponent />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
