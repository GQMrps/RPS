var nickName;

function checkifNickname(){
	if (welcomeScreen === 0) {
    $("#messages").show();
		$("#inputNickname").hide();
		$("#button2").show();
		$("#inputMessages").show();
		$("#inputMessages").focus();
	}
}

$(function () {
  $("#inputNickname").focus();
  $("#canvas").click(function (){
    $("#inputNickname").focus();
  });
  
  var socket = io();

	
	$('#form1').submit(function(){
		nickName = $('#inputNickname').val();
    if (welcomeScreen === 0) {
      socket.emit("nickname", nickName);
  		console.log("Your nickname is " +nickName);
  		checkifNickname();
  		$('#inputNickname').val('');
    }
    return false;
  });
  
  socket.on('nickname', function(msg){
	 if($("#messages").scrollTop() + $("#messages").height() === $("#messages").prop('scrollHeight')) {
              $('#messages').append($('<li>').text(msg));
              $("#messages").scrollTop($("#messages").prop('scrollHeight'));
    }
    else{
      $("#newMessages").show();
      $('#messages').append($('<li>').text(msg));
    } 
    $("#messages").scroll(function() {
      if($("#messages").scrollTop() + $("#messages").height() === $("#messages").prop('scrollHeight')) {
        $("#newMessages").hide();
      }
    });
  });
  $('#form2').submit(function(){
    if($('#inputMessages').val() !== ""){
    	socket.emit('chat message', $('#inputMessages').val());
      if($('#inputMessages').val() === "disconnect"){
        socket.emit("disconnect", msg);
      }
    	$('#inputMessages').val('');
      return false;	
    }
    return false;
  });

	socket.on('chat message', function(msg){
    if($("#messages").scrollTop() + $("#messages").height() === $("#messages").prop('scrollHeight')) {
      $('#messages').append($('<li>').text(msg));
      $("#messages").scrollTop($("#messages").prop('scrollHeight'));
    }
    else{
      $("#newMessages").show();
      $('#messages').append($('<li>').text(msg));
    }  
    $("#messages").scroll(function() {
      if($("#messages").scrollTop() + $("#messages").height() === $("#messages").prop('scrollHeight')) {
        $("#newMessages").hide();
      }
    });
  });

  socket.on('disconnect', function(msg){
	 if($("#messages").scrollTop() + $("#messages").height() === $("#messages").prop('scrollHeight')) {
    $('#messages').append($('<li>').text(msg));
    $("#messages").scrollTop($("#messages").prop('scrollHeight'));
    }
    else{
      $("#newMessages").show();
      $('#messages').append($('<li>').text(msg));
    }
    $("#messages").scroll(function() {
      if($("#messages").scrollTop() + $("#messages").height() === $("#messages").prop('scrollHeight')) {
        $("#newMessages").hide();
      }
    });       
  });
});




