import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/** Function to create a list of routes for the BrowseRouter
 *  props: none
 *  state: none
 *
 *  App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList}
 */
function RoutesList({login, signup}) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/login" element={<LoginForm login={login}/>} />
      <Route path="/signup" element={<SignupForm signup={signup}/>} />
      <Route path="/profile" element={<ProfileForm/>} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
}

export default RoutesList;