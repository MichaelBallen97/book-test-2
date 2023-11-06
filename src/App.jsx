import UserProvider from "./context/UserProvider";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quiz from "./pages/Quiz";
import BooksProvider from "./context/BooksProvider";
import CompletedTests from "./pages/CompletedTests";
import PendingTests from "./pages/PendingTests";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
	return (
    <UserProvider>
      <BrowserRouter>
        <Header />

        <BooksProvider>
          <Routes>
            <Route index element={<Index />} />
            <Route path="quiz" element={
              <ProtectedRoutes>
                <Quiz />
              </ProtectedRoutes>
            } />
            <Route path="quiz">
              <Route path=":bookId" element={
                <ProtectedRoutes>
                  <Quiz />
                </ProtectedRoutes>
              } />
            </Route>
            <Route path="completed" element={
              <ProtectedRoutes>
                <CompletedTests />
              </ProtectedRoutes>
            } />
            <Route path="pending" element={
              <ProtectedRoutes>
                <PendingTests />
              </ProtectedRoutes>
            } />
            <Route path="login" element={<Login />} />
          </Routes>
        </BooksProvider>

        <Footer />
      </BrowserRouter>
    </UserProvider>
	);
}

export default App;
