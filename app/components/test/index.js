import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const Test = ({result}) => (
  <div className={styles.test}>
    <h2>Hello from Test Component <br />
    Result: {result}
    </h2>
  </div>
);

Test.propTypes = {
  result: PropTypes.number
};

export default Test;
