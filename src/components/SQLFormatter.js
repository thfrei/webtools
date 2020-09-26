/**
 *
 * SQLFormatter
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { trim } from 'lodash';
import sqlFormatterLib from 'sql-formatter';

function SQLFormatter() {
  const [text, setText] = useState(
    `SELECT * FROM table1 where a=1 and (b=1 or c=3)`,
  );

  return (
    <div>
      <h3>SQL Formatter</h3>
      SQL Query:
      <textarea
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        style={{ width: '100%', height: '50px', border: '3px double' }}
      />
      <br />
      Formatted - SQL:
      <textarea
        type="text"
        value={sqlFormatterLib.format(text)}
        readOnly
        style={{ width: '100%', height: '200px', border: '1px solid black' }}
      />
    </div>
  );
}

SQLFormatter.propTypes = {};

export { SQLFormatter };
