import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <Header />
        <main className="max-w-3xl px-4 border border-border border-t-0 mx-4">
          <Home />
          <About />
          <Projects />
        </main>
      </div>
    </div>
  );
};

export default App;
