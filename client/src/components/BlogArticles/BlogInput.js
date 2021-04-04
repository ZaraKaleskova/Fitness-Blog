
import React from "react";
import db from './thebase.config';

export const BlogInput = ({ spell }) => {
  const [name, setName] = React.useState(spell.name);
  const [description, setDescription] = React.useState(spell.description);

  const onUpdate = () => {
   
    db.collection('Blogs').doc(spell.id).set({...spell, name})
  }

  const onDelete = () => {
   
    db.collection('Blogs').doc(spell.id).delete()
  }

  return (
    <>
      <input
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
        <input
        value={description}
        onChange={e => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};