$(document).ready(function() {
    $('.newMessage').click(function() {
        $.ajax({
            url: "http://api.bart.gov/api/bsa.aspx?cmd=bsa&key=QEVM-UYYB-ISYQ-DT35"
        }).done(function(data) {
            var jsonData = xml2json(data, ' ');
            var jsonData1 = jsonData.replace(/[#]/g, '');
            var jsonData2 = $.parseJSON(jsonData1);
            var jsonData3 = jsonData2.root.bsa.description.cdata;
            $('#messageModal').text(jsonData3);
        })
    })
})
