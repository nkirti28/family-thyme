import React from "react";
import { useParams } from "react-router-dom";

import ItemList from "../components/ItemList";

import { useQuery } from "@apollo/client";
import { QUERY_LIST } from "../utils/queries";

const Items = (props) => {
  const { id: listId } = useParams();

  const { loading, data } = useQuery(QUERY_LIST, {
    variables: { id: listId },
  });

  const list = data?.list || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">        
        <div className="card-body">
          <p>{list.listName}</p>
        </div>
      </div>

      {list.itemsCount > 0 && (
        <ItemList items={list.items} />
      )}
      
    </div>
  );
};

export default Items;