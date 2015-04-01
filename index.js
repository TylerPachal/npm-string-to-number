var string_to_number = (function() {

	function string_to_number(){

		// The order of this is important!  Don't skip any units.
		this.units_asc = ['', 'thousand', 'million', 'billion', 'trillion'];
		this.units_desc = this.units_asc.slice().reverse();

		this.numbers = {
			'zero': 0,
			'one': 1,
			'two': 2,
			'three': 3,
			'four': 4,
			'five': 5,
			'six': 6,
			'seven': 7,
			'eight': 8,
			'nine': 9,
			'ten': 10,
			'eleven': 11,
			'twelve': 12,
			'thirteen': 13,
			'fourteen': 14,
			'fifteen': 15,
			'sixteen': 16,
			'seventeen': 17,
			'eighteen': 18,
			'nineteen': 19,
			'twenty': 20,
			'thirty': 30,
			'forty': 40,
			'fourty': 40,
			'fifty': 50,
			'sixty': 60,
			'seventy': 70,
			'eighty': 80,
			'ninety': 90
		}
	}

	string_to_number.prototype.convert = function(text){
		var value = 0;
		var negation = 1;

		// Clean the text
		var cleaned_string = this._clean(text);

		// Split into list
		var cleaned_list = cleaned_string.split(' ');

		// Check for a negative number
		if(cleaned_list.indexOf('minus') === 0 || cleaned_list.indexOf('negative') === 0){
			negation = -1;
			cleaned_list = cleaned_list.slice(1, cleaned_list.length);
		}

		// Group into units
		var groups = this._group(cleaned_list);

		// Go through the units in descending order and look to see what we have
		for(var i = 0; i < this.units_desc.length; i++){
			
			// Grab the key
			var key = this.units_desc[i];

			// Check to see if this key (thousand, million, etc) is in the group from the text
			var group = groups[key];
			if(group){

				// This handles the case where someone says 'one thousand million', which is invalid
				if(group.length < 1){
					return undefined;
				}

				// Grab the hundred
				var hundred = this._hundred(group);
				if(hundred === undefined){
					return undefined;
				}

				// Calculate the number of zeroes
				var num_zeroes = this.units_asc.indexOf(key) * 3;

				// Add to the value
				value  += hundred * Math.pow(10, num_zeroes);
			}
		}
		return value * negation;
	}

	string_to_number.prototype._hundred = function(list){
		var value = 0;

		// There should only be one value for each of these spots
		var hundred = false;
		var tens = false;
		var ones = false;

		// Check to see if hundred is here
		var hundred_index = list.indexOf('hundred');

		// If the hundred is the first spot of the array this is an error (we need somethign like two hundred, not just hundred)
		if(hundred_index === 0){
			value += undefined;
		}

		if(hundred_index > 0){
			value += 100 * this.numbers[list[hundred_index-1]];
		}

		// Don't start from the beginning of the list if we already had a hundred spot in there
		var start = ((hundred_index < 0) ? 0 : hundred_index + 1);

		// Go over the rest of the numbers and add them to the value
		for(var i = start; i < list.length; i++){
			var val = this.numbers[list[i]];
			
			// There should only be one value for the ones spot (i.e. three five is an invalid number)
			if(val >= 0 && val <= 9){
				if(ones === true){
					val = undefined;
				}
				else{
					ones = true;
				}
			}

			// There should only be one value for the ones spot (i.e. seventeen three is an invalid number)
			else if(val >= 10 && val <= 19){
				if(ones === true || tens === true){
					val = undefined;
				}
				else{
					ones = true;
					tens = true;
				}
			}

			// No one should be able to say something like seven forty or fifty thirty
			else if(val >= 20){
				if(ones === true || tens === true){
					val = undefined;
				}
				else{
					tens = true;
				}
			}
			value += val;
		}

		return (isNaN(value) ? undefined : value);
	}

	string_to_number.prototype._clean = function(text){
		// Remove dashes 
		// Remove 'and's 
		// Make sure there is a single space between each word
		// Convert to lower case
		return text.replace(/-/g, ' ').replace(/\sand\s/g, ' ').replace(/\s\s+/g, ' ').toLowerCase();
	}

	string_to_number.prototype._group = function(texts){
		var groups = {};

		// Group words into their units (millions, thousands, etc)
		// Start from the beginning, and look for a unit
		var highest_index = this.units_asc.length - 1;
		var section = [];
		for(var i = 0; i < texts.length; i++){

			// Check to see if it is a unit
			var unit_index = this.units_asc.indexOf(texts[i]);
			if(unit_index >= 0){
				highest_index = unit_index;
				groups[this.units_asc[unit_index]] = section;
				section = [];
			}

			// Special case for the ones unit
			else if (i === texts.length - 1){
				section.push(texts[i]);
				groups[''] = section;
				section = [];
			}

			// Just a number
			else{
				section.push(texts[i]);
			}
		}
		return groups;
	}

	return string_to_number;
})();
module.exports = string_to_number;