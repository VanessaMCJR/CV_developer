let titre = document.querySelector("h1");
let photo = document.querySelector("#photo");
photo.style.marginLeft = "-220px";
titre.style.position = "absolute";
let topPosition = 0 ;
let direction = -1;
let rightPosition = 0;




function deplacerDroiteGauche ()  

{
	if(rightPosition === 270)
	{
		direction = 1;
	}
	
	else if (rightPosition === 150)
	{
		direction = -1;
	}
		
	rightPosition+= -0.5* direction;
	titre.style.right = `${rightPosition}px`;
	
	
	requestAnimationFrame(deplacerDroiteGauche);
	
	
	
	
}

requestAnimationFrame(deplacerDroiteGauche);










