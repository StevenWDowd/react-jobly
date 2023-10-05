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

  const [formData, setFormData] = useState("");

  /** Updates form data */
  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(value);
  }

  /** Handles form submission */
  function handleSubmit(evt) {
    evt.preventDefault();
    filterResults(formData);
    setFormData("");
  }

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input name="search"
        value={formData}
        onChange={handleChange}></input>
      <button className="SearchButton" type="submit">Search</button>
    </form>
  );
}

export default SearchForm;