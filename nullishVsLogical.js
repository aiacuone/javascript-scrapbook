const boolean = false
console.log(boolean || 'fallback') // Output: "fallback" (false is falsy)
console.log(boolean ?? 'fallback') // Output: false (false is not null or undefined)

const zero = 0
console.log(zero || 'fallback') // Output: "fallback" (0 is falsy)
console.log(zero ?? 'fallback') // Output: 0 (0 is not null or undefined)

const emptyString = ''
console.log(emptyString || 'fallback') // Output: "fallback" (empty string is falsy)
console.log(emptyString ?? 'fallback') // Output: "" (empty string is not null or undefined)


// The key difference lies in how they treat "falsy" values.

// || (Logical OR): Returns the right-hand operand if the left-hand operand is any falsy value (e.g., false, 0, "", NaN, null, undefined).
// ?? (Nullish Coalescing): Returns the right-hand operand only if the left-hand operand is strictly null or undefined.