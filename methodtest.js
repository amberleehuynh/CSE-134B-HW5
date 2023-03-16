// Get references to the form and response
const form = document.getElementById("articleForm");
const response = document.getElementById("response");

// Helper function to create a nested list from a JSON object
function createNestedList(obj) {
  const nestedList = document.createElement("ul");
  for (const [key, value] of Object.entries(obj)) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(key + ": " + JSON.stringify(value)));

    // Styling the list
    listItem.style.paddingBottom = "10px";
    listItem.style.marginTop = "15px";
    listItem.style.marginLeft = "40px";
    listItem.style.color = "#7D7D7D";

    if (typeof value === "object" && value !== null) {
      const nestedListItem = document.createElement("li");
      nestedListItem.appendChild(createNestedList(value));
      listItem.appendChild(nestedListItem);

      // Styling the list
      listItem.style.paddingBottom = "10px";
      listItem.style.marginTop = "10px";
      listItem.style.marginLeft = "40px";
      listItem.style.color = "#7D7D7D";    
    } 
    else {
      // listItem.appendChild(document.createTextNode(''));
    }
    nestedList.appendChild(listItem);
  }
  return nestedList;
}

// Set date field to current date and time
var dateField = document.getElementById("date");
dateField.value = new Date().toLocaleString();

// Fetch: Add event listener for POST button
document.getElementById("postBtn").addEventListener("click", function() {
  // Get form data
  const data = {
    id: document.getElementById("id").value,
    article_name: document.getElementById("article_name").value,
    article_body: document.getElementById("article_body").value,
    date: document.getElementById("date").value
  };
  // Send HTTP request
  fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => {
      // Display form data
      response.innerHTML = "";
      response.appendChild(createNestedList(data));
    });
});

// Fetch: Add event listener for GET button
document.getElementById("getBtn").addEventListener("click", function() {
  // Send HTTP request
  fetch("https://httpbin.org/get")
    .then(response => response.json())
    .then(data => {
      // Display form data
      response.innerHTML = "";
      response.appendChild(createNestedList(data));
    });
});

// Fetch: Add event listener for PUT button
document.getElementById("putBtn").addEventListener("click", function() {
  // Get form data
  const data = {
    id: document.getElementById("id").value,
    article_name: document.getElementById("article_name").value,
    article_body: document.getElementById("article_body").value,
    date: document.getElementById("date").value
  };
  // Send HTTP request
  fetch("https://httpbin.org/put", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => {
      // Display form data
      response.innerHTML = "";
      response.appendChild(createNestedList(data));
    });
});

// Fetch: Add event listener for DELETE button
document.getElementById("deleteBtn").addEventListener("click", function() {
  // Send HTTP request
  fetch("https://httpbin.org/delete", {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(data => {
      // Display form data
      response.innerHTML = "";
      response.appendChild(createNestedList(data));
    });
});