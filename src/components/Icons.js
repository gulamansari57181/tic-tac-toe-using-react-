import React from "react";
import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";

function Icons({ name }) {
  switch (name) {
    // If circle is selected then we render circle icon , similarly for cross and by default all icons will be "pen".
    case "circle":
      return <FaRegCircle className="icon"></FaRegCircle>;
    case "cross":
      return <FaTimes className="icon"></FaTimes>;
    default:
      return <FaPen className="icon"></FaPen>;
  }
}

export default Icons;
