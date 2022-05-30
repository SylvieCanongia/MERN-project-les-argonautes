import axios from "axios";
import React, { useState } from "react";
import { REACT_APP_api_url } from "./../../envConfig.js";
import "./form.scss";

const Form = () => {
  const [name, setName] = useState("");

  const handleCreateMember = async (e) => {
    e.preventDefault();

    await axios({
      method: "post",
      url: `${REACT_APP_api_url}api/post`,
      withCredentials: true,
      data: {
        name,
      },
    })
      .then((res) => {
        console.log(res);
        window.location = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form">
      {/* New member form */}
      <h2 className="formTitle">Ajouter un(e) Argonaute</h2>
      <form action="" onSubmit={handleCreateMember} className="formNewMember">
        <label className="formLabel" htmlFor="name">
          Nom de l&apos;Argonaute
        </label>
        <input
          className="formInput"
          id="name"
          name="name"
          type="text"
          placeholder="Charalampos"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Form;
