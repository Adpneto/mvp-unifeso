import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Perfil from "./pages/Perfil";
import { AuthProvider } from "./components/AuthContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <div>
            <Navigation></Navigation>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/perfil' element={<Perfil />} />
            </Routes>
            <Footer></Footer>
          </div>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App;
