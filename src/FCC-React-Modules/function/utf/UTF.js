const conversion = (text) => {
    text = text.replace(/\s+/g, '');
    for (let i = 0; i < 2; i++) {
        text = text.replace(/あ/g, '%A%0')
        text = text.replace(/い/g, '%A%1')
        text = text.replace(/う/g, '%A%2')
        text = text.replace(/え/g, '%A%3')
        text = text.replace(/お/g, '%A%4')
        text = text.replace(/ア/g, '%A%5')
        text = text.replace(/イ/g, '%A%6')
        text = text.replace(/ウ/g, '%A%7')
        text = text.replace(/エ/g, '%A%8')
        text = text.replace(/オ/g, '%A%9')
        text = text.replace(/82A0/g, 'あ')
        text = text.replace(/82A2/g, 'い')
        text = text.replace(/82A4/g, 'う')
        text = text.replace(/82A6/g, 'え')
        text = text.replace(/82A8/g, 'お')
        text = text.replace(/8341/g, 'ア')
        text = text.replace(/8343/g, 'イ')
        text = text.replace(/8345/g, 'ウ')
        text = text.replace(/8347/g, 'エ')
        text = text.replace(/8349/g, 'オ')
    }
    text = text.replace(/A0/g, 'あ')
    text = text.replace(/A1/g, 'い')
    text = text.replace(/A2/g, 'う')
    text = text.replace(/A3/g, 'え')
    text = text.replace(/A4/g, 'お')
    text = text.replace(/A5/g, 'ア')
    text = text.replace(/A6/g, 'イ')
    text = text.replace(/A7/g, 'ウ')
    text = text.replace(/A8/g, 'エ')
    text = text.replace(/A9/g, 'オ')
    for (let i = 0; i < 2; i++) {
        text = text.replace(/か/g, '%B%0')
        text = text.replace(/き/g, '%B%1')
        text = text.replace(/く/g, '%B%2')
        text = text.replace(/け/g, '%B%3')
        text = text.replace(/こ/g, '%B%4')
        text = text.replace(/カ/g, '%B%5')
        text = text.replace(/キ/g, '%B%6')
        text = text.replace(/ク/g, '%B%7')
        text = text.replace(/ケ/g, '%B%8')
        text = text.replace(/コ/g, '%B%9')
        text = text.replace(/82A9/g, 'か')
        text = text.replace(/82AB/g, 'き')
        text = text.replace(/82AD/g, 'く')
        text = text.replace(/82AF/g, 'け')
        text = text.replace(/82B1/g, 'こ')
        text = text.replace(/834A/g, 'カ')
        text = text.replace(/834C/g, 'キ')
        text = text.replace(/834E/g, 'ク')
        text = text.replace(/8350/g, 'ケ')
        text = text.replace(/8352/g, 'コ')
    }
    text = text.replace(/B0/g, 'か')
    text = text.replace(/B1/g, 'き')
    text = text.replace(/B2/g, 'く')
    text = text.replace(/B3/g, 'け')
    text = text.replace(/B4/g, 'こ')
    text = text.replace(/B5/g, 'カ')
    text = text.replace(/B6/g, 'キ')
    text = text.replace(/B7/g, 'ク')
    text = text.replace(/B8/g, 'ケ')
    text = text.replace(/B9/g, 'コ')
    text = text.replace(/%/g, '')
    text = text.replace(/\s+/g, '');
    return text
}
const code = (text) => {
    text = conversion(text)
    text = text.replace(/A/g, 'a')
    text = text.replace(/B/g, 'b')
    text = text.replace(/C/g, 'c')
    text = text.replace(/D/g, 'd')
    text = text.replace(/E/g, 'e')
    text = text.replace(/F/g, 'f')
    text = text.replace(/a/g, '6-1')
    text = text.replace(/b/g, '6-2')
    text = text.replace(/c/g, '6-3')
    text = text.replace(/d/g, '6-4')
    text = text.replace(/e/g, '6-5')
    text = text.replace(/f/g, '6-6')
    return text
}
const conversioncode = (text) => {
    text = text.replace(/6-1/g, 'a');
    text = text.replace(/6-2/g, 'b');
    text = text.replace(/6-3/g, 'c');
    text = text.replace(/6-4/g, 'd');
    text = text.replace(/6-5/g, 'e');
    text = text.replace(/6-6/g, 'f');
    text = text.replace(/a/g, 'A');
    text = text.replace(/b/g, 'B');
    text = text.replace(/c/g, 'C');
    text = text.replace(/d/g, 'D');
    text = text.replace(/e/g, 'E');
    text = text.replace(/f/g, 'F');
    text = conversion(text)
    return text
}
export {
    conversion,
    code,
    conversioncode
};