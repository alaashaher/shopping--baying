function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// validation form

var main = function () {
    $('form').submit(function () {
        var firstName = $('#first').val();

        if (firstName === "") {
            document.getElementById("#first").style.backgroundColor = "blue";
        }
        var lastName = $('#last').val();

        if (lastName === "") {
            document.getElementById("#last").style.backgroundColor = "blue";
        } 
        var email = $('#email').val();

        if (email === "") {
            document.getElementById("#email").style.backgroundColor = "blue";
        };
    });

}

$(document).ready(main);

