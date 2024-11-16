import React from "react";
import SearchBar from "./search-bar";
import "../style/table.css";
import useTableData from "../hook/useTableData";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export default function UserTable() {
  const { users, setUsers, isLoading, error } = useTableData();

  return (
    <>
      <SearchBar />
      <table id="user-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                className="checkbox-all-input"
                name="Select all Data"
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  name="Select Data"
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
