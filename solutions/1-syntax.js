// BEGIN (write your solution here)
export const getWeekends = (text = 'long') => {
    if (text === 'long') {
        return ['saturday' , 'sunday'];
    }
    return ['sat' , 'sun'];
}
// END
