
function val(){
    console.log("Entered");
    const password = document.querySelector("#password")
    const confirm_password = document.querySelector("#password-confirm");
    const password_div = document.querySelector("#pass");

    if (password.value != confirm_password.value) {
        console.log("Password mismatch...");
        password.style.borderColor = "red";
        confirm_password.style.borderColor = "red";

        password.value = "";   //.
        confirm_password.value = "";

        const msg = document.createElement("p");
        msg.textContent = "*Passwords must match";
        msg.style.marginTop = "0";
        msg.style.color = "red";
        msg.style.fontSize = "small";

        password_div.appendChild(msg);

        return false;
    }

    console.log("Password Match!");
    return true;

}
