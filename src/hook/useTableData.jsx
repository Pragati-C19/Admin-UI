// Hook for User Table Data

import { useState, useEffect } from "react";

// Hook for fetching and managing documents
const useTableData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch All User Data from the API
  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`);
      console.log("fn: fetchUserData(): response - ", response);

      if (!response.ok) {
        throw new Error("Failed to fetch User Data.");
      }

      const data = await response.json();
      console.log("fn: fetchUserData(): data - ", data);

      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch documents when the component mounts
  }, []);

  return {
    users,
    setUsers,
    loading,
    error,
  };
};

export default useTableData;
