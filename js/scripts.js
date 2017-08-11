$(document).ready(function(){
  $("#quiz").submit(function(event){
    var intro = $("input:radio[name=intro]:checked").val();
    if(intro === "yes" || intro === "no2"){
      $("#quiz").hide();
      $("#decide").show();
    }
      else {
        alert("All tracks must complete Intro and JavaScript.");
      }
    (event).preventDefault();
  });
});
