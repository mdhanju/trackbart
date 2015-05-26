$(document).ready(function() {
    $('#submitComment, #emailComment, #textComment').attr('disabled', 'disabled');
    $("#nameComment").keypress(function() {
        if ($(this).val().length > 2) {
            $('#emailComment').removeAttr('disabled');
        }
    });
    $("#emailComment").keypress(function() {
        if ($(this).val().length > 2) {
            $('#textComment').removeAttr('disabled');
        }
    });
    $("#textComment").keypress(function() {
        if ($(this).val().length > 10) {
            $('#submitComment').removeAttr('disabled');
        }
    });
});
