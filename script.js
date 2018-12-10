
let showModal = document.querySelector("#modal-show");
function show(){
	let modal = document.querySelector(".modal");
	//modal.hidden = false;
	modal.style.display = "block";
	modal.style.borderRadius = "20px";
	modal.style.border = "5px";
}
showModal.onclick = show;

let hideModal = document.querySelector("#modal-hide");
function hide(){
	let modal = document.querySelector(".modal");
	//modal.hiden = true;
	modal.style.display = "none";
}
hideModal.onclick = hide;