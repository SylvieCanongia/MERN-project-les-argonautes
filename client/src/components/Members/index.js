import React, { useEffect, useState } from "react";
import axios from "axios";
import { react_app_api_url } from "./../../envConfig.js";
import MembersView from "./MembersView.js";
import "./members.scss";

const Members = () => {
  const [members, setMembers] = useState("");

  useEffect(() => {
    getAllMembers();
  }, []);

  const getAllMembers = async () => {
    // axios.get(`${react_app__api_url}api/post`)
    await axios({
      method: "get",
      url: `${react_app_api_url}api/post`,
      withCredentials: true,
    })
      .then((res) => {
        // console.log(res.data);
        const allMembers = res.data;
        // Add the data to state
        setMembers(allMembers);
      })
      .catch((err) => console.log("Error in getting data : " + err));
  };

  return <MembersView members={members} />;
};

export default Members;
