import Home from "./components/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="pt-4 flex justify-center">
      <div className="w-200 flex flex-col items-center">
        <Header />
        <div className="w-196 px-4 border border-border">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
