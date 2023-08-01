import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [art, setArt] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const artId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setArt((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/update/${artId}`, art);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update the Art</h1>
      <input
        type="text"
        placeholder="Art title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Art description"
        name="description"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Art price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Art cover"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all arts</Link>
    </div>
  );
};

export default Update;