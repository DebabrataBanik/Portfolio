import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";

const App = () => {
  return (
    <div className="pt-4 flex justify-center">
      <div className="w-200 flex flex-col items-center">
        <Header />
        <main className="w-196 px-4 border border-border border-t-0">
          <Home />
          <About />
        </main>
      </div>
    </div>
  );
};

export default App;
