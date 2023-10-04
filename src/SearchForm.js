
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
function SearchForm({filterResults}) {
  return (
    <p>I am a placeholder component for the search bar.</p>
  )

}

export default SearchForm;