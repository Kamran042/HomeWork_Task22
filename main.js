const container = document.querySelector(".container");
const section = document.querySelector(".section");
const sectionTwo = document.querySelector(".section_two");

function displayProducts(products) {
  container.innerHTML = "";
  products.forEach((product) => {
    container.innerHTML += `
      <div class="card">
      <img src="${product.image}" alt="">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p><b>Price:</b> ${product.price} $</p>
      </div>
    `;
  });
}

section.addEventListener("change", () => {
  fetch("https://fakestoreapi.com/products")
    .then((resp) => resp.json())
    .then((data) => {
      const selectedValue = section.value;
      let sortedProducts = [...data];
      if (selectedValue === "maxToMin") {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (selectedValue === "minToMax") {
        sortedProducts.sort((a, b) => a.price - b.price);
      }
      displayProducts(sortedProducts);
    });
});

fetch("https://fakestoreapi.com/products")
  .then((resp) => resp.json())
  .then((data) => {
    displayProducts(data);
  });

sectionTwo.addEventListener("change", () => {
  fetch("https://fakestoreapi.com/products")
    .then((resp) => resp.json())
    .then((data) => {
      const selectedValue = sectionTwo.value;
      let sortedProducts = [...data];
      if (selectedValue === "az") {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (selectedValue === "za") {
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      }
      displayProducts(sortedProducts);
    });
});
