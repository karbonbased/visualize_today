$( document ).ready(function() {

	console.log("working");

// function overlay() {
// 	el = document.getElementById("overlay");
// 	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
// }

// $('#signup-form input').blur(function()
// {
//     if( !$(this).val() ) {
//           $(this).parents('p').addClass('warning');
//           // alert("Missing Required Fields")
//     }
// });

// $('')
// $(function(){
//     $.ajax({
//       url: 'http://localhost:27017/visualize',
//       type: 'get',
//       dataType: 'jsonp',
//       jsonp: 'jsonp', // mongod is expecting the parameter name to be called "jsonp"
//       success: function (data) {
//         console.log('success', data);
//       },
//       error: function (XMLHttpRequest, textStatus, errorThrown) {
//         console.log('error', errorThrown);
//       }
//     });
//   });

// $.ajax('/tasks/json')
// 	.done(function(result) {
// 		var $imageArea = $('div.image-area');
// 		var timeArray =[];
// 		var $imageBox = $('<div>');
// 		var $caption = $('<div>');
// 		var $image = $('<img>')
// 		for (var i=0; i < result.length; i++) {
// 			console.log("i'm in the loop")
// 			$imageBox.addClass("image-box");
// 			$imageBox.attr("name", result[i].time);
// 			$imageBox.append($image);
// 			console.log($image)
// 			$image.attr("src", result[i].image)
// 			$caption.addClass("caption");
// 			$caption.html(result[i].name);
// 			$imageBox.append($caption);
// 			$imageBox.appendTo($imageArea);
// 			// console.log(result[i].time);
// 			// timeArray.push(result[i].time);
// 			// console.log(timeArray);
// 			// timeArray.sort()
// 			// console.log(timeArray);
// 		}
// 	})

		// <% for (var i = 0; i < tasks.length; i++) { %>
		// <div class="image-box" name="<%=tasks[i].time%>">
		// 	<a href="/tasks/<%=tasks[i].id%>">
		// 	<img src="<%=tasks[i].image%>">
		// 	<div class="caption"><%=tasks[i].name%></div>
		// </div>
		// </a>
		// <% } %>

// var sortedTasks = $('#image-box');

// for (var i = 0; i < tasks.length; i++) {
// 	console.log(tasks[i].id);
// }

// var $imageArea = $('div.image-area'),
// 	$imageBox = $('div.image-box');
// 	$areaKids = $imageArea.children('.image-box')
// 	// $kidArray = []

// console.log($imageArea);
// console.log($imageBox);

// // $imageBox.sort(function(a, b) {
// // 	var an = a.getAttribute('name');
// // 	console.log 
// // })
// loopImages = function() {
// 	for (var i=0; i < $imageBox.length; i++) {
// 		// $imageBox.getAttribute($('name'))
// 		$imageBox.sort()
// 		console.log($imageBox)
// 	}
// }

// loopImages();

// console.log($areaKids);
// $kidArray.push($areaKids)
// console.log($kidArray)
// $kidArray.sort()
// console.log($kidArray)

// $imageBox.sort(function(a,b){
// 	var an = a.getAttribute('name'),
// 		bn = b.getAttribute('name');

// 		console.log(an.getAttribute('name'));
// 		console.log(bn);
// 		console.log


// 	if(an > bn) {
// 		return 1;
// 	}
// 	if(an < bn) {
// 		return -1;
// 	}
// 	return 0;
// });

// $imageBox.detach().appendTo($imageArea);
 // $(function() {
 //    $( "#accordion" ).accordion({
 //      collapsible: true
 //    });
 //  });

 });