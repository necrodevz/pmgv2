import React from 'react'
import { FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'

const Input = (props) => {
    return (
        <FormGroup controlId={props.name}>
            <ControlLabel> {props.label} </ControlLabel>
            <FormControl {...props} value={props.input.value} onChange={props.input.onChange} />
            <FormControl.Feedback />
            <HelpBlock>{props.helptext}</HelpBlock>
        </FormGroup>
    )
}

export default Input