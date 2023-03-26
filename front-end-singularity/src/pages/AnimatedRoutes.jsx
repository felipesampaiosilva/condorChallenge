import { Routes, Route, useLocation } from "react-router-dom";
import { About } from "./About";
import { Background } from "./Background";
import { Goal } from "./Goal";
import { Next } from "./Next";
import { Problem } from "./Problem";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}> 
                <Route path='/' element={<About />} />
                <Route path='/background' element={<Background />} />
                <Route path='/goal' element={<Goal />} />
                <Route path='/next' element={<Next />} />
                <Route path='/problem' element={<Problem />} />
            </Routes>
        </AnimatePresence>
    );
};