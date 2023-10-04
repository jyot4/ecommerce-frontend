import React, { useEffect, useState } from "react";
import axios from "axios";


function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:8080/admin/category")
    .then((result)=>{
      console.log(result)
      setAllCategories(result.data)
    })
  },[])





  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("photo", photo);
    axios
      .post("http://localhost:8080/admin/products/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        if (result.status === 201 && result.statusText === "Created")
          console.log("Product Added Successfully");
      });
  }
  return (
    <>
      <h2>Add Products</h2>
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="">Price</label>
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label htmlFor="">Category</label>
        <select
          name="category"
          id="category"
          value={category}
          defaultValue={"select"}
          onChange={(e) => setCategory(e.target.value)}
        >
      



<option value="select" disabled >Select Category</option>

{
  allCategories.map((products,index)=>{
return (
 
<option  value={products.categoryName} key={index}>{products.categoryName}</option>)
  })
}
         
        </select>
        <br />
        <label htmlFor="">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Product description"
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <label htmlFor="">Photo</label>
        <input
          type="file"
          name="photo"
          id="photo"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
}

export default AddProduct;
