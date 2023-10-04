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


  async function filterResults(searchQuery) {

    const searchTerm = searchQuery.search;

    if (searchTerm) {
    const newCompanies = await JoblyApi.getCompanies({nameLike: searchTerm});
    setCompaniesData(d => ({
      ...d,
      companies: newCompanies,
    }));
    }
  }

//TODO: place SearchForm in its own div?
  return (
    companiesData.isLoading ?
      <h1>Loading... </h1>
      :
      <div>
        <SearchForm filterResults={filterResults} />
        <ul className="CompanyList">
          {companiesData.companies.map(c => (<li><CompanyCard key={c.handle}
                                                        company={c} /></li>))}

        </ul>
      </div>
  );
}

export default CompanyList;