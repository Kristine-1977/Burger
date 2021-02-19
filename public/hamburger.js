// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        if ($("#burger").val().trim() == "") {
            alert("Please enter a hamburger name before you add it!!!")
            return;
        }
        var newbHamburger = {
            name: $("#hamburger").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/hamburgers", {
            type: "POST",
            data: newHamburger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".eat_it").on("click", function (event) {
        let id = $(this).data("id");
        // let devoured = true;
        console.log(id)

        let eatenObj = {
            eaten: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenObj
        }).then(
            function () {
                console.log("changed eaten to", eatenObj);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

})