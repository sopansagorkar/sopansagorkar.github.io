function sendmsg() {
    var name = document.querySelector("#name").value.trim();
    var email = document.querySelector("#email").value.trim();
    var message = document.querySelector("#message").value.trim();

    const fullmsg = `Hi Sopan, My name is ${name}. Message: ${message}`;

    window.open("https://api.whatsapp.com/send?phone=+919156174248&text=" + fullmsg);
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
}

function trimValue(obj) {
    obj.value = obj.value.trim();
}