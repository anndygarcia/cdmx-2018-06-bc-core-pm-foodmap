window.onload = timeout;
function timeout() {
    window.setTimeout("redirect()", 3500)
}

function redirect() {
    window.location = "index.html"
    return
}