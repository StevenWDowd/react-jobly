import { Link } from "react-router-dom";

function CompanyCard({company}) {
  return (
    <Link to={`/companies/${company.handle}`}>
    <div className="CompanyCard">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <img src={company.logoURL}/>
    </div>
    </Link>
  )

}

export default CompanyCard;