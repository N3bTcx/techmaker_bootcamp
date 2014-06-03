$(document).ready(function() {
	$('#add').click(function(e) {
		$('h3').text("Checkbox checked");
//Checking attribute page : https://api.jquery.com/attr/
$(".task").attr("checked", "checked");
});

	$('#remove').click(function(e) {
//Checking remove page : https://api.jquery.com/remove/		
$('h3').text("Task removed");
$("li").remove();
// 		$(".task").remove();  was not working...
});

	$('#reorder').click(function(e) {
		$('h3').text("Order changed");

		var items = $('.checkbox li').get();
		items.sort(function(a,b){
			var keyA = $(a).text();
			var keyB = $(b).text();

			if (keyA < keyB) return -1;
			if (keyA > keyB) return 1;
			return 0;
		});
		var ul = $('.checkbox');
		$.each(items, function(i, li){
			ul.append(li);
		});
// Seems better to user TinySort : http://tinysort.sjeiti.com/		
});
});
$(document).ready(function() {
	$('#new-to-do-item').keyup(function(e) {
		if (e.which === 13) {
			var text = $(this).val();
			var listItem = "<li><input type='checkbox'>" + text + "</li>"
			$('ul').append(listItem);
		}
	});
});
