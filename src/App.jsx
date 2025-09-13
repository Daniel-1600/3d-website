import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <main>
        <img
          src="./gradient.png"
          alt="image"
          className="absolute top-0 right-0 opacity-60 -z-10"
        />

        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>
        <Header />
        <Hero />
      </main>
    </>
  );
}

export default App;
