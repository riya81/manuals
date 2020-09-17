import React from 'react'
class processing extends React.Component
{
    constructor()
    {
    }
}
class Java extends React.Component
{
    constructor(pops)
    {
        super(pops);
        this.state = {
            programming: null
        }
    }
    render()
    {
        let text
        if (this.props.progamming.indexOf('console.log') != -1)
        {
            text = this.props.progamming.replace(/console.log/g, 'System.out.println')
        }
        return (
            <div>
                <p>public class Hello {`{public static void main(String[] args) { ${text}}}`}</p>
            </div>
        )
    }
}
class JavaR extends React.Component
{
    constructor(pops)
    {
        super(pops);
        this.state = {
            programming: null
        }
    }
    render()
    {
        let returntext = this.props.progamming;
        if (returntext.indexOf('System.out.println') != -1)
        {
            returntext = returntext.replace(/System.out.println/g, 'console.log')
        }
        if (returntext.indexOf('public') != -1)
        {

            returntext = returntext.replace(/public/g, '')
        }
        if (returntext.indexOf('static') != -1)
        {
            returntext = returntext.replace(/static/g, '')
        }
        if (returntext.indexOf('class') != -1)
        {

            returntext = returntext.replace('class', '')
        }
        if (returntext.indexOf('void' != -1))
        {

            returntext = returntext.replace('void', '')
        }
        if (returntext.indexOf('main' != -1))
        {

            returntext = returntext.replace('main', '')
        }
        if (returntext.indexOf('String' != -1))
        {

            returntext = returntext.replace('String', '')
        }
        if (returntext.indexOf('[]' != -1))
        {

            returntext = returntext.replace('[]', '')
        }
        if (returntext.indexOf('args' != -1))
        {

            returntext = returntext.replace('args', '')
        }
        for (let i = 0; i < 4; i++)
        {
            returntext = returntext.slice(0, -1)
        }
        for (let i = 0; i < 2; i++)
        {
            if (returntext.indexOf('{' != -1))
            {

                returntext = returntext.replace('{', '')
            }
        }
        if (returntext.indexOf(')' != -1))
        {

            returntext = returntext.replace(')', '%java-Replacement%')
        }
        if (returntext.indexOf('%java-Replacement%' != -1))
        {

            returntext = returntext.slice(returntext.indexOf('%java-Replacement%') + 18, returntext.length)
        }
        return (
            <div>
                <p>{returntext}</p>
            </div>
        )
    }
}
class Ruby extends React.Component
{
    constructor(pops)
    {
        super(pops);
        this.state = {
            programming: null
        }
    }
    render()
    {
        if (this.props.progamming.indexOf('console.log') != -1)
        {

            console.log(this.props.progamming.replace(/console.log/g, 'puts'))
        }

        return (
            <div>
                <p>{this.props.progamming.replace(/console.log/g, 'puts')}</p>
            </div>
        )
    }
}
class Python extends React.Component
{
    constructor(pops)
    {
        super(pops);
        this.state = {
            programming: null
        }
    }
    render()
    {
        if (this.props.progamming.indexOf('console.log') != -1)
        {

            console.log(this.props.progamming.replace(/console.log/g, 'print'))
        }

        return (
            <div>
                <p>{this.props.progamming.replace(/console.log/g, 'print')}</p>
            </div>
        )
    }
}
class PythonR extends React.Component
{
    constructor(pops)
    {
        super(pops);
        this.state = {
            programming: null
        }
    }
    render()
    {
        if (this.props.progamming.indexOf('print') != -1)
        {

            console.log(this.props.progamming.replace(/print/g, 'console.log'))
        }

        return (
            <div>
                <p>{this.props.progamming.replace(/print/g, 'console.log')}</p>
            </div>
        )
    }
}
class C extends React.Component
{
    constructor(pops)
    {
        super(pops);
        this.state = {}
    }
    render()
    {
        let returntext = this.pops.progamming;
        returntext = returntext.replace(/\s+/g, '');
        if (returntext.indexOf('console.log') != -1)
        {
            returntext = (returntext.replace(/console/g, 'pirntf'))
        }
        return (
            <div>
                <p>{this.returntext}</p>
            </div>
        )
    }
}
class CR extends React.Component
{
    constructor(pops)
    {
        super(pops);
        this.state = {
            programming: null
        }
    }
    render()
    {
        let returntext = this.props.progamming;
        returntext = returntext.replace(/\s+/g, '');
        let Temporarystorage = returntext;
        let Temporarystorage2 = returntext;
        let Temporarystorage3 = returntext;
        if (returntext.indexOf('printf') != -1)
        {
            returntext = (returntext.replace(/printf/g, 'console.log'))
        }
        if (returntext.indexOf('main') != -1)
        {

            returntext = (returntext.slice(returntext.indexOf('main'), returntext.length))
            returntext = (returntext.replace('main', ''))
        }
        if (returntext.indexOf('(') != -1)
        {

            returntext = (returntext.replace('(', ''))
        }
        if (returntext.indexOf('void') != -1)
        {

            returntext = (returntext.replace(/void/g, ''))
        }
        if (returntext.indexOf(')') != -1)
        {

            returntext = (returntext.replace(')', ''))
        }
        if (returntext.indexOf('{') != -1)
        {

            returntext = (returntext.replace('{', ''))
        }

        if (returntext.indexOf('int') != -1)
        {

            returntext = (returntext.replace(/int/g, 'let '))
        }
        if (returntext.indexOf('char') != -1)
        {

            returntext = (returntext.replace(/char/g, 'let '))
        }
        if (returntext.indexOf('double') != -1)
        {

            returntext = (returntext.replace(/double/g, 'let '))
        }
        if (returntext.indexOf('srand((unsigned)time(0UL));') != -1)
        {

            returntext = (returntext.replace('srand((unsigned)time(0UL));', ''))
        }
        if (returntext.indexOf('srand((unsignedlet )time(NULL));') != -1)
        {
            console.log(returntext)
            returntext = (returntext.replace('srand((unsignedlet )time(NULL));', ''))
        }
        if (returntext.indexOf('scanf') != -1)
        {
            Temporarystorage = returntext.slice(0, returntext.indexOf('scanf'))
            Temporarystorage2 = returntext.slice(returntext.indexOf('scanf'), -1)
            Temporarystorage2 = Temporarystorage2.replace(/scanf/g, '%c-scanf%')
            Temporarystorage2 = Temporarystorage2.replace('%c-scanf%', 'prompt')
            Temporarystorage2 = Temporarystorage2.replace('"', '')
            Temporarystorage2 = Temporarystorage2.replace('"', '')
            Temporarystorage3 = Temporarystorage2.slice(Temporarystorage2.indexOf(')'), -1)
            Temporarystorage2 = Temporarystorage2.slice(0, 7) + Temporarystorage3
            returntext = Temporarystorage + Temporarystorage2 + ";}"
            for (let i = 0; i < returntext.length; i++)
            {
                if (returntext.indexOf('%c-scanf%') != -1)
                {
                    Temporarystorage = returntext.slice(0, returntext.indexOf('%c-scanf%'))
                    Temporarystorage2 = returntext.slice(returntext.indexOf('%c-scanf%'), -1)
                    console.log(Temporarystorage2)
                    Temporarystorage2 = Temporarystorage2.replace('"', '')
                    Temporarystorage2 = Temporarystorage2.replace('"', '')
                    Temporarystorage3 = Temporarystorage2.slice(Temporarystorage2.indexOf(')'), -1)
                    Temporarystorage2 = Temporarystorage2.slice(0, 9) + Temporarystorage3
                    Temporarystorage2 = Temporarystorage2.replace('%c-scanf%', 'prompt(')
                    returntext = Temporarystorage + Temporarystorage2 + ";}"
                }
            }
        }
        if (returntext.indexOf('rand') != -1)
        {
            returntext = returntext.replace(/rand/g, '%c-rand%')
            Temporarystorage = returntext.slice(returntext.indexOf('%c-rand%'), -1)
            returntext = returntext.slice(0, returntext.indexOf('%c-rand%'))
            Temporarystorage = Temporarystorage.replace(';', ');')
            Temporarystorage = Temporarystorage.replace('%c-rand%()%', 'Math.floor(Math.random() * ')
            returntext = returntext + Temporarystorage + '}'
            for (let i = 0; i < returntext.length; i++)
            {
                if (returntext.indexOf('%c-rand%') != -1)
                {
                    Temporarystorage = returntext.slice(returntext.indexOf('%c-rand%'), -1)
                    returntext = returntext.slice(0, returntext.indexOf('%c-rand%'))
                    Temporarystorage = Temporarystorage.replace(';', ');')
                    Temporarystorage = Temporarystorage.replace('%c-rand%()%', 'Math.floor(Math.random() * ')
                    returntext = returntext + Temporarystorage + '}'
                }
            }
        }
        if (returntext.indexOf('const') != -1)
        {
            returntext = returntext.replace(/const/g, '%c-const%')
            for (let i = 0; i < returntext.length; i++)
            {
                if (returntext.indexOf('%c-const%') != -1)
                {
                    if (returntext.indexOf('let') != -1)
                    {
                        Temporarystorage = returntext.slice(returntext.indexOf('%c-const%') - 1)
                        returntext = returntext.slice(0, returntext.indexOf('%c-const%'))
                        Temporarystorage = Temporarystorage.replace('let', '')
                        Temporarystorage = Temporarystorage.replace('%c-const%', 'const ')
                        returntext += Temporarystorage
                    }
                }
            }
        }
        for (let i = 0; i < returntext.length; i++)
        {
            if (returntext.indexOf(']={') != -1)
            {
                Temporarystorage = (returntext.slice(returntext.indexOf(']={'), -1)) + `}`
                Temporarystorage2 = returntext.slice(returntext.indexOf(']={') - 6, returntext.indexOf(']={'))
                returntext = (returntext.slice(0, returntext.indexOf(']={') - 6))
                Temporarystorage2 = Temporarystorage2.slice(0, Temporarystorage2.indexOf('['))
                Temporarystorage = Temporarystorage.replace(']', '')
                Temporarystorage = Temporarystorage.replace('{', '[')
                Temporarystorage = Temporarystorage.replace('}', ']')
                returntext = returntext + Temporarystorage2 + Temporarystorage
            }
        }
        if (returntext.indexOf('enum') != -1)
        {
            returntext = returntext.replace(/enum/g, 'const ');
        }
        if (returntext.indexOf('elseif') != -1)
        {
            returntext = returntext.replace(/elseif/g, 'else if');
        }
        if (returntext.indexOf('pow') != -1)
        {
            returntext = returntext.replace(/pow/g, '%c-pow%');
            for (let i = 0; i < returntext.length; i++)
            {
                if (returntext.indexOf('%c-pow%') != -1)
                {
                    returntext = returntext.replace('%c-pow%', 'Math.pow')
                }
            }
        }
        if (returntext.indexOf('typedefstruct{') != -1)
        {
            Temporarystorage = returntext.slice(returntext.indexOf('typedefstruct{'), -1)
            Temporarystorage = Temporarystorage.replace('typedefstruct{', '%c-typedefstruct%')
            returntext = returntext.slice(0, returntext.indexOf('typedefstruct{'))
            Temporarystorage2 = Temporarystorage.slice(0, Temporarystorage.indexOf('}'))
            Temporarystorage = Temporarystorage.slice(Temporarystorage.indexOf('}'), -1)
            Temporarystorage3 = Temporarystorage.slice(';', -1) + '0;}'
            Temporarystorage = Temporarystorage.slice(0, Temporarystorage.indexOf(';'))
            Temporarystorage = Temporarystorage.replace('}', '')
            Temporarystorage2 = Temporarystorage2.replace(/let/g, '')
            Temporarystorage2 = Temporarystorage2.replace(/;/g, ': null,')
            Temporarystorage3 = Temporarystorage3.replace(Temporarystorage + ';', '')
            Temporarystorage2 = Temporarystorage2.replace('%c-typedefstruct%', 'let ' + Temporarystorage + '={')
            returntext = returntext + Temporarystorage2 + Temporarystorage3
            returntext = returntext.replace(',}', '}')
            for (let i = 0; i < returntext.length; i++)
            {
                if (returntext.indexOf('typedefstruct{') != -1)
                {

                }
            }
        }
        returntext = returntext.slice(0, -9)
        returntext = returntext.replace(/;+/g, ';')
        returntext = returntext.replace(/\[\]/g, '')
        returntext = returntext.replace(/return0/g, 'return 0')
        return (
            <div>
                <p>{returntext}</p>
            </div>
        )
    }
}
class CtoJava extends React.Component
{
    render()
    {
        let returntext = this.props.progamming;
        if (returntext.indexOf('main') != -1)
        {

            returntext = (returntext.slice(returntext.indexOf('main'), returntext.length))
            returntext = (returntext.replace('main', ''))
        }
        if (returntext.indexOf('(') != -1)
        {

            returntext = (returntext.replace('(', ''))
        }
        if (returntext.indexOf('void') != -1)
        {

            returntext = (returntext.replace(/void/g, ''))
        }
        if (returntext.indexOf(')') != -1)
        {

            returntext = (returntext.replace(')', ''))
        }
        if (returntext.indexOf('{') != -1)
        {

            returntext = (returntext.replace('{', ''))
        }
        returntext = returntext.replace(/printf/g, 'System.out.println')
        returntext = returntext.slice(0, -9)
        returntext = `public class Hello {public static void main(String[] args) { ${returntext} }}`
        return (
            <div>
                {returntext}
            </div>
        )
    }
}
class JapantoJavascript extends React.Component
{
    render()
    {
        let returntext = this.props.progamming
        returntext = returntext.replace(/出力/g, 'console.log')
        returntext = returntext.replace(/クラス/g, 'class')
        returntext = returntext.replace(/継承/g, 'extends')
        return (
            <div>
                {returntext}
            </div>
        )
    }
}
export
{
    processing,
    Java,
    JavaR,
    Ruby,
    Python,
    PythonR,
    C,
    CR,
    JapantoJavascript
}