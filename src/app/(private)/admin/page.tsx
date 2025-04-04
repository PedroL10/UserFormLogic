import React from "react";
import Link from "next/link";

const mockUsers = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", type: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", type: "User" },
  {
    id: 3,
    name: "Peter Jones",
    email: "peter.jones@example.com",
    type: "User",
  },
];

const AdminPage = () => {
  return (
    <div
      style={{
        maxWidth: "800px", // Increased max width
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1>Admin Dashboard</h1>

      <Link
        href="/admin/create"
        style={{
          padding: "10px 15px",
          backgroundColor: "#28a745", // Green color for create
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          textDecoration: "none", // Remove underline from link
          display: "inline-block", // Make the link behave like a block for styling
          marginBottom: "10px", // Add some space below the button
        }}
      >
        Create User
      </Link>

      <h2>User List</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Type</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user) => (
            <tr key={user.id}>
              <td style={tableCellStyle}>{user.name}</td>
              <td style={tableCellStyle}>{user.email}</td>
              <td style={tableCellStyle}>{user.type}</td>
              <td style={tableCellStyle}>
                <Link
                  href={`/admin/edit/${user.id}`}
                  style={{
                    ...actionButtonStyle,
                    backgroundColor: "#007bff",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Edit
                </Link>
                <button style={actionButtonStyle}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles for the table
const tableHeaderStyle: React.CSSProperties = {
  backgroundColor: "#f2f2f2",
  padding: "8px",
  border: "1px solid #ddd",
  textAlign: "left",
};

const tableCellStyle = {
  padding: "8px",
  border: "1px solid #ddd",
};

const actionButtonStyle = {
  padding: "5px 10px",
  marginRight: "5px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "white",
};

export default AdminPage;
