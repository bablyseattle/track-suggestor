$(document).ready(function(){
  $("#quiz").submit(function(event){
    var nameInput = $("input#name").val();
    var ifDesign  = $("input:radio[name=ques1]:checked").val();
    var ifAndroid = $("input:radio[name=ques2]:checked").val();
    var ifWebApp = $("input:radio[name=ques3]:checked").val();
    var ifWordpress  = $("input:radio[name=ques4]:checked").val();
    var ifWindowsApp  = $("input:radio[name=ques5]:checked").val();
    $("#nameInput").text(nameInput);
    $("#quiz").slideToggle();
    if(ifDesign === "yes"){
      $('.result').hide();
      $('.must').show();
      $('#css').show();
      }
    else if(ifAndroid === "yes"){
      $('.result').hide();
      $('.must').show();
      $('#java').show();
      }
    else if(ifWebApp === "yes"){
      $('.result').hide();
      $('.must').show();
      $('#ruby').show();
      }
    else{
      $('.result').hide();
      $('.must').show();
      $('#dotnet').show();
    }
    (event).preventDefault();
  });
  $("#btnback").click(function(event){
    $("#quiz").slideToggle();
    $('.result').hide();
    (event).preventDefault();
  });
});
