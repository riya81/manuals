import PropTypes from "prop-types"
import React, { Component } from 'react';
import * as Science from "./Science/Science"
export default class Sciences extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }
    render()
    {
        return (
            <Science.Science
                numOrtext={this.props.numOrtext}
            />
        );
    }
}