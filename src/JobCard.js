
/** JobCard

Renders card for each individual job

Props
  -job {title, salary, equity, companyHandle}


  JobCardList -> JobCard
*/
function JobCard({job}) {
 return (
  <div className="JobCard">
    <h3>{job.companyName}</h3>
    <h1>{job.title}</h1>
    <h3>{job.salary}</h3>
    <h3>{job.equity}</h3>
  </div>
 );
}

export default JobCard;