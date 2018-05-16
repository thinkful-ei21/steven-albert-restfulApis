'use strict';

const api = (function() {
	const BASE_URL = 'https://thinkful-list-api.herokuapp.com/steven-albert';

	const getItems = function(callback) {
		callback('api module works!');
	};

	return {
		getItems,
	}
}());