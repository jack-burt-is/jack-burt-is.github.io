$('#submit').click(function() {
    $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: {
            email: 'email@example.com',
            message: 'hello world!'
        },
        success: function(msg) {
            alert('Email Sent');
        }               
    });
});