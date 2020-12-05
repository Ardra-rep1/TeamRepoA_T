function viewMore(viewMoreId)
{
  var btnText = document.getElementsByTagName(viewMoreId);

  document.getElementById(viewMoreId).style.display = "block";
  document.getElementById(viewMoreId+'btnText').innerHTML = "Read Less";
}
