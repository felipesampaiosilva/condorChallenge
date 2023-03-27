import { Routes, Route, useLocation } from "react-router-dom";
import { Background } from "./Background";
import { Goal } from "./Goal";
import { Next } from "./Next";
import { Problem } from "./Problem";
import { AnimatePresence } from "framer-motion";
import { Index } from "./Index";
import { Bubonic } from "./Bubonic";
import { AtomicBomb } from "./AtomicBomb";
import { AIScenario } from "./AIScenario";
import { AboutUs } from "./AboutUs";
import { About } from "./About";
import { Team } from "./Team";

export const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}> 
                <Route path='/' element={<Index />} />
                <Route path='/about' element={<About />} />
                <Route path='/background' element={<Background />} />
                <Route path='/goal' element={<Goal />} />
                <Route path='/next' element={<Next />} />
                <Route path='/problem' element={<Problem />} />
                <Route path='/bubonic' element={<Bubonic />} />
                <Route path='/atomicBomb' element={<AtomicBomb />} />
                <Route path='/scenario' element={<AIScenario />} />
                <Route path='/aboutUs' element={<AboutUs />} />
                <Route path='/team' element={<Team />} />
            </Routes>
        </AnimatePresence>
    );
};