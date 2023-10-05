import JobCard from "./JobCard";

/**JobCardList

  Renders list of cards, each with single job

  Props
  -jobs ([ {job}, {job} ]

  App -> RoutesList -> {CompanyDetail, JobList} -> JobCardList

 */
function JobCardList({ jobs }) {

  return (
    <ul className="JobCardList">
      {jobs.map(job => (<li><JobCard key={job.id} job={job} /></li>))}
    </ul>
  );
}

export default JobCardList;