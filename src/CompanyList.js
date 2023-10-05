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
  const [companiesData, setCompaniesData] = useState(null);

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      const newCompanies = await JoblyApi.getCompanies();
      setCompaniesData(newCompanies);
    }
    fetchCompanies();
  }, []);

  /** Update search based on user input */
  async function filterResults(searchQuery) {
    if (searchQuery) {
      const newCompanies = await JoblyApi.getCompanies({ nameLike: searchQuery });
      setCompaniesData(newCompanies);

    }
  }

  if (!companiesData) {
    return <h1>Loading... </h1>;
  }

  return (
    <div className="CompanyList">
      <div className="CompanyList-search-bar">
        <SearchForm filterResults={filterResults} />
      </div>
      <ul className="CompanyList-list">
        {companiesData.map(c => (<li><CompanyCard key={c.handle}
          company={c} /></li>))}

      </ul>
    </div>
  );

}

export default CompanyList;