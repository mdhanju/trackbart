$(function() {

    $('.iconLoc').click(function() {
        console.log("Setting my current Location");
        console.log(navigator.geolocation);


        if (navigator.geolocation) {
            setCurrentLoction();
        }
    })

    $('.selectStationLoc').change(function() {
        var station = $(this).val();
        console.log("Station selected for address = " + station);

        for (var i in allStationData) {
            var key = allStationData[i].abbr;
            if (key == station) {
                var addr = allStationData[i].address;
                var stationName = allStationData[i].name;
                var stationCity = allStationData[i].city;
                var stationState = allStationData[i].state;
                var stationZipcode = allStationData[i].zipcode;

                var stationAddress = stationName + "\n" + addr + "\n" + stationCity + ", " + stationState + "-" + stationZipcode
                var addressMap = addr + " " + stationZipcode;
                setStationAddress(addressMap, stationAddress)
            }
        }
    })
    google.maps.event.addDomListener(window, 'load', initialize);
})

var geocoderCustom;
var mapCustom;

function initialize() {
    geocoderCustom = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(37.789256, -122.401407);
    var mapOptions = {
        zoom: 13,
        center: latlng
    }
    mapCustom = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(mapCustom);
    var montAdd = "Montgomery St" + "\n" + "598 Market Street" + "\n" + "San Francisco, CA-94104"
    var marker = new google.maps.Marker({
        position: latlng,
        title: montAdd
    });

    marker.setMap(mapCustom);
}

function setStationAddress(address, stationAddress) {
    geocoderCustom.geocode({
        'address': address
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(results[0].geometry.location)
            mapCustom.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: mapCustom,
                position: results[0].geometry.location,
                title: stationAddress
            });
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function setCurrentLoction() {
    navigator.geolocation.getCurrentPosition(function(position) {

        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        mapCustom.setCenter(pos);
        var marker = new google.maps.Marker({
            map: mapCustom,
            position: pos,
            title: "My Current Location"
        });
    })
}
