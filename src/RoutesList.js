import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";

/** Function to create a list of routes for the BrowseRouter
 *  props: none
 *  state: none
 *
 *  App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList}
 */
function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
}

export default RoutesList;