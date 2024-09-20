import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalPatients, setTotalPatients] = useState(0); // Total number of patients
  const patientsPerPage = 10; // Limit the number of patients per page

  const [searchQuery, setSearchQuery] = useState(""); // Search query for name or ID

  // Fetch patients with optional search query
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const username = "superman";
        const password = "Admin123";
        const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;

        const response = await axios.get(
          `https://localhost/openmrs/ws/rest/v1/bahmni/search/patient/`,
          {
            headers: {
              Authorization: basicAuth,
            },
            params: {
              limit: patientsPerPage, // Number of patients per page
              startIndex: (currentPage - 1) * patientsPerPage, // Calculate the starting index
              q: searchQuery, // Search query (name or ID)
            },
          }
        );

        // Log the full response for debugging
        console.log("Full Response:", response);
        console.log("Response Data:", response.data);

        // Extract data from pageOfResults
        if (Array.isArray(response.data.pageOfResults)) {
          setPatients(response.data.pageOfResults);
          setTotalPatients(response.data.totalCount); // Assuming totalCount is in the response
        } else {
          console.warn("Unexpected response structure:", response.data);
          setPatients([]);
        }
      } catch (err) {
        console.error("Error fetching patients:", err);
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [currentPage, searchQuery]); // Refetch data when currentPage or searchQuery changes

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage * patientsPerPage < totalPatients)
      setCurrentPage(currentPage + 1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page when searching
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-primary">
      <div className="d-flex justify-content-evenly p-3">
        <h2 className="fw-bold">Patients List</h2>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search patient name "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {patients.length > 0 ? (
        <div className="table border-2 border-light p-2">
          <table className="w-100 mt-4">
            <thead>
              <tr className="bg-dark text-light">
                <th className="p-2">Patient Id</th>
                <th className="p-2">Patient Name</th>
                <th className="p-2">Patient ID (uuid)</th>
                <th className="p-2">Gender</th>
                <th className="p-2">Birth date</th>
                <th className="p-2">Date of registration</th>
                <th className="p-2">Age</th>
                <th className="p-2">Unique Id</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.uuid} className="bg-secondary fw-semibold">
                  <td className="p-2">{patient.personId}</td>
                  <td className="p-2">
                    {patient.givenName + " " + patient.familyName}
                  </td>
                  <td className="p-2">{patient.uuid}</td>
                  <td className="p-2">{patient.gender}</td>
                  <td className="p-2">
                    {new Date(patient.birthDate).toLocaleDateString()}
                  </td>
                  <td className="p-2">
                    {new Date(patient.dateCreated).toLocaleDateString()}
                  </td>
                  <td className="p-2">{patient.age}</td>
                  <td>{patient.identifier}</td>
                  <td>{patient.extraIdentifiers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No patients found.</p>
      )}

      {/* pagination */}
      <div className="pagination-controls d-flex slign-item-center justify-content-center">
        <button
          className="py-1 btn btn-secondary text-light fw-bold"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <span className="p-1">
          Page {currentPage} of {Math.ceil(totalPatients / patientsPerPage)}
        </span>
        <button
          className="py-1 btn btn-secondary text-light fw-bold"
          onClick={handleNextPage}
          disabled={currentPage * patientsPerPage >= totalPatients}
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
