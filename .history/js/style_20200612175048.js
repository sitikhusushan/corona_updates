function click1122() {
  var h = document.getElementById("hov"); 
  h.innerHTML = "<i class=fas fa-heart></i>";
}

$(function () {
    var hide = true;

    $('#Table1 td').each(function () {
        var td_content = $(this).text();

        if (td_content != "") {
            hide = false;
        }
    })

    if (hide) {
        $('#myTable1div').hide();
    }
})