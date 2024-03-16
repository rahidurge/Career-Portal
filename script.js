
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
function logout(){
    let a= alert("Logout successfully");
    document.getElementsByClassName("logout").innerhtml=a;
}
function addRow(sectionId) {
    var section = document.getElementById(sectionId);
    var template = section.querySelector('.row-template');
    var row = template.cloneNode(true);
    row.classList.remove('row-template');
    section.insertBefore(row, template.nextSibling);
  }
  
  function removeRow(row) {
    row.parentNode.removeChild(row);
  }