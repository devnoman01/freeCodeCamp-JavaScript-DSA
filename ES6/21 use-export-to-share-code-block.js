// use export to share a code block

export const add = (x, y) => {
    return x + y;
}

// another method
const sub = (x, y) => {
    return x - y;
}
export {sub};


const uppercaseString = (string) => {
    return string.toUpperCase();
}
export {uppercaseString}
  
const lowercaseString = (string) => {
    return string.toLowerCase()
}
export {lowercaseString}