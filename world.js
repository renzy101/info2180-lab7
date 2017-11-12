/*global $*/

$(document).ready(function(){
  $('#lookup').click(function(){
    $.ajax({
      type: 'GET',
      url: 'world.php?' ,
      data:  {country: $('#country').val()},
      success :function(response){
        $('#result').html(response);
        
      }
    });
  });
   /*$('#lookup').click(function(){   
        if ($('.all').is(':checked',true)){
        $.ajax({
            type: 'GET',
            url: 'world.php?' ,
            data:  {country: $('#checkbox').checked()},
            success :function(response){
            $('#result').html(response);
        }
         });
      }
  });*/
})


