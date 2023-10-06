const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */


class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN

  static token;

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const { error } = await resp.json();
      throw Array.isArray(error) ? error : [error];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // obviously, you'll add a lot here ...  jobs, companies

  /** Get information on all companies */
  static async getCompanies(searchData = {}) {
    let res = await this.request(`companies/`, searchData);
    return res.companies;
  }

  /** Get information on all jobs */
  static async getJobs(searchData = {}) {
    let res = await this.request(`jobs/`, searchData);
    return res.jobs;
  }

  /** Get Token */
  static async getToken(formData) {
    let res = await this.request(`auth/token`, formData, "POST");
    this.token = res.token;
    return res.token;
  }

  /**
   * gets: { username, firstName, lastName, isAdmin, jobs }
   * where jobs is { id, title, companyHandle, companyName, state }
   */
  static async getUserData(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  //TODO: change name to signup
  /** Returns token for newly registered user */
  static async registerUser(formData) {
    let res = await this.request(`auth/register`, formData, "POST");
    this.token = res.token;
    return res.token;
  }

  /** Updates a user's first name, last name, and/or email */
  static async updateUser(formData) {
    const username = formData.username;
    delete formData.username;
    let res = await this.request(`users/${username}`, formData, "PATCH");
    return res.user;
  }

}

export default JoblyApi;
