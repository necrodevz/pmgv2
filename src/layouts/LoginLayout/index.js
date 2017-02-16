import React, { Component } from 'react'
import {Grid, Row, Col } from 'react-bootstrap'

export default class LoginLayout extends Component {
    
    styles = {
        borderStyle: "groove",
        borderWeight: "2px",
        borderColor: "black",
        borderRadius: "5px",
        padding: "20px 10px 5px 5px",
        marginTop: "50px"
    }
    
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={1} md={4}></Col>
                    <Col xs={4} md={4} style={this.styles}>
                        <div>
                            {this.props.children}
                        </div>
                    </Col>
                    <Col xs={1} md={4}></Col>
                </Row>
            </Grid>
        )
    }
}