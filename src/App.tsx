import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Books, Donate } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/donate" element={<Donate />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
