// BEGIN
export default getSameParity = (arr) => {
   const item = Math.abs(arr[0]) % 2
   let newArr = []
    for (const i of arr) {
        if (Math.abs(i) % 2 === item) {
            newArr.push(i);
        }
    }
    return newArr;
}
    
// END