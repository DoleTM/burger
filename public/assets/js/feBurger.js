$(function () {
    $(".eat").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var isDevoured = $(this).data("devoured");

        var devouredUpState = {
            devoured: isDevoured
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredUpState
        }).then(function (err) {
            if (err) throw err;
            console.log("Devoured = ", isDevoured);
            location.reload();
        });
    });

    $(".add-burger").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger-text").val().trim(),
            devoured: $("[]").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function (err) {
            if (err) throw err;
            console.log("Successfully added a burger");
            location.reload();
        });
    });
});