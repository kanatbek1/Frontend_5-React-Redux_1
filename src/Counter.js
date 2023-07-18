import React from 'react';
import { connect } from 'react-redux';

const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

const Counter = ({ count, increment, decrement }) => (
  <div>
    <h1>Счетчик: {count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
