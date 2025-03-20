// BEGIN
export default buildDefinitionList = (arr) => {
    if (arr.length === 0) {
        return '';
    }
    let definitions = [];
    for (let first of arr) {
        definitions = `${definitions}<dt>${first[0]}</dt><dd>${first[1]}</dd>`;
    }  
    return '<dl>' + definitions + '</dl>';
}

// END