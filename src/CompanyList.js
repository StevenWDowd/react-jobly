import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm"
import JoblyApi from "./api";

function CompanyList() {
  const [companiesData, setCompaniesData] = useState({
    companies: [],
    isLoading: true
  })

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
    const newCompanies = await JoblyApi.getCompanies();
       setCompaniesData(d => ({
            ...d,
           companies: newCompanies,
           isLoading: false
       }));

    }
    fetchCompanies();
    }, [ ]);


  return (
    companiesData.isLoading ?
    <h1>Loading... </h1>
    :
    <ul className="CompanyList">
      {companiesData.companies.map(comp => (<li><CompanyCard key={comp.handle} company={comp}/></li>))}

    </ul>
  );
}

export default CompanyList;