import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import 'react-widgets/dist/css/react-widgets.css';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

import { Colors } from './components/Colors';
import { JSONPretty } from './components/JSONPretty';
import { LaTeXURLSanitizer } from './components/LaTeXURLSanitizer';
import { MarkdownImageLinkConverter } from './components/MarkdownImageLinkConverter';
import { OPCUANodeIdConverter } from './components/OPCUANodeIdConverter';
import { QRCodeGenerator } from './components/QRCodeGenerator';
import { SQLFormatter } from './components/SQLFormatter';
import { URLEnDeCoder } from './components/URLEnDeCoder';
import { XMLPretty } from './components/XMLPretty';
import { Box } from './common/Box';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={4} xs={12}>
            <Box>
              <QRCodeGenerator />
            </Box>
          </Col>
          <Col md={4} xs={12}>
            <Box>
              <JSONPretty />
            </Box>
          </Col>
          <Col md={4} xs={12}>
            <Box>
              <MarkdownImageLinkConverter />
            </Box>
          </Col>
          <Col md={4} xs={12}>
            <Box>
              <OPCUANodeIdConverter />
            </Box>
          </Col>
          <Col md={4} xs={12}>
            <Box>
              <SQLFormatter />
            </Box>
          </Col>
          <Col md={4} xs={12}>
            <Box>
              <URLEnDeCoder />
            </Box>
          </Col>
          <Col md={4} xs={12}>
            <Box>
              <Colors />
            </Box>
          </Col>
          <Col md={4} xs={12}>
            <Box>
              <LaTeXURLSanitizer />
            </Box>
          </Col>
          <Col md={4} xs={12}>
            <Box>
              <XMLPretty />
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
