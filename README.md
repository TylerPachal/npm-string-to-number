# string-to-number
This is an npm module for converting string representations of numbers to numbers.

## Examples

```javascript
// Simple example
string_to_number.convert('seven hundred');
// Output: 700

// Works with negatives
string_to_number.convert('negative six hundred eighty three');
// Output: -683

// Works with dashes
string_to_number.convert('three-hundred-thousand');
// Output: 300000

// Works with ands
string_to_number.convert('three-hundred thousand and forty two');
// Output: 300042

// A bigger number
string_to_number.convert('seven hundred and ninety nine billion five hundred thirty two million six hundred thousand and seven');
// Output: 799532600007

// Invlaid numbers return undefined
string_to_number.convert('ten gazillion');
// Output: undefined

// Only supports whole numbers
string_to_number.convert('ten point two');
// Output: undefined

// Also invalid
string_to_number.convert('half a million');
// Output: undefined
