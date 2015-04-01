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

		// Clean and group the text
		var cleaned = this._clean(text);
		var groups = this._split_and_group(cleaned);

		// Go through the units in descending order and look to see what we have
		for(var i = 0; i < this.units_desc.length; i++){
			
			// Grab the key
			var key = this.units_desc[i];

			// Check to see if this key (thousand, million, etc) is in the group from the text
			var group = groups[key];
			if(group){

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
		return value;
	}

	string_to_number.prototype._hundred = function(list){
		var value = 0;

		// Check to see if hundred is here
		var hundred_index = list.indexOf('hundred');
		if(hundred_index > 0){
			value += 100 * this.numbers[list[hundred_index-1]];
		}

		// Don't start from the beginning of the list if we already had a hundred spot in there
		var start = ((hundred_index < 0) ? 0 : hundred_index + 1);

		// Go over the rest of the numbers and add them to the value
		for(var i = start; i < list.length; i++){
			value += this.numbers[list[i]];
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

	string_to_number.prototype._split_and_group = function(text){
		var groups = {};
		var texts = text.split(' ');

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