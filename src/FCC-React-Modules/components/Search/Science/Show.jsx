import React, { Component } from 'react';
import PropTypes from "prop-types"
class Show extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }
    render()
    {
        return (
            <React.Fragment>
                <p>{this.props.name}</p>
                <p>{this.props.text}</p>
                <p>{this.props.num}番</p>
                <p>{this.props.Tribe}族{this.props.period}周期</p>
                <p>{this.props.type}</p>
                <p>{this.props.Classification}</p>
                <p>原子量{this.props.Atomicweight}</p>
            </React.Fragment>
        );
    }
}
export default Show;