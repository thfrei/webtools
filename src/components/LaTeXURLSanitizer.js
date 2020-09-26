/**
 *
 * LaTeXURLSanitizer
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';

function LaTeXURLSanitizer() {
  const [url, setUrl] = useState('http://foo.bar.com/&asdf=hi%25 a#23');

  return (
    <div>
      <h3>Latex URL Sanitizer</h3>
      <input
        type="text"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <br />
      Latex:
      <input type="text" value={sanitizeUrl(url)} readOnly />
    </div>
  );
}

LaTeXURLSanitizer.propTypes = {};

const sanitizeUrl = (url) => {
  let result = '';
  result = url.replace('#', '\\#').replace('%', '\\%');
  return `\\url{${result}}` || url;
};

export { LaTeXURLSanitizer };
