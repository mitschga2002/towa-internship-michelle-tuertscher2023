import GridComponent from "./components/common/GridComponent";
import Footer from "./components/home/Footer";
import Header from "./components/home/Header";

function App() {
  return (
    <>
      <Header />
      <main className="p-10 container mx-auto">
        <GridComponent />
      </main>
      <Footer />
    </>
  );
}

export default App;
