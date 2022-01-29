import React from "react";
//utils
import { connect } from "react-redux";
//components
import CollectionItem from "../../components/collection-item/collection-item.component";

//styling
import "./collection.styles.scss";

const CollectionPage = ({ match }) => (
  <div className="category">
    <h2>Category Page</h2>
    {/* <CollectionItem /> */}
  </div>
);

export default CollectionPage;
