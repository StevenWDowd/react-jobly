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
  const [jobsData, setJobsData] = useState({
    jobs: [],
    isLoading: true
  });

  useEffect(function fetchJobsWhenMounted() {
    async function fetchJobs() {
      const newJobs = await JoblyApi.getJobs();
      setJobsData(d => ({
        ...d,
        jobs: newJobs,
        isLoading: false
      }));
    }
    fetchJobs();
  }, []);

  async function filterResults(searchQuery) {
    const searchTerm = searchQuery.search;
    if (searchTerm) {
    const newJobs = await JoblyApi.getJobs({title: searchTerm});
    setJobsData(d => ({
      ...d,
      jobs: newJobs,
    }));
    }
  }

  return (
    jobsData.isLoading ?
      <h1>Loading... </h1>
      :
      <div className="JobList">
        <SearchForm filterResults={filterResults}/>
        <JobCardList jobs={jobsData.jobs} />
      </div>
  );
}

export default JobList;