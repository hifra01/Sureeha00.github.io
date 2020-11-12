console.log("hello hell");

$("#formSubmit").on("click", function (event) {
    event.preventDefault();

    var image;
    var text;

    var data = $("form").serializeArray();
    console.log(data);

    if (data[0]["value"] === "" || data[1]["value"] === "" || data[2]["value"] === "") {
        image = "./images/cross.svg";
        text = "Harap isi semua kolom!"
    } else {
        image = "./images/check.svg";
        text = "Terima kasih telah menghubungi kami. Jawaban akan kami kirimkan ke e-mail Anda secepat mungkin."
    }

    var notificationHTML = `
    <div class="notification">
        <div class="notification__box">
            <div class="notification__image">
                <img src=${image}>
            </div>
            <p class="notification__text">${text}</p>
            <button class="notification__button">OK</button>
        </div>
    </div>
    `;

    $("#notificationContainer").html(notificationHTML);
    $(".notification__box .notification__button").on("click", function () {
        $("form").trigger("reset");
        $("#notificationContainer").empty();
    });

    event.stopPropagation();
});
