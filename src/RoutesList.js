import { Route, Routes, Navigate } from "react-router-dom";
import userContext from "./userContext";
import { useContext } from "react";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/** Function to create a list of routes for the BrowseRouter
 *  props: login, signup, editProfile
 *  state: none
 *
 *  For Logged-in users:
 *
 *  App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList,
 *  LoginForm, SignupForm, ProfileForm}
 *
 *  For Logged-out users:
 *
 *  App -> RoutesList -> { Homepage, LoginForm, SignupForm }
 */
function RoutesList({ login, signup, editProfile }) {
  const { currentUser } = useContext(userContext);

  return currentUser
    ? (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/profile" element={<ProfileForm editProfile={editProfile} />} />
        <Route path="*" element={<Navigate to={"/"}/>} />
      </Routes>
    )
    : (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<LoginForm login={login} />} />
        <Route path="signup" element={<SignupForm signup={signup} />} />
        <Route path="*" element={<Navigate to={"/"}/>} />
      </Routes>
    );
}

export default RoutesList;