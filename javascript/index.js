function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// validation form

$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();
        var firstName = $('#first').val();

        if (firstName === "") {
            document.getElementById("first").style.backgroundColor = "bisque";
        }
        var lastName = $('#last').val();

        if (lastName === "") {
            document.getElementById("last").style.backgroundColor = "bisque";
        }
        var email = $('#email').val();

        if (email === "") {
            document.getElementById("email").style.backgroundColor = "bisque";
        };

        var address = $('#address').val();
        if (address === "") {            
            document.getElementById("address").style.backgroundColor = "bisque";
        };

        var city = $('#city').val();
        if (city === "") {
            document.getElementById("city").style.backgroundColor = "bisque";
        };

        var zip = $('#zip').val();
        if (zip === "") {
            document.getElementById("zip").style.backgroundColor = "bisque";
        } 
        if (zip > 99999) {
            document.getElementById("zip").style.backgroundColor = "bisque";
        };

        var phonenumber = $('#phonenumber').val();
        if (phonenumber === "") {
            document.getElementById("phonenumber").style.backgroundColor = "bisque";
        };
             
        // if ($("#termss").prop('checked', false)) {            
        //     document.getElementById("termss").style.backgroundColor = "bisque";
        // };
    });

});
