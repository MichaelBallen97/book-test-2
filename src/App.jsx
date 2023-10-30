import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import SelectBook from "./pages/SelectBook";

function App() {
	return (
    <>
      <Header />

      <main>
        <SelectBook />
        <Login />
        <Quiz />
      </main>

      <Footer />
    </>
	);
}

export default App;
