import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from '../Layout/Header';
import BuildPCForm from '../Components/BuildPCForm';

export default function BuildPC() {
    return (<div>
        <Header/>
        <Container>
            <Row>
                <Col>
                   <BuildPCForm/>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    </div>);
}