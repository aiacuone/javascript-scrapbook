const boolean = false
console.log(boolean || 'fallback') // Output: "fallback" (false is falsy)
console.log(boolean ?? 'fallback') // Output: false (false is not null or undefined)

const zero = 0
console.log(zero || 'fallback') // Output: "fallback" (0 is falsy)
console.log(zero ?? 'fallback') // Output: 0 (0 is not null or undefined)

const emptyString = ''
console.log(emptyString || 'fallback') // Output: "fallback" (empty string is falsy)
console.log(emptyString ?? 'fallback') // Output: "" (empty string is not null or undefined)
