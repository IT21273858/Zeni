import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  AboutScreen,
  AllCourseScreen,
  CoursesScreen,
  CreateCourseScreen,
  DashScreen,
  HomeScreen,
  LoginScreen,
  MailConfirmationScreen,
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
          <Route path="/mail-confirm" element={<MailConfirmationScreen />} />
          <Route path="/dashboard" element={<DashScreen />} />
          <Route path="/course/create" element={<CreateCourseScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
