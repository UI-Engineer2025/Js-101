document.querySelectorAll('.btn').forEach(
(pieces)=> {
	pieces.addEventListener('click', 
	()=>{
		alert('External Hello!')
	})
})
