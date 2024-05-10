import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  AboutScreen,
  AllCourseScreen,
  CoursesScreen,
  HomeScreen,
  LoginScreen,
} from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/courses" element={<CoursesScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/home" element={<AllCourseScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
