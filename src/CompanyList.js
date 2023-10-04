import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";

/** Function to render a list of companies
 *  props: none
 *  state: companiesData: a list of company objects retrieved by an API call,
 *         like: [{handle, name, description, numEmployees, logoUrl} ...]
 *
 *  App -> RoutesList -> CompanyList
 */
function CompanyList() {
  const [companiesData, setCompaniesData] = useState({
    companies: [],
    isLoading: true
  });

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
  }, []);

  //FIXME: not done
  function filterResults(searchQuery) {
    JoblyApi.request("/companies", searchQuery);
  }


  return (
    companiesData.isLoading ?
      <h1>Loading... </h1>
      :
      <div>
        <SearchForm filterResults={filterResults} />
        <ul className="CompanyList">
          {companiesData.companies.map(comp => (<li><CompanyCard key={comp.handle} company={comp} /></li>))}

        </ul>
      </div>
  );
}

export default CompanyList;