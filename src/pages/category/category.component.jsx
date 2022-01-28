import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

//styling
import "./category.styles.scss";

const CategoryPage = ({ match }) => (
  <div className="category">
    <h2>Category Page</h2>
    <CollectionItem />
  </div>
);

export default CategoryPage;
