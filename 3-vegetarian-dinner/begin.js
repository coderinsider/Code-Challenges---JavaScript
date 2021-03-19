/*
  WRITE YOUR SOLUTION HERE
*/
function vegetarianMenu(menu) {
	const menuNode = document.querySelector("#menu");
	const vegetarianOptions = menu.filter( 
		(opt) => opt.isVegetarian == true
	);
	
	vegetarianOptions.forEach(opt => {
		let dish = document.createElement("li");
		dish.textContent = opt.name;
		menuNode.appendChild(dish);
	});
}
const menu = [
	{
		name: "Stuffed shells",
		isVegetarian: true
	},
	{
		name: "Stuffed shells 1",
		isVegetarian: false
	}
];
vegetarianMenu(menu);