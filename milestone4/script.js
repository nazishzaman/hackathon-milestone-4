var form = document.getElementById("resumeform");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    var resumeHTMl = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable= \"true\"".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable= \"true\"").concat(email, "</span></p>\n    <p><b>phone:</b><span contenteditable= \"true\"").concat(phone, "</span></p>\n\n    \n    <h3>Education</h3>\n    <p contentedittable= \"true\">").concat(education, "</p>\n\n     <h3>Experiance</h3>\n    <p contenteditable= \"true\">").concat(experiance, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable= \"true\">").concat(skills, "</p>\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTMl;
    }
    else {
        console.log("The resume display element is missing");
    }
});
