// BEGIN
export const reverse = (names) => {
    let left = 0;
    let right = names.length - 1;
    
    while (left < right) {
    // Меняем элементы местами
        const temp = names[left];
        names[left] = names[right];
        names[right] = temp;

    // Сдвигаем указатели
        left++;
        right--;
    }

}
// END