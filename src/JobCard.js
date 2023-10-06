import "./JobCard.css";
/** JobCard

Renders card for each individual job

Props
  -job {id, title, salary, equity, companyName, companyHandle}
    Note: only id and title are mandatory


  JobCardList -> JobCard
*/
function JobCard({ job }) {
  return (
    <div className="JobCard">
      <h3>{job.companyName}</h3>
      <h1>Title: {job.title}</h1>
      <h3>Salary: {job.salary}</h3>
      <h3>Equity: {job.equity}</h3>
    </div>
  );
}

export default JobCard;