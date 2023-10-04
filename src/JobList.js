import { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";

/**JobList

  Render array of all jobs returned from API, can be filtered by search query

  Props: none
  State: jobsData: a list of job objects retrieved by an API call,
         like: [{id, title, salary, equity, companyHandle, companyName)} ...]



  App -> RoutesList -> JobList
*/
function JobList() {
  const [jobsData, setJobsData] = useState(null);

  useEffect(function fetchJobsWhenMounted() {
    async function fetchJobs() {
      const newJobs = await JoblyApi.getJobs();
      setJobsData(newJobs);
    }
    fetchJobs();
  }, []);

  async function filterResults(searchQuery) {

    if (searchQuery) {
    const newJobs = await JoblyApi.getJobs({title: searchQuery});
    setJobsData(newJobs);
    }
  }

  if (!jobsData) return <h1>Loading... </h1>

  return (
      <div className="JobList">
        <div className="JobsList-search-bar">
          <SearchForm filterResults={filterResults}/>
        </div>
        <JobCardList jobs={jobsData} />
      </div>
  );
}

export default JobList;