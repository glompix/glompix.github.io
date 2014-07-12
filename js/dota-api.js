var DotaUtil = (function () {
	var apiKey = '2EC61FC3F12CC4274E7A37F91FCD200F';
	var requestUrl = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?account_id=10033904&key=' + apiKey;

	return {
	  getStats: function () {
			$.get(requestUrl, function (data) {
	    	$('#dota-stats').text(JSON.stringify(data));
			});
		}
	};
})();