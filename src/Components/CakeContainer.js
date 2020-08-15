import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Num of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

// step1(When you want to access the redux state in your component, we defined mapStateToProps)
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

//step2
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// step3(connect function connect react component to redux store)
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
