/*global $*/

$(document).ready(function(){
  $('#lookup').click(function(){
    if($("#checkbox")[0].checked){
      $.ajax({
        type: 'GET',
        url: 'world.php?' ,
        data:  {all: 'true'},
        success :function(response){
          $('#result').html(response);
          
        }
      });
    }else{
      $.ajax({
        type: 'GET',
        url: 'world.php?' ,
        data:  {country: $('#country').val()},
        success :function(response){
          $('#result').html(response);
          
        }
      });
    }
  });
  
})


