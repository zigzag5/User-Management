// import React from 'react';
// import DataTable from 'react-data-table-component';

// const Table = ({ data }) => {
//   const columns = [
//     {
//       name: 'ID',
//       selector: row => row.id,
//       sortable: true,
//     },
//     {
//       name: 'Name',
//       selector: row => row.name,
//       sortable: true,
//     },
//     {
//       name: 'Value',
//       selector: row => row.value,
//       sortable: true,
//     },
//   ];

//   return (
//     <div style={{ padding: '20px', flex: 1 }}>
//       <h3>Data Table</h3>
//       <DataTable
//         columns={columns}
//         data={data}
//         pagination
//       />
//     </div>
//   );
// };

// export default Table;

import React from "react";
import DataTable from "react-data-table-component";

const Table = ({ columns, data }) => {
  return (
    <DataTable
      title="User Data"
      columns={columns}
      data={data}
      pagination
    />
  );
};

export default Table;
