import React, { Component } from 'react';
import PropTypes from "prop-types"
export default class ModalSimple extends React.Component
{
    render()
    {
        return (
            <React.Fragment>

                <div className={`modal-simple`}>
                    <div className="modal-inner">
                        <div className="modal-header">
                        </div>
                        <div className="modal-introduction">
                            <h2 className="modal-h2">{this.props.h2}</h2>
                            <p>{this.props.text}</p>
                            <p>{this.props.text2}</p>
                        </div>
                        <button className="modal-close-btn blake" onClick={() => { this.props.blake() }}>とじる</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}