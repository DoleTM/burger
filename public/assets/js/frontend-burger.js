$(".eat-burger").on("click", function (event) {
    event.preventDefault();

    $.ajax("/api/burgers/" + $(this).data("id"), {
        type: "PUT"
    }).then(function (res) {
        location.reload();
    });
});

$(".add-burger").on("click", function (event) {
    event.preventDefault();

    $.ajax("api/burgers", {
        type: "POST",
        data: {
            burger_name: $(".burger-name").val().trim()
        }
    }).then(function (res) {
        location.reload();
    });

});