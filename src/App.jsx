import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import UserCard from "./components/UserCard.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [ageFilter, setAgeFilter] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [search, gender, ageFilter, users]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");

      setUsers(response.data.users);
      setFilteredUsers(response.data.users);

    } catch (error) {
      console.log(error);
    }
  };

  const filterUsers = () => {
    let updatedUsers = [...users];

    // Search By Name
    updatedUsers = updatedUsers.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    // Filter By Gender
    if (gender) {
      updatedUsers = updatedUsers.filter(
        (user) => user.gender === gender
      );
    }

    // Filter By Age
    if (ageFilter === "18-25") {
      updatedUsers = updatedUsers.filter(
        (user) => user.age >= 18 && user.age <= 25
      );
    } else if (ageFilter === "26-35") {
      updatedUsers = updatedUsers.filter(
        (user) => user.age >= 26 && user.age <= 35
      );
    } else if (ageFilter === "36+") {
      updatedUsers = updatedUsers.filter(
        (user) => user.age >= 36
      );
    }

    setFilteredUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-grow">

        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Employee Dashboard
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">

          <input
            type="text"
            placeholder="Search by name..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border border-gray-300 rounded-lg px-4 py-2 w-52 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg px-4 py-2 w-52 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
          >
            <option value="">All Ages</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>

        </div>

        {/* User Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default App;