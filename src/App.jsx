import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/join" element={<Join />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
