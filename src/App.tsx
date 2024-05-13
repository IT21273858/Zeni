import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  AboutScreen,
  AllCourseScreen,
  Assignment,
  CourseOverView,
  CourseView,
  CoursesScreen,
  CreateCourseScreen,
  CreateModuleScreen,
  DashScreen,
  HomeScreen,
  LoginScreen,
  MailConfirmationScreen,
} from "./pages";
import Lesson from "./pages/Lesson";
import Quiz from "./pages/Quiz";

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
          <Route path="/course/modules" element={<CreateModuleScreen />} />
          <Route path="/course/overview" element={<CourseOverView />} />
          <Route path="/course/view" element={<CourseView />} />
          <Route path="/Lesson" element={<Lesson />} />
          <Route path="/Assignment" element={<Assignment />} />
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
