$(document).ready(function() {
    var getDefLoc = cookie("defaultCity");

    if (getDefLoc == null) {
        getDefLoc = "MONT";
    }

    $(".selectStation").focus();
    var optionsAsString = "";
    for (var station in stations) {
        var res = stations[station];


        if (res.abbr === getDefLoc) {
            optionsAsString += "<option selected='selected' value='" + res.abbr + "'>" + res.name + "</option>";
        } else {
            optionsAsString += "<option value='" + res.abbr + "'>" + res.name + "</option>";
        }
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
    }).fail(function() {
        $('.messageContent').text('Messages not available');
    })

    $('#setDefault').click(function() {
        var defCity = $('.selectStation').val();
        console.log("Default City = " + defCity);
        cookie("defaultCity", defCity, 15);
        sleep(1000);
        $('.iconComplete').css("display", "block");
    })
});

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
        
    }
}