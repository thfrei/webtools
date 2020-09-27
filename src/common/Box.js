/**
 *
 * Box
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import styles from './Box.module.css';

function Box(props) {
  const [color, setColor] = useState('#ffffff');

  return (
    <div className={styles.Box}>
        {props.children}
    </div>
  );
}

Box.propTypes = {};

export { Box };
