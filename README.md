# string-to-number
This is an npm module for converting string representations of numbers to numbers.

## Examples

```javascript
var string_to_number = require('string-to-number');
var s2n = new string_to_number();

// Simple example
s2n.convert('seven hundred');
// Output: 700

// Works with negatives
s2n.convert('negative six hundred eighty three');
// Output: -683

// Works with dashes
s2n.convert('three-hundred-thousand');
// Output: 300000

// Works with ands
s2n.convert('three-hundred thousand and forty two');
// Output: 300042

// A bigger number
s2n.convert('seven hundred and ninety nine billion five hundred thirty two million six hundred thousand and seven');
// Output: 799532600007

// Invlaid numbers return undefined
s2n.convert('ten gazillion');
// Output: undefined

// Only supports whole numbers
s2n.convert('ten point two');
// Output: undefined

// Also invalid
s2n.convert('half a million');
// Output: undefined
```

## Download

Install using Node Package Manager (`npm`):

    npm install string-to-number
