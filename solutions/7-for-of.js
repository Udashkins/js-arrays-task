// BEGIN
export default calculateAverage = (temperatures) => {
    if (temperatures.length === 0) {
        return null;
    } else {
        let sum = 0;
        for (let i = 0; i < temperatures.length; i++) {
            sum += temperatures[i];
        }
        let kol = 0;
        for (let i = 0; i < temperatures.length; i++) {
            kol += 1;
        }

        let ar_mean = sum / kol;

        return ar_mean;
    }   
}
// END