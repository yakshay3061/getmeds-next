"use client";

import { useEffect, useState } from "react";
import "./ProductTable.css";
import axios from "axios";
import DataTable from "react-data-table-component";

export default function ProductCategories() {
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#1D9FDA",
        fontSize : '16px',
      },
    },

    cells : {
      style : {
        backgroundColor : '#EBEDF4',
      }
    }
  };

  const column = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Molecule",
      selector: (row) => row.email,
    },
    {
      name: "Strength",
      selector: (row) => row.id,
    },
    {
      name: "Form",
      selector: (row) => row.address.city,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setRecords(res.data))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  const [records, setRecords] = useState([]);

  const handleFilter = (e) => {
    console.log('running')
    const newData = records.filter((row) =>
      row.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(newData);
  };  
 
  return (
    <div className="product-table">
      <div className="product-categories">
        <p>All medicines</p>
        <p>Cancer</p>
        <p>Blood Pressure</p>
        <p>Heart</p>
        <p>Diabetes </p>
      </div>
      <div className="product-search">
        <p className="search-heading">Search Your Medicine</p>
        <div className="input-container">
          <input
            onChange={handleFilter}
            type="text"
            name="name"
            placeholder="Search by medicine name or brand name..."
          />
          <svg
            className="search-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
              fill="#1C1B1F"
            />
          </svg>
        </div>
      </div>

      <div className="table">
        <p className="table-heading">All Medicines</p>
        <DataTable
          columns={column}
          data={records}
          customStyles={customStyles}
          pagination
        ></DataTable>
      </div>
    </div>
  );
}
