import * as React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_LISTS } from "../utils/queries";
import List from "../components/List";


const Lists = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_LISTS);
  const lists = data?.lists || [];
  console.log(lists);
  const loggedIn = Auth.loggedIn();
  return (
    <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
      {loading ? <div>Loading...</div> : <List lists={lists}></List>}
    </div>
  );
};


export default Lists;
