import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Commen/Header";
import Home from "./pages/Home";
import Footer from './Commen/Footer';
import RecipeDetails from "./pages/ReciepDetails"; // Fixed typo
import SearchRecipe from "./pages/SearchRecipe";
import Contact from "./pages/Contact";
import SearchResults from "./pages/SearchResults";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function Base() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="recipedetails/:id" element={<RecipeDetails />} /> {/* Fixed typo */}
          <Route path="searchrecipe" element={<SearchRecipe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="searchresults" element={<SearchResults />} />
          <Route path="signIn" element={<SignIn/>} />
          <Route path="signUp" element={<SignUp/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
