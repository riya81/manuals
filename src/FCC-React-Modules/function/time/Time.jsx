import PropTypes from "prop-types"
import React, {
    Component,
    lazy,
    Suspense
} from 'react';
let result = null;
let time = 1000;
let text = () =>
{
    return null
}
let Function = () =>
{
    return null
}
const timeout = (msec) => new Promise(resolve =>
{
    setTimeout(resolve, msec)
});
const Time_funciton = () =>
{
    if (result !== null)
    {
        { Function() }
        return (
            <div>
                {result()}
            </div>
        )
    }
    throw new Promise(async (resolve) =>
    {
        await timeout(time);
        result = text
        resolve();
    })
};
class Time extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }
    render()
    {
        if (this.props.time != null)
        {
            time = this.props.time;
        }
        if (this.props.text != null)
        {
            text = this.props.text;
        }
        if (this.props.Function != null)
        {
            Function = this.props.Function;
        }
        return (
            <Suspense fallback={<div>{this.props.Loading}</div>}>
                <Time_funciton />
            </Suspense>
        )
    }
}
export default Time;