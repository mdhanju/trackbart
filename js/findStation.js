$(function() {
    console.log("    Find station now");
    console.log(allStationData.length);

    var stationString = "";
    for (var i in allStationData) {

        var res = allStationData[i];
        var stationName = res.name;
        var stationAddress1 = res.address + "\n" + res.city + ", " + res.state + "-" + res.zipcode;
        stationString += "<div class='indStationInfo'><h4>" + stationName + "</h4><p>" + stationAddress1 + "</p></h4></div><div class='clearLine'></div>";
    }
    $('.allStationInfo').append(stationString);
})
