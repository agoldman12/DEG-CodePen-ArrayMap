/* Below we have an array of cheeses. 
They are all Provel cheese. Aaron hates 
Provel cheese and therefore hates this array. 
Create a new array of cheeses that Aaron does 
not hate using the Array.map function. 
For simplicity's sake, assume Aaron likes all cheese other than Provel. 
*/

const cheeses = ['Provel', 'Provel', 'Provel'];

const newCheeses = cheeses.map(function(cheese){
		let newFlavor = 'Cheddar';
	
		return newFlavor;
});


document.querySelector('div').textContent = newCheeses.join(', ');

