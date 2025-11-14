import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Muhammad Khizar",
    bio: "Passionate about building responsive and accessible web interfaces using React and Tailwind CSS.",
    image: "https://i.pravatar.cc/48?u=118815",
    Follow: false,
  },
  {
    id: 2,
    name: "Nasiruddin Abu Bakar",
    bio: "Experienced in developing REST APIs and database management using Node.js and MongoDB.",
    image: "https://i.pravatar.cc/48?u=100810",
    Follow: true,
  },
  {
    id: 3,
    name: "Arham Ahmed",
    bio: "Enjoys transforming raw data into actionable insights using Python and Power BI.",
    image: "https://i.pravatar.cc/48?u=499476",
    Follow: false,
  },
  {
    id: 4,
    name: "Muhammad Hamza",
    bio: "Specializes in predictive modeling, NLP, and data visualization with TensorFlow and Scikit-learn.",
    image: "https://i.pravatar.cc/48?u=100799",
    Follow: false,
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("light");
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className={mode === "light" ? "" : "dark-theme"}>
      <Navbar query={query} setQuery={setQuery} mode={mode} setMode={setMode} />
      {filteredUsers.map((user) => (
        <Users user={user} key={user.id} />
      ))}
      ;
    </div>
  );
}

function Navbar({ query, setQuery, mode, setMode }) {
  function handleSearch(e) {
    setQuery(e.target.value);
  }

  function handleMode() {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);

    if (newMode === "dark") {
      document.body.style.backgroundImage = "url('./dark-updated-public.jpg')";
    } else {
      document.body.style.backgroundImage = "url('backgroungImageLight.jpg')";
    }

    console.log("Mode changed to:", newMode);
  }
  return (
    <div className="navbar">
      <div className="heading">
        <p className="heading-text">PROFILES</p>
        <button className="mode" onClick={handleMode}>
          <i
            style={
              mode === "light" ? { color: "#333333" } : { color: "#ffffff" }
            }
            className={
              mode === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"
            }
          ></i>
        </button>
      </div>
      <div className="search-bar">
        <i
          style={{ color: "#bbc2c2", padding: "0.75rem" }}
          className="fa-solid fa-magnifying-glass"
        ></i>
        <input
          className="search-input"
          placeholder="Search users..."
          onChange={handleSearch}
        ></input>
      </div>
    </div>
  );
}

function Users({ user }) {
  const [isFollowed, setisFollowed] = useState(user.Follow);
  return (
    <div className="container">
      <div>
        <img className="profile-picture" alt={user.name} src={user.image}></img>
      </div>
      <div className="user-details">
        <span className="user-name">{user.name}</span>
        <p className="user-description">{user.bio}</p>
      </div>
      <div className="div-btn">
        <button
          onClick={() => setisFollowed(!isFollowed)}
          className={isFollowed ? "following" : "follow"}
        >
          {isFollowed ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
}
