var API_URL = "https://fakestoreapi.com/products";
var allProducts = [];

function fetchProducts() {
  fetch(API_URL)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      allProducts = data;
      showTask1();
    })
    .catch(function (error) {
      showError();
    });
}

function clearProducts() {
  document.getElementById("products").innerHTML = "";
  document.getElementById("search-box").style.display = "none";
  document.getElementById("mini-project-controls").style.display = "none";
}

function showError() {
  document.getElementById("products").innerHTML =
    '<div class="error-box">❌ Unable to Load Products<br>Please try again later.</div>';
}

// Reusable full card renderer
function renderCard(p) {
  var div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${p.image}" alt="${p.title}">
    <h3>${p.title}</h3>
    <p>Category : ${p.category}</p>
    <p>Rating : ⭐ ${p.rating.rate}</p>
    <p>Price : $${p.price}</p>
  `;
  document.getElementById("products").appendChild(div);
}

// Task 1 - Show Product Count
function showTask1() {
  clearProducts();
  document.getElementById("count").textContent = "Total Products : " + allProducts.length;
  allProducts.forEach(function (p) {
    renderCard(p);
  });
}

// Task 2 - Display Only Product Names
function showTask2() {
  clearProducts();
  document.getElementById("count").textContent = "";
  allProducts.forEach(function (p) {
    var div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${p.title}</h3>`;
    document.getElementById("products").appendChild(div);
  });
}

// Task 3 - Products Below $100
function showTask3() {
  clearProducts();
  document.getElementById("count").textContent = "";
  allProducts.forEach(function (p) {
    if (p.price < 100) {
      renderCard(p);
    }
  });
}

// Task 4 - Products Above $100
function showTask4() {
  clearProducts();
  document.getElementById("count").textContent = "";
  allProducts.forEach(function (p) {
    if (p.price > 100) {
      renderCard(p);
    }
  });
}

// Task 5 - Show Category
function showTask5() {
  clearProducts();
  document.getElementById("count").textContent = "";
  allProducts.forEach(function (p) {
    var div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${p.title}</h3><p>Category : ${p.category}</p>`;
    document.getElementById("products").appendChild(div);
  });
}

// Task 6 - Display Rating
function showTask6() {
  clearProducts();
  document.getElementById("count").textContent = "";
  allProducts.forEach(function (p) {
    var div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${p.title}</h3><p>Rating : ⭐ ${p.rating.rate}</p>`;
    document.getElementById("products").appendChild(div);
  });
}

// Task 7 - Product Search
function showTask7() {
  clearProducts();
  document.getElementById("count").textContent = "";
  document.getElementById("search-box").style.display = "block";
  document.getElementById("searchInput").value = "";
}

function searchProducts() {
  var value = document.getElementById("searchInput").value.toLowerCase();
  document.getElementById("products").innerHTML = "";
  allProducts.forEach(function (p) {
    if (p.title.toLowerCase().includes(value)) {
      renderCard(p);
    }
  });
}

// Task 8 - Electronics
function showTask8() {
  clearProducts();
  document.getElementById("count").textContent = "";
  allProducts.forEach(function (p) {
    if (p.category === "electronics") {
      renderCard(p);
    }
  });
}

// Task 9 - Men's Clothing
function showTask9() {
  clearProducts();
  document.getElementById("count").textContent = "";
  allProducts.forEach(function (p) {
    if (p.category === "men's clothing") {
      renderCard(p);
    }
  });
}

// Task 10 - Women's Clothing
function showTask10() {
  clearProducts();
  document.getElementById("count").textContent = "";
  allProducts.forEach(function (p) {
    if (p.category === "women's clothing") {
      renderCard(p);
    }
  });
}

// Task 11 - Jewellery
function showTask11() {
  clearProducts();
  document.getElementById("count").textContent = "";
  allProducts.forEach(function (p) {
    if (p.category === "jewelery") {
      renderCard(p);
    }
  });
}

// Task 12 - First 5 Products
function showTask12() {
  clearProducts();
  document.getElementById("count").textContent = "";
  var count = 0;
  allProducts.forEach(function (p) {
    if (count < 5) {
      renderCard(p);
      count = count + 1;
    }
  });
}

// Task 13 - Last 5 Products
function showTask13() {
  clearProducts();
  document.getElementById("count").textContent = "";
  var startIndex = allProducts.length - 5;
  var i = 0;
  allProducts.forEach(function (p) {
    if (i >= startIndex) {
      renderCard(p);
    }
    i = i + 1;
  });
}

// Task 14 - Add Serial Number
function showTask14() {
  clearProducts();
  document.getElementById("count").textContent = "";
  var serial = 1;
  allProducts.forEach(function (p) {
    var div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h4>Product ${serial}</h4><h3>${p.title}</h3>`;
    document.getElementById("products").appendChild(div);
    serial = serial + 1;
  });
}

// Task 15 - Long Description Truncation
function showTask15() {
  clearProducts();
  document.getElementById("count").textContent = "";
  allProducts.forEach(function (p) {
    var desc = p.description;
    if (desc.length > 100) {
      desc = desc.substring(0, 100) + " Read More...";
    }
    var div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${p.title}</h3><p>${desc}</p>`;
    document.getElementById("products").appendChild(div);
  });
}

// Task 16 - Highest Rated Product
function showTask16() {
  clearProducts();
  document.getElementById("count").textContent = "";
  var best = allProducts[0];
  allProducts.forEach(function (p) {
    if (p.rating.rate > best.rating.rate) {
      best = p;
    }
  });
  renderCard(best);
}

// Task 17 - Cheapest Product
function showTask17() {
  clearProducts();
  document.getElementById("count").textContent = "";
  var cheapest = allProducts[0];
  allProducts.forEach(function (p) {
    if (p.price < cheapest.price) {
      cheapest = p;
    }
  });
  renderCard(cheapest);
}

// Task 18 - Costliest Product
function showTask18() {
  clearProducts();
  document.getElementById("count").textContent = "";
  var costliest = allProducts[0];
  allProducts.forEach(function (p) {
    if (p.price > costliest.price) {
      costliest = p;
    }
  });
  renderCard(costliest);
}

// Task 19 - Error Page (simulated by fetching a bad URL)
function showTask19() {
  clearProducts();
  document.getElementById("count").textContent = "";
  fetch("https://fakestoreapi.com/this-does-not-exist")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      // will not run because the URL is invalid
    })
    .catch(function (error) {
      showError();
    });
}

// Task 20 + Challenge - Mini Project (search + filter + price + count + error handling)
function showTask20() {
  clearProducts();
  document.getElementById("mini-project-controls").style.display = "flex";
  document.getElementById("miniSearch").value = "";
  document.getElementById("miniCategory").value = "all";
  document.getElementById("miniMaxPrice").value = "";
  applyFilters();
}

function applyFilters() {
  var searchValue = document.getElementById("miniSearch").value.toLowerCase();
  var categoryValue = document.getElementById("miniCategory").value;
  var maxPriceValue = document.getElementById("miniMaxPrice").value;

  document.getElementById("products").innerHTML = "";
  var displayedCount = 0;

  allProducts.forEach(function (p) {
    var matchesSearch = p.title.toLowerCase().includes(searchValue);
    var matchesCategory = true;
    if (categoryValue !== "all") {
      if (p.category !== categoryValue) {
        matchesCategory = false;
      }
    }
    var matchesPrice = true;
    if (maxPriceValue !== "") {
      if (p.price > Number(maxPriceValue)) {
        matchesPrice = false;
      }
    }

    if (matchesSearch && matchesCategory && matchesPrice) {
      renderMiniCard(p);
      displayedCount = displayedCount + 1;
    }
  });

  document.getElementById("count").textContent = "Total Products : " + displayedCount;

  if (displayedCount === 0) {
    document.getElementById("products").innerHTML =
      '<p class="no-products">No Products Found</p>';
  }
}

function renderMiniCard(p) {
  var div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${p.image}" alt="${p.title}">
    <h3>${p.title}</h3>
    <p>Category : ${p.category}</p>
    <p>Rating : ⭐ ${p.rating.rate}</p>
    <p>Price : $${p.price}</p>
  `;
  var buyBtn = document.createElement("button");
  buyBtn.className = "buy-btn";
  buyBtn.textContent = "Buy Now";
  buyBtn.addEventListener("click", function () {
    alert("Thank you for buying: " + p.title);
  });
  div.appendChild(buyBtn);
  document.getElementById("products").appendChild(div);
}

// Start
fetchProducts();