$(document).ready(function(){
  $("#quiz").submit(function(event){
    var nameInput = $("input#name").val();
    var select1  = $("input:radio[name=ques1]:checked").val();
    var select2 = $("input:radio[name=ques2]:checked").val();
    var select3 = $("input:radio[name=ques3]:checked").val();
    var select4  = $("input:radio[name=ques4]:checked").val();
    var select5  = $("input:radio[name=ques5]:checked").val();
    $("#nameInput").text(nameInput);
    alert(nameInput);
    if(select1 === "front"){
      $('#intro').show();
    }
    (event).preventDefault();
  });
});
