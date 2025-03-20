// BEGIN
export const get = (cities, index, param = null) => {
    if (index >= 0 && index < cities.length) {
        return cities[index];
    } else {
        return param;
    }
}
// END