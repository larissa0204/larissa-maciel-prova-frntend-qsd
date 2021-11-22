let form = document.getElementById("form")
let iptName = document.getElementById("name")

form.onsubmit = function(event) {
    event.preventDefault();

 iptName.onblur = function() {
    console.log("desfocou")
}

let iptEmail = document.getElementById("email");

iptEmail.onblur = function() {
    var regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let msgEmail = document.querySelector(".msg-email");
    let msgEmailOk = document.querySelector(".msg-email.ok");

    if (regexMail.test(iptEmail.value)) {
        msgEmail.style.display = "none";
        msgEmailOk.style.display = "block";
    } else {
        msgEmailOk.style.display = "none";
        msgEmail.style.display = "block";
    }
}
