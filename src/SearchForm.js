import { useState } from "react";

/** Renders a component to narrow down the companies or jobs displayed
 *  based on their name or title, respectively.
 *
 *  props: filterResults, a function to update the shwon results in the
 *          parent component
 *  state: formData, keeping track of what the user has entered in the form
 *
 *
 *  App -> RoutesList -> {CompanyList, JobList} -> SearchForm
 */
function SearchForm({ filterResults }) {
  const initialData = {
    search: ""
  };
  const [formData, setFormData] = useState(initialData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    filterResults(formData);
    setFormData(initialData);
  }
  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input name="search" value={formData.search} onChange={handleChange}></input>
      <button className="SearchButton" type="submit">Search</button>
    </form>
  );
}

export default SearchForm;