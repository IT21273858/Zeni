import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutScreen, CoursesScreen, HomeScreen, LoginScreen } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/courses" element={<CoursesScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
