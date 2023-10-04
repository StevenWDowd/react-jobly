import JobCard from "./JobCard";

function JobCardList({jobs}) {
  //const { id, title, salary, equity, companyHandle, companyName } = jobs;

  return (
    <ul className="JobCardList">
      {jobs.map(job => (<li><JobCard key={job.id} job={job}/></li>))}
    </ul>
  )

}

export default JobCardList;