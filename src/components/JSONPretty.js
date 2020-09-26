/**
 *
 * JSONPretty
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

function JSONPretty() {
  const [jsObjString, setJsObjString] = useState('{a:1}');

  let obj;

  try {
    obj = JSON.parse(jsObjString);
  } catch (err) {
    try {
      // try if it is not JSON, but js-object (like jsonv5)
      eval(`obj = ${jsObjString}`); // eslint-disable-line no-eval
    } catch (err2) {
      console.error(err);
      obj = { err: 'eval problem' };
      // try webstorm add comma
      // eslint-disable-next-line no-unused-vars
      let jsObjString2 = jsObjString.replace(
        /.$/gm,
        (match, p1, offset, string) => {
          console.log(match);
          if (match === '{' || match === '[') {
            // do nothing
            return match;
          }
          return `${match},`;
        },
      );
      console.log(jsObjString2);
      if (jsObjString2.substr(-1) === ',') {
        jsObjString2 = jsObjString2.slice(0, -1);
      }

      // replace [null] and [undefined] with null and undefined
      // webstorm compare makes null => [null] etc :-/
      jsObjString2 = jsObjString2.replace(/\[null\]/g, 'null');
      jsObjString2 = jsObjString2.replace(/\[undefined\]/g, 'undefined');
      try {
        eval(`obj = ${jsObjString2}`); // eslint-disable-line no-eval
      } catch (err3) {
        console.error(err);
        obj = { err: 'eval and replace problem' };
      }
    }
  }

  return (
    <div>
      <h3>JSON Formatter</h3>
      Also formats WebStorm Compare "json" without , and other
      <textarea
        onChange={(e) => {
          setJsObjString(e.target.value);
        }}
        value={jsObjString}
        style={{ width: '100%', height: '50px' }}
      />
      <ReactJson name={false} src={obj} theme="eighties" />
    </div>
  );
}

JSONPretty.propTypes = {};

export { JSONPretty };
