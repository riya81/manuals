import React from 'react';
import PropTypes from "prop-types"
import Show from "./Show"
import Hydrogen from "./Data/HydrogenData"
import Helium from "./Data/HeliumData"
import Lithium from "./Data/LithiumData"
let returntext = {
    name: null,
    num: null,
    text: null,
    Classification: null,
    Tribe: null,
    period: null,
    Atomicweight: null,
    type: null
}
const Sciences = (numOrtext) =>
{
    if (numOrtext == 1 || numOrtext == "H")
    {
        returntext = Hydrogen
    } else if (numOrtext == 2 || numOrtext == "He")
    {
        returntext = Helium
    } else if (numOrtext == 3 || numOrtext == "Li")
    {
        returntext = Lithium
    } else if (numOrtext == 4 || numOrtext == "Be")
    {
        returntext.name = "ベリリウム"
        returntext.Classification = "金属"
    } else if (numOrtext == 5 || numOrtext == "B")
    {
        returntext.name = "ホウ素"
        returntext.Classification = "非金属"
    } else if (numOrtext == 6 || numOrtext == "C")
    {
        returntext.name = "炭素"
        returntext.Classification = "非金属"
    } else if (numOrtext == 7 || numOrtext == "N")
    {
        returntext.name = "窒素"
        returntext.Classification = "非金属"
    } else if (numOrtext == 8 || numOrtext == "O")
    {
        returntext.name = "酸素"
        returntext.Classification = "非金属"
    } else if (numOrtext == 9 || numOrtext == "F")
    {
        returntext.name = "フッ素"
        returntext.Classification = "非金属"
    } else if (numOrtext == 10 || numOrtext == "Ne")
    {
        returntext.name = "ネオン"
        returntext.Classification = "非金属"
    } else
    {
        returntext.name = "一致する原子がありませんでした"
    }
    if (returntext.Tribe == 1 || returntext.Tribe == 2 || returntext.Tribe == 12 || returntext.Tribe == 18)
    {
        returntext.type = "典型元素"
    }
    else
    {
        returntext.type = "遷移元素"
    }
}
class Science extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }
    render()
    {
        Sciences(this.props.numOrtext)
        return (
            <Show
                name={returntext.name}
                num={returntext.num}
                text={returntext.text}
                Classification={returntext.Classification}
                Tribe={returntext.Tribe}
                period={returntext.period}
                Atomicweight={returntext.Atomicweight}
                type={returntext.type}
            />
        );
    }
}
export
{
    Science,
    returntext
};