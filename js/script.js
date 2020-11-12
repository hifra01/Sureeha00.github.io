console.log("hello hell");

$("#formSubmit").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    var data = $("form").serializeArray();
    console.log(data);

    if (data[0]["value"] === "" || data[1]["value"] === "" || data[2]["value"] === "") {
        $("#submitFailed").css("display", "flex");
        $("#submitFailed .notification__button__ok").on("click", function () {
            $("form").trigger("reset");
            $("#submitFailed").css("display", "none");
        });
    } else {
        $("#submitSuccess").css("display", "flex");
        $("#submitSuccess .notification__button__ok").on("click", function () {
            $("form").trigger("reset");
            $("#submitSuccess").css("display", "none");
        });
    }
});
