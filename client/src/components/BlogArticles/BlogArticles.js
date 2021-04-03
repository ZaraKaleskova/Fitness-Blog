// import style from '../assets/css/main.css';
// import db from './thebase.config';
// import React,{useState,useEffect} from 'react';

// function Blog() {
//   const [blogs,setBlogs]=useState([])
//   const fetchBlogs=async()=>{
//     const response=db.collection('Blogs');
//     const data=await response.get();
//     data.docs.forEach(item=>{
//      setBlogs([...blogs,item.data()])
//     })
//   }
//   useEffect(() => {
//     fetchBlogs();
//   }, [])
//   return (
//     <div className="App">
//       {
//         blogs && blogs.map(blog=>{
//           return(
//             <div className="blog-container">
//               <h4>{blog.title}</h4>
//               <p>{blog.body}</p>
//             </div>
//           )
//         })
//       }
//     </div>
//   );
// }

// export default Blog;

import React from "react";

import db from "./thebase.config";
import { BlogInput } from "./BlogInput";

function Blog() {
  const [spells, setSpells] = React.useState([]);
  const [newSpellName, setNewSpellName] = React.useState();
  const [newDescription, setNewDescription] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      
      const data = await db.collection("Blogs").get();
      setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onCreate = () => {
   
    db.collection("Blogs").add({ name: newSpellName, description: newDescription });
  };

  return (
    <ul>
      <input
        value={newSpellName}
        onChange={e => setNewSpellName(e.target.value)}
      />
      <input
        value={newDescription}
        onChange={e => setNewDescription(e.target.value)}
      />
      <button onClick={onCreate}>Create</button>
      {spells.map(spell => (
        <li key={spell.name}>
          <BlogInput spell={spell} />
        </li>
        
      ))}
    </ul>
  );
}

export default Blog;