import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Colors } from './components/Colors';
import { JSONPretty } from './components/JSONPretty';
import { LaTeXURLSanitizer } from './components/LaTeXURLSanitizer';
import { MarkdownImageLinkConverter } from './components/MarkdownImageLinkConverter';
import { OPCUANodeIdConverter } from './components/OPCUANodeIdConverter';
import { QRCodeGenerator } from './components/QRCodeGenerator';
import { SQLFormatter } from './components/SQLFormatter';
import { URLEnDeCoder } from './components/URLEnDeCoder';
import { XMLPretty } from './components/XMLPretty';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={4} xs={12}>
            <QRCodeGenerator />
          </Col>
          <Col md={4} xs={12}>
            <JSONPretty />
          </Col>
          <Col md={4} xs={12}>
            <MarkdownImageLinkConverter />
          </Col>
          <Col md={4} xs={12}>
            <OPCUANodeIdConverter />
          </Col>
          <Col md={4} xs={12}>
            <SQLFormatter />
          </Col>
          <Col md={4} xs={12}>
            <URLEnDeCoder />
          </Col>
          <Col md={4} xs={12}>
            <Colors />
          </Col>
          <Col md={4} xs={12}>
            <LaTeXURLSanitizer />
          </Col>
          <Col md={4} xs={12}>
            <XMLPretty />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
