window.addEventListener("scroll", function() {
  var returnTopButton = document.getElementById("return-top-button");
  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 20) 
  {
    returnTopButton.style.display = "block";
  } 
  else
  {
    returnTopButton.style.display = "none";
  }
});

document.getElementById("return-top-button").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
