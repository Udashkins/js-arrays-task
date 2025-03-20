const _ = require("lodash"); 

// BEGIN
export default getSameCount = (arr1, arr2) => {
    const first = _.uniq(arr1);
    const second = _.uniq(arr2);
    let count = 0;
    for (const i of first) {
        for (const j of second) {
            i === j ? count += 1 : count;
        }
    }
    return count;
}
// END