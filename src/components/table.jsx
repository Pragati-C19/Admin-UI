// Table Content

import React from "react";
import { useState, useEffect } from "react";
import "../style/table.css";
import useTableData from "../hook/useTableData";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export default function UserTable({ searchQuery }) {
  const { users } = useTableData();
  const [filteredItems, setFilteredItems] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  // console.log("fn: UserTable() : filteredItems : ", filteredItems);
  // console.log("fn: UserTable() : searchQuery : ", searchQuery);
  console.log("fn: UserTable() : isChecked : ", isChecked);

  // This useEffect is for Search bar user data Fetching
  useEffect(() => {
    if (searchQuery) {
      const filtered = users.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.role.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(users);
    }
  }, [searchQuery, users]);

  // Handling Select specfic row logic
  const handleRowCheckbox = (e) => {
    const { value, checked } = e.target;

    // console.log("fn: handleCheckbox() : value : ", value);
    // console.log("fn: handleCheckbox() : checked : ", checked);

    if (checked) {
      setIsChecked([...isChecked, value]);
    } else {
      setIsChecked(isChecked.filter((item) => item !== value));
    }
  };

  return (
    <>
      <table id="user-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                className="checkbox-all-input"
                name="allSelect"
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((user, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  name="Select Data"
                  value={user.id}
                  checked={user.isChecked}
                  onChange={(e) => handleRowCheckbox(e)}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <FaRegEdit className="edit" />
                <MdDelete className="delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="delete-selected">Delete Selected</button>
    </>
  );
}
