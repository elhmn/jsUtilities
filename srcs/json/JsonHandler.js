/* ************************************************************************** */
/*                                                                            */
/*  JsonHandler.js                                                            */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created: Fri Jun 22 15:14:14 2018                        by elhmn        */
/*   Updated: Fri Jun 22 15:14:19 2018                        by bmbarga      */
/*                                                                            */
/* ************************************************************************** */

var JsonHandler = {
	FetchJson: function(url, callback) {
		var obj = new XMLHttpRequest();

		obj.overrideMimeType('application/json');
		obj.open('GET', url, true);
		obj.onreadystatechange = function() {
			if (obj.readyState == 4 && obj.status == '200') {
				callback(obj.responseText);
			}
		};
		obj.send(null);
	},
};
