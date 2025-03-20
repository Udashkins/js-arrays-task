// BEGIN
export const calculateSum = (coll) => {
    if (coll.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < coll.length; i++) {
            if (coll[i] % 3 === 0) {
                sum += coll[i];
            }    
        }
        return sum;
    }
}
// END