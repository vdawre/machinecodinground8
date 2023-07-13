import React from "react";
import { Routes , Route } from 'react-router-dom';

import Home from "./pages/Home";
import DisplayMeetup from "./pages/DisplaMeetup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:meetup" element={<DisplayMeetup />} />
      </Routes>
    </>
  );
}

export default App;