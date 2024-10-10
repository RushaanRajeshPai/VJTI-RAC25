import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Motorbreath from "./pages/Motorbreath";
import Competitions from "./pages/Competitions";
import Activities from "./pages/Activities";
import Internships from "./pages/Internships";
import Media from "./pages/Media";
import Crowdfunding from "./pages/Crowdfunding";
import SponsorUs from "./pages/SponsorUs";
import ScrollToTop from "./components/ScrolltoTop";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Teams" element={<Teams />} />
                <Route path="/Motorbreath" element={<Motorbreath />} />
                <Route path="/Competitions" element={<Competitions />} />
                <Route path="/Activities" element={<Activities />} />
                <Route path="/Internships" element={<Internships />} />
                <Route path="/Media" element={<Media />} />
                <Route path="/Crowdfunding" element={<Crowdfunding />} />
                <Route path="/SponsorUs" element={<SponsorUs />} />
            </Routes>
        </Router>
    );
};

export default App;
