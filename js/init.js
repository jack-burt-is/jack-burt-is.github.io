Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
    $(container).find('script').each(function (i, script) {
        var $script = $(script);
        $.ajax({
            url: $script.attr('src'),
            cache: true,
            dataType: 'script',
            success: function () {
                $script.trigger('load');
            }
        });
    });
});