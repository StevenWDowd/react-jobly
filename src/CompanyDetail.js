import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";

/** Renders a detailed comapny compononent based on an API call using a handle
 *  in the URL params
 *  props: none
 *  state: companyData, tracking whether data has been retrieved and holding
 *          the data. Company data will look like:
 *          { handle, name, description, numEmployees, logoUrl, jobs }
 *              where jobs is [{ id, title, salary, equity }, ...]
 *
 *  App -> RoutesList -> CompanyDetail
 */
function CompanyDetail() {
  const { handle } = useParams();

  const [companyData, setCompanyData] = useState({
    company: null,
    isLoading: true
  })

  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
    const newCompany = await JoblyApi.getCompany(handle);
       setCompanyData(d => ({
            ...d,
           company: newCompany,
           isLoading: false
       }));

    }
    fetchCompany();
    }, [ ]);

  return (
    companyData.isLoading ?
    <p>Loading...</p>
    :
    <div className="CompanyDetail">
      <h1>{companyData.company.name}</h1>
      <h3>{companyData.company.description}</h3>
      <JobCardList jobs={companyData.company.jobs}/>
    </div>
  )


}

export default CompanyDetail;