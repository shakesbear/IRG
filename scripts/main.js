const myImage = document.querySelector("img");

const image1 = "images/golden-retriever.webp"
const image2 = "images/puppies.webp"

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === image1) {
    myImage.setAttribute("src", image2);
  } else {
    myImage.setAttribute("src", image1);
  }
};
let myHeading = document.querySelector("h2");
let myButton = document.querySelector("button");

function setUserName() {
	const myName = prompt("Please enter your name.");
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = `Golden retriever is cool, ${myName}`;
	}
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const myName = localStorage.getItem("name");
	myHeading.textContent = `Golden retriever is cool, ${myName}`;
}

myButton.onclick = () => {
	setUserName();
}