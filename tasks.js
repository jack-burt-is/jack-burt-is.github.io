$(document).ready(function () {

    $('.card-container').on('click', function () {
        $('.card').toggleClass('flipped');
    });

    var tasks = [
        "Down your drink",
        "Do a shot",
        "Get a stranger to buy you a drink",
        "Swap an item of clothing with someone",
        "Match someone drinking",
        "Choose someone to drink",
        "Steal something from the current venue",
        ""
    ]

    var taskNumber = Math.floor(Math.random() * ((tasks.length) - 0));
    console.log(taskNumber);

    $('#task-content').text(tasks[taskNumber]);
});

