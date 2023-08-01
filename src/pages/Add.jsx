import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Add = () => {
    const [art, setArt] = useState({
        title: "",
        description: "",    
        price: null,
        cover: "",
    });
    const [error,setError] = useState(false)

  const navigate = useNavigate();

    const handleChange =(e) => {
        setArt((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };  

    const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/arts", art);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };
    return (
        <div className="form">
           <h1>Add New Art</h1>
           <input type="text" 
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
      <input type="file"
      id="avatar" name="avatar"
      placeholder="Art cover"
      //url="image" name="image"
      accept="image/png, image/jpeg"
      onChange={handleChange}/>

           <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all arts</Link>
        </div>
    );
};

export default Add;