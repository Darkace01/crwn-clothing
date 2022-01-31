import React from "react";
//utils
import { connect } from "react-redux";
//components
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

//styling
import "./collection.styles.scss";

const CollectionPage = ({ match }) => (
  <div className="category">
    <h2>Category Page</h2>
    {/* <CollectionItem /> */}
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
