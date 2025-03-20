// BEGIN
export default (names, prefix) => {
  let newNames = [];
  for (const a of names) {
    newNames.push(`${prefix} ${a}`);
  }
  return newNames;
}

// END