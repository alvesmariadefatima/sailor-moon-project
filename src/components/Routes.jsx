import React from 'react';
import Home from './Home/Home';
import Loading from './Loading/Loading';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/Home" element={<Home />} />
                <Route path="/Loading" element={<Loading />} />
            </Routes>
        </Router>
    );  
}

export default AppRoutes;