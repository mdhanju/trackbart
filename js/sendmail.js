$(document).ready(function() {
    $(".sendmail").submit(function(e) {
        $frm = $(this);
        $name = $frm.find('*[name=name]').val();
        $email = $frm.find('*[name=email]').val();
        $comments = $frm.find('*[name=comments]').val();

        var action = $frm.attr('action');
        console.log("action" + action);
        $frm.find('*[name=submit]').attr('disabled', 'disabled').after('');

        $frm.prev(".ajax_message").slideUp(750, function() {
            $ajax_container = $(this);
            $ajax_container.hide();

            $.post(action, {
                name: $name,
                email: $email,
                comments: $comments
            }, function(data) {
                $ajax_container.html(data);
                $ajax_container.slideDown('slow');
                $frm.find('*[name=submit]').attr('disabled', '');
                if (data.match('success') != null) $frm.slideUp('slow');
            });
        });
        e.preventDefault();
    });

});
