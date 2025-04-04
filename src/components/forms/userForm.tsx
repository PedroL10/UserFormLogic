"use client";

import React, { useState, useEffect } from "react";

interface UserFormProps {
  mode: "create" | "edit";
  userId?: string;
}

const UserForm: React.FC<UserFormProps> = ({ mode, userId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("User");

  useEffect(() => {
    if (mode === "edit" && userId) {
      // Fetch user data based on userId (replace with your actual data fetching)
      // For now, let's use the mock data
      const mockUsers = [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          type: "Admin",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          type: "User",
        },
        {
          id: 3,
          name: "Peter Jones",
          email: "peter.jones@example.com",
          type: "User",
        },
      ];

      const userToEdit = mockUsers.find((user) => user.id === parseInt(userId));

      if (userToEdit) {
        setName(userToEdit.name);
        setEmail(userToEdit.email);
        setType(userToEdit.type);
      }
    } else {
      // Reset the form for create mode
      setName("");
      setEmail("");
      setType("User");
    }
  }, [mode, userId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (create or edit)
    if (mode === "create") {
      // Logic to create a new user
      console.log("Creating user:", { name, email, type });
    } else {
      // Logic to edit an existing user
      console.log("Editing user:", { userId, name, email, type });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <label htmlFor="name" style={{ fontWeight: "bold" }}>
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      <label htmlFor="email" style={{ fontWeight: "bold" }}>
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      <label htmlFor="type" style={{ fontWeight: "bold" }}>
        Type:
      </label>
      <select
        id="type"
        name="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>

      <button
        type="submit"
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {mode === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default UserForm;
