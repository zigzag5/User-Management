// import React, { useState } from 'react';
// import Select from 'react-select';

// const Filter = ({ onFilterChange }) => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' },
//   ];

//   const handleFilterChange = () => {
//     onFilterChange(selectedOption);
//   };

//   return (
//     <div style={{ padding: '20px', width: '200px' }}>
//       <h3>Filters</h3>
//       <Select
//         options={options}
//         value={selectedOption}
//         onChange={setSelectedOption}
//         placeholder="Select an option"
//       />
//       <button style={{ marginTop: '10px' }} onClick={handleFilterChange}>
//         Apply Filter
//       </button>
//     </div>
//   );
// };

// export default Filter;

import React from "react";
import Select from "react-select";

const Filter = ({ ageOptions, roleOptions, onAgeChange, onRoleChange, onApply }) => {
  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <div style={{ width: "200px" }}>
        <Select options={ageOptions} placeholder="Filter by Age" onChange={onAgeChange} />
      </div>
      <div style={{ width: "200px" }}>
        <Select options={roleOptions} placeholder="Filter by Role" onChange={onRoleChange} />
      </div>
      <button
        onClick={onApply}
        style={{
          padding: "10px 15px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
