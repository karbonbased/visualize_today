// $( document ).ready(function() {

	console.log("working");

$(function(){
    $.ajax({
      url: 'http://localhost:27017/visualize',
      type: 'get',
      dataType: 'jsonp',
      jsonp: 'jsonp', // mongod is expecting the parameter name to be called "jsonp"
      success: function (data) {
        console.log('success', data);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('error', errorThrown);
      }
    });
  });

var sortedTasks = $('#image-box');

for (var i = 0; i < tasks.length; i++) {
	console.log(tasks[i].id);
}

 // $(function() {
 //    $( "#accordion" ).accordion({
 //      collapsible: true
 //    });
 //  });

 // });