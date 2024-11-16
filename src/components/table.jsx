// Table Content

import React from "react";
import { useState, useEffect } from "react";
import "../style/table.css";
import useTableData from "../hook/useTableData";
import { MdDelete, MdOutlineCancel } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiSave3Fill } from "react-icons/ri";

export default function UserTable({ searchQuery }) {
  const { users, setUsers } = useTableData();
  const [filteredItems, setFilteredItems] = useState([]);
  const [isChecked, setIsChecked] = useState([]); // Track selected rows
  const [editingId, setEditingId] = useState(null); // Track the row being edited
  const [tempData, setTempData] = useState({}); // Store the temporary values for editing

  // console.log("fn: UserTable() : filteredItems : ", filteredItems);
  // console.log("fn: UserTable() : searchQuery : ", searchQuery);
  console.log("fn: UserTable() : isChecked : ", isChecked);

  // Search the User by name, email or role
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

  // Selecting specific row
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

  // Selecting all rows
  const handleSelectAll = (e) => {
    const { checked } = e.target;

    if (checked) {
      const allUserIDs = filteredItems.map((user) => user.id);
      setIsChecked(allUserIDs);
    } else {
      setIsChecked([]);
    }
  };

  // Deleting specific User Data (We are deleting user only in memory)
  const deleteUser = (userId) => {
    const usersAfterDeletion = users.filter((user) => {
      return user.id !== userId;
    });
    setUsers(usersAfterDeletion);
  };

  // Delete Selected Rows (We are deleting row only in memory)
  const deleteSelectedRows = () => {
    const usersAfterDeletion = users.filter((user) => !isChecked.includes(user.id));
    setUsers(usersAfterDeletion);
    setIsChecked([]); // Clear selection
  };

  // Start editing a row (We are editing user only in memory)
  const startEditing = (user) => {
    setEditingId(user.id);
    setTempData({ ...user }); // Pre-fill the temporary data with current user data
  };

  // Save changes (We are editing user only in memory)
  const saveChanges = () => {
    const updatedUsers = users.map((user) =>
      user.id === editingId ? { ...user, ...tempData } : user
    );
    setUsers(updatedUsers); // Update the users state
    setEditingId(null); // Exit editing mode
  };

  // Cancel editing (We are editing user only in memory)
  const cancelEditing = () => {
    setEditingId(null); // Exit editing mode without saving
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData({ ...tempData, [name]: value }); // Update temp data
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
                onChange={handleSelectAll}
                checked={filteredItems.length > 0 && isChecked.length === filteredItems.length}
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
            <tr key={index} className={isChecked.includes(user.id) ? "selected-row" : ""}>
              <td>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value={user.id}
                  onChange={handleRowCheckbox}
                  checked={isChecked.includes(user.id)}
                />
              </td>
              {editingId === user.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={tempData.name}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={tempData.email}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="role"
                      value={tempData.role}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <RiSave3Fill className="save" onClick={saveChanges} />
                    <MdOutlineCancel className="cancel" onClick={cancelEditing} />
                  </td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <FaRegEdit className="edit" onClick={() => startEditing(user)} />
                    <MdDelete
                      className="delete"
                      onClick={() => deleteUser(user.id)}
                    />
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="delete-selected" onClick={deleteSelectedRows} disabled={!isChecked.length}>Delete Selected</button>
    </>
  );
}
