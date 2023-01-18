import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Head from "./components/Head/Head";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Departments from "./pages/Departments/Departments";
import Loader from "./components/Loader/Loader";
import Computer from "./pages/Departments/Computer/Computer";
import Civil from "./pages/Departments/Civil/Civil";
import Electrical from "./pages/Departments/Electrical/Electrical";
const About = lazy(() => import("./pages/About/About"));

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/computer-technology" element={<Computer />} />
        <Route path="/departments/civil-technology" element={<Civil />} />
        <Route
          path="/departments/electrical-technology"
          element={<Electrical />}
        />
        <Route
          path="/departments/architecture-technology"
          element={<h1>Architecture</h1>}
        />
        <Route
          path="/departments/electronics-technology"
          element={<h1>Electronics</h1>}
        />
        <Route path="/complain" element={<h1>complain</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
