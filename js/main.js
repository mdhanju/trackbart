$(document).ready(function() {
	$(".selectStation").focus();
    var optionsAsString = "";
    for (var station in stations) {
        var res = stations[station];
        optionsAsString += "<option value='" + res.abbr + "'>" + res.name + "</option>";
    }
    $('select[name="stations"]').append(optionsAsString);
});
