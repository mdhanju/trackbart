$(document).ready(function() {
	$(".selectStation").focus();
	var optionsAsString = "";
	for (var station in stations) {
	    var res = stations[station];
	    optionsAsString += "<option value='" + res.abbr + "'>" + res.name + "</option>";
	}
	$('select[name="stations"]').append(optionsAsString);

	$.ajax({
	    url: "http://api.bart.gov/api/bsa.aspx?cmd=bsa&key=QEVM-UYYB-ISYQ-DT35"
	}).done(function(data) {
	    var jsonData = xml2json(data, ' ');
	    var jsonData1 = jsonData.replace(/[#]/g, '');
	    var jsonData2 = $.parseJSON(jsonData1);
	    var jsonData3 = jsonData2.root.bsa.description.cdata;
	    $('.messageContent').text(jsonData3);
	}).fail(function(){
		$('.messageContent').text('Messages not available');
	})
});