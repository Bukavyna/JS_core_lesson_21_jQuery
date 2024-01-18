
$(document).ready(function (){

	$('#box__readout').text('2');
	$('.box__display').slideDown(60000, function () {
		$('#box__readout').text('1');
		$(this).slideUp(60000, function (){
			$('#box__readout').text('0');
		});
	});




	$('#get').click( function () {

		let textContents = [

			$('#s1').text(),
			$('.s2').text(),
			$('#second i').text(),
			$('#second q').text(),
			$('#second a[target="_blank"]').attr('href'),
			$('#second .extra').text()
		]

		let combinedText = textContents.join('');

		$('#show').text(combinedText);

		$('#show').slideToggle(3000, function () {

			$('#show').css({
				color: 'yellow',
				backgroundColor: 'blue'
			})
		});

	 	$('.box-two').slideToggle(3000, () => {
		  $('#get').css({
			  color: 'black',
			  backgroundColor: 'red'
		  })
	  });

	});

});
