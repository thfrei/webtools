/**
 *
 * URLEnDeCoder
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import * as _ from 'lodash';

import Button from 'react-bootstrap/Button';

function URLEnDeCoder() {
  const [url, setUrl] = useState(
    'http://foo.bar.com/a.php?asdf=hi&foo=bar%25;-a#23',
  );
  const [searchParams, setSearchParams] = useState([]);
  const [error, setError] = useState('');

  return (
    <div>
      <h3>Url En-/Decoder</h3>
      <textarea
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          setUrl(encode(url));
        }}
      >
        Enc.
      </Button>
      <Button
        onClick={() => {
          setUrl(decode(url));
        }}
      >
        Dec.
      </Button>
      <Button
        onClick={() => {
          try {
            const { search } = new URL(url);
            setSearchParams(search.split('&'));
          } catch (err) {
            // url not valid, reset url to sample:
            console.error(err);
            setError(err.message);
          }
        }}
      >
        Q?
      </Button>
      <br />
      Search-Params:
      <ul>
        {_.map(searchParams, (parameter) => (
          <li>{parameter}</li>
        ))}
      </ul>
      {error}
    </div>
  );
}

function encode(url) {
  try {
    return encodeURIComponent(url).replace(/'/g, '%27').replace(/"/g, '%22');
  } catch (err) {
    console.error('error in encode', err);
    return '';
  }
}

function decode(url) {
  try {
    return decodeURIComponent(url.replace(/\+/g, ' '));
  } catch (err) {
    console.error('error in decode', err);
    return '';
  }
}

URLEnDeCoder.propTypes = {};

export { URLEnDeCoder };
