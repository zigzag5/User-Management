// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import DataTable from "react-data-table-component";
// import axios from "axios";

// // API URL
// const API_URL = "https://dummyjson.com/users";

// // Navbar Component
// const Navbar = () => {
//   return (
//     <nav style={styles.navbar}>
//       <div style={styles.logo}>My App</div>
//       <ul style={styles.navLinks}>
//         <li><a href="/" style={styles.link}>Home</a></li>
//         <li><a href="/about" style={styles.link}>About</a></li>
//         <li><a href="/contact" style={styles.link}>Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// // Main App Component
// const App = () => {
//   const [data, setData] = useState([]); // Full API data
//   const [filteredData, setFilteredData] = useState([]); // Filtered data for display
//   const [ageFilter, setAgeFilter] = useState(null); // Age filter
//   const [roleFilter, setRoleFilter] = useState(null); // Role filter

//   // Fetch data from API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         const users = response.data.users.map((user) => ({
//           id: user.id,
//           name: `${user.firstName} ${user.lastName}`,
//           age: user.age,
//           email: user.email,
//           gender: user.gender,
//           role: user.role,
//         }));
//         setData(users);
//         setFilteredData(users); // Initialize filtered data with all users
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Filter options
//   const ageOptions = [
//     { value: "all", label: "All Ages" },
//     { value: "under30", label: "Under 30" },
//     { value: "30to40", label: "30-40" },
//     { value: "above40", label: "Above 40" },
//   ];
//   const roleOptions = [
//     { value: "all", label: "All Roles" },
//     { value: "admin", label: "Admin" },
//     { value: "moderator", label: "Moderator" },
//     { value: "user", label: "User" },
//   ];

//   // Handle filtering
//   const applyFilters = () => {
//     let filtered = [...data];

//     if (ageFilter?.value !== "all") {
//       if (ageFilter.value === "under30") filtered = filtered.filter((user) => user.age < 30);
//       if (ageFilter.value === "30to40") filtered = filtered.filter((user) => user.age >= 30 && user.age <= 40);
//       if (ageFilter.value === "above40") filtered = filtered.filter((user) => user.age > 40);
//     }

//     if (roleFilter?.value !== "all") {
//       filtered = filtered.filter((user) => user.role === roleFilter.value);
//     }

//     setFilteredData(filtered);
//   };

//   // Table columns
//   const columns = [
//     { name: "ID", selector: (row) => row.id, sortable: true },
//     { name: "Name", selector: (row) => row.name, sortable: true },
//     { name: "Age", selector: (row) => row.age, sortable: true },
//     { name: "Email", selector: (row) => row.email },
//     { name: "Gender", selector: (row) => row.gender },
//     { name: "Role", selector: (row) => row.role, sortable: true },
//   ];

//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />

//       <div style={{ padding: "20px", marginTop: "60px" }}>
//         <h1>User Management</h1>

//         {/* Filters */}
//         <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
//           {/* Age Filter */}
//           <div style={{ width: "200px" }}>
//             <Select
//               options={ageOptions}
//               placeholder="Filter by Age"
//               onChange={(selected) => setAgeFilter(selected)}
//             />
//           </div>
//           {/* Role Filter */}
//           <div style={{ width: "200px" }}>
//             <Select
//               options={roleOptions}
//               placeholder="Filter by Role"
//               onChange={(selected) => setRoleFilter(selected)}
//             />
//           </div>
//           <button
//             onClick={applyFilters}
//             style={{
//               padding: "10px 15px",
//               backgroundColor: "#007BFF",
//               color: "white",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Apply Filters
//           </button>
//         </div>

//         {/* Data Table */}
//         <DataTable
//           title="User Data"
//           columns={columns}
//           data={filteredData}
//           pagination
//         />
//       </div>
//     </div>
//   );
// };

// // Inline CSS for Navbar
// const styles = {
//   navbar: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     backgroundColor: "#282c34",
//     color: "white",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px 20px",
//     zIndex: 1000,
//   },
//   logo: {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//   },
//   navLinks: {
//     display: "flex",
//     listStyle: "none",
//     margin: 0,
//     padding: 0,
//   },
//   link: {
//     color: "white",
//     textDecoration: "none",
//     margin: "0 15px",
//     fontSize: "1rem",
//   },
// };

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Table from "./components/Table";

const API_URL = "https://dummyjson.com/users";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [ageFilter, setAgeFilter] = useState(null);
  const [roleFilter, setRoleFilter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        const users = response.data.users.map((user) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          age: user.age,
          email: user.email,
          gender: user.gender,
          role: user.role,
        }));
        setData(users);
        setFilteredData(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const ageOptions = [
    { value: "all", label: "All Ages" },
    { value: "under30", label: "Under 30" },
    { value: "30to40", label: "30-40" },
    { value: "above40", label: "Above 40" },
  ];
  const roleOptions = [
    { value: "all", label: "All Roles" },
    { value: "admin", label: "Admin" },
    { value: "moderator", label: "Moderator" },
    { value: "user", label: "User" },
  ];

  const applyFilters = () => {
    let filtered = [...data];
    if (ageFilter?.value !== "all") {
      if (ageFilter.value === "under30") filtered = filtered.filter((user) => user.age < 30);
      if (ageFilter.value === "30to40") filtered = filtered.filter((user) => user.age >= 30 && user.age <= 40);
      if (ageFilter.value === "above40") filtered = filtered.filter((user) => user.age > 40);
    }
    if (roleFilter?.value !== "all") {
      filtered = filtered.filter((user) => user.role === roleFilter.value);
    }
    setFilteredData(filtered);
  };

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Age", selector: (row) => row.age, sortable: true },
    { name: "Email", selector: (row) => row.email },
    { name: "Gender", selector: (row) => row.gender },
    { name: "Role", selector: (row) => row.role, sortable: true },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px", marginTop: "60px" }}>
        <h1>User Management</h1>
        <Filter
          ageOptions={ageOptions}
          roleOptions={roleOptions}
          onAgeChange={setAgeFilter}
          onRoleChange={setRoleFilter}
          onApply={applyFilters}
        />
        <Table columns={columns} data={filteredData} />
      </div>
    </div>
  );
};

export default App;
