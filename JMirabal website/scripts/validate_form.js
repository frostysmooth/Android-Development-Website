function validateForm(frmname) {
        var w = document.forms[frmname]["name"].value;
        var x = document.forms[frmname]["email"].value;
        var y = document.forms[frmname]["subject"].value;
        var z = document.forms[frmname]["feedback"].value;

        if (w == null || w == "") {
            alert("Your full name must be filled out");
            return false;
        } else if (x == null || x == "") {
            alert("Please enter an email");
            return false;
        } else if (y == null || y == "") {
            alert("Please enter the subject of your email");
            return false;
        } else if (z == null || z == "") {
            alert("Please enter a message");
            return false;
        }
    }