// BEGIN
export const  swap = (text) => {
    if (text.leghth < 2 ) {
        return text;
    }
    
    const first = text[0];
    text[0] = text[text.length - 1];
    text[text.length - 1] = first;
    
    return text;
}

// END