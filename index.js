const ramens = [
    {
      id: 1,
      name: "Shoyu Ramen",
      restaurant: "Ichiran",
      image: "images/gyukotsu.jpg",
      rating: 5,
      comment: "Delicious!",
    },
    {
      id: 2,
      name: "Miso Ramen",
      restaurant: "Menya",
      image: "images/naruto.jpg",
      rating: 4,
      comment: "Very flavorful!",
    },
    {
      id: 3,
      name: "Tonkotsu Ramen",
      restaurant: "Ramen-ya",
      image: "images/kojiro (1).jpg",
      rating: 4,
      comment: "images/gyukotsu.jpg",
    },
  ];
  
  function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ''; // Clear existing images before displaying
  
    ramens.forEach((ramen) => {
      const imgElement = document.createElement("img");
      imgElement.src = ramen.image;
      imgElement.alt = ramen.name;
      imgElement.dataset.id = ramen.id;
      imgElement.classList.add("ramen-image");
  
      // Attach click event to display ramen details
      imgElement.addEventListener("click", handleClick);
  
      ramenMenu.appendChild(imgElement);
    });
  }
  
  function handleClick(event) {
    const ramenId = event.target.dataset.id;
    const ramen = ramens.find((r) => r.id == ramenId);
  
    document.getElementById("ramen-name").textContent = `Name: ${ramen.name}`;
    document.getElementById(
      "ramen-restaurant"
    ).textContent = `Restaurant: ${ramen.restaurant}`;
    document.getElementById(
      "ramen-rating"
    ).textContent = `Rating: ${ramen.rating}`;
    document.getElementById(
      "ramen-comment"
    ).textContent = `Comment: ${ramen.comment}`;
    document.querySelector("#ramen-detail img").src = ramen.image; // Set the ramen image
  }
  
  function addSubmitListener() {
    const form = document.getElementById("add-ramen-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const newRamen = {
        id: ramens.length + 1,
        name: document.getElementById("new-ramen-name").value,
        restaurant: document.getElementById("new-ramen-restaurant").value,
        image: "images/" + document.getElementById("new-ramen-image").files[0].name, // This assumes the image is in the "images" folder
        rating: parseInt(document.getElementById("new-ramen-rating").value),
        comment: document.getElementById("new-ramen-comment").value,
      };
  
      // Add new ramen to the array
      ramens.push(newRamen);
  
      // Display updated ramen list
      displayRamens();
  
      // Clear the form
      form.reset();
    });
  }
  
  function main() {
    displayRamens();
    addSubmitListener();
  }
  
  document.addEventListener("DOMContentLoaded", main);
  