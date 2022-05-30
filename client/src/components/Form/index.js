import React from "react";
import './form.scss';

const Form = () => {
  return (
    <div className="form">
      {/* New member form */}
      <h2 className="formTitle">Ajouter un(e) Argonaute</h2>
      <form className="formNewMember">
        <label className="formLabel" htmlFor="name">Nom de l&apos;Argonaute</label>
        <input className="formInput" id="name" name="name" type="text" placeholder="Charalampos" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Form;
