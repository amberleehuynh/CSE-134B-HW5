// const form = document.getElementById("myForm");
// const responseList = document.getElementById("responseList");

// // Helper function to create a nested list from a JSON object
// function createNestedList(obj) {
//   const nestedList = document.createElement("ul");
//   for (const [key, value] of Object.entries(obj)) {
//     const listItem = document.createElement("li");
//     listItem.appendChild(document.createTextNode(key));
//     if (typeof value === "object" && value !== null) {
//       const nestedListItem = document.createElement("li");
//       nestedListItem.appendChild(createNestedList(value));
//       listItem.appendChild(nestedListItem);
//     } else {
//       listItem.appendChild(document.createTextNode(": " + value));
//     }
//     nestedList.appendChild(listItem);
//   }
//   return nestedList;
// }

// // Helper function to indent a list item
// function indentListItem(listItem) {
//   listItem.style.marginLeft = "20px";
// }

// // Set date field to current date and time
// var dateField = document.getElementById("date");
// dateField.value = new Date().toLocaleString();
// // document.getElementById("date").value = new Date().toLocaleString();

// document.getElementById("postBtn").addEventListener("click", function() {
//   const data = {
//     id: document.getElementById("id").value,
//     article_name: document.getElementById("article_name").value,
//     article_body: document.getElementById("article_body").value,
//     date: document.getElementById("date").value
//   };
//   fetch("https://httpbin.org/post", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       responseList.innerHTML = "";
//       responseList.appendChild(createNestedList(data));
//     });
// });

// document.getElementById("getBtn").addEventListener("click", function() {
//   fetch("https://httpbin.org/get")
//     .then(response => response.json())
//     .then(data => {
//       responseList.innerHTML = "";
//       responseList.appendChild(createNestedList(data));
//     });
// });

// document.getElementById("putBtn").addEventListener("click", function() {
//   const data = {
//     id: document.getElementById("id").value,
//     article_name: document.getElementById("article_name").value,
//     article_body: document.getElementById("article_body").value,
//     date: document.getElementById("date").value
//   };
//   fetch("https://httpbin.org/put", {
//     method: "PUT",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       responseList.innerHTML = "";
//       response.appendChild(createNestedList(data));
//     });
// });

// document.getElementById("deleteBtn").addEventListener("click", function() {
//   fetch("https://httpbin.org/delete")
//     .then(response => response.json())
//     .then(data => {
//       responseList.innerHTML = "";
//       responseList.appendChild(createNestedList(data));
//     });
// });



//   // Get references to the form and buttons
//   var form = document.getElementById("articleForm");
//   var postBtn = document.getElementById("postBtn");
//   var getBtn = document.getElementById("getBtn");
//   var putBtn = document.getElementById("putBtn");
//   var deleteBtn = document.getElementById("deleteBtn");

//   // Add an event listener to the post button
//   postBtn.addEventListener("click", function() {
//     // Prevent the default form submission behavior
//     event.preventDefault();

//     // Get the form data
//     var formData = new FormData(form);

//     // Send a POST request to the endpoint with the form data
//     fetch("https://httpbin.org/post", {
//       method: "POST",
//       body: formData
//     }).then((response) => response.json()) {
//       // Handle the response
//       console.log(response);
//     }).catch(function(error) {
//       // Handle any errors
//       console.error(error);
//     });
//   });

//   // Add an event listener to the get button
//   getBtn.addEventListener("click", function() {
//     // Send a GET request to the endpoint
//     fetch("https://httpbin.org/get").then(function(response) {
//       // Handle the response
//       console.log(response);
//     }).catch(function(error) {
//       // Handle any errors
//       console.error(error);
//     });
//   });

//   // Add an event listener to the put button
//   putBtn.addEventListener("click", function() {
//     // Prevent the default form submission behavior
//     event.preventDefault();

//     // Get the form data
//     var formData = new FormData(form);

//     // Send a PUT request to the endpoint with the form data
//     fetch("https://httpbin.org/put", {
//       method: "PUT",
//       body: formData
//     }).then(function(response) {
//       // Handle the response
//       console.log(response);
//     }).catch(function(error) {
//       // Handle any errors
//       console.error(error);
//     });
//   });

//   // Add an event listener to the delete button
//   deleteBtn.addEventListener("click", function() {
//     // Send a DELETE request to the endpoint
//     fetch("https://httpbin.org/delete", {
//       method: "DELETE"
//     }).then(function(response) {
//       // Handle the response
//       console.log(response);
//     }).catch(function(error) {
//       // Handle any errors
//       console.error(error);
//     });
//   });



// // const postBtn = document.getElementById("postBtn");
// // const getBtn = document.getElementById("getBtn");
// // const putBtn = document.getElementById("putBtn");
// // const deleteBtn = document.getElementById("deleteBtn");
// // const response = document.getElementById("response");

// // /** Utilities */
// // const showResponse = (object) => {
// //   // response.innerHTML = `<pre>${JSON.stringify(object, null, 2)}</pre>`;
// //   response.innerHTML = `${JSON.stringify({id: })}`
// // };

// // response.innerHTML = `
// // <h3>Article ID: ${data.id}</h3>
// // <h3>Article Name: ${data.article_name}</h3>
// // <h3>Article Body: ${document.getElementById("article_body").value}</h3>
// // <h3>Article Date: ${data.article_date}</h3>
// // <h3>JSON: ${this.responseText}</h3>
// // `

// // /**  Post Button */ 
// // postBtn.addEventListener("click", async () => {
// //   const data = {
// //     id: document.getElementById("id").value,
// //     article_name: document.getElementById("article_name").value,
// //     article_body: document.getElementById("article_body").value,
// //     date: new Date().toISOString()
// //   };

// //   const post_response = await fetch("https://httpbin.org/post", {
// //     method: "POST",
// //     body: JSON.stringify(data),
// //     headers: {
// //       "Content-Type": "application/json"
// //     }
// //   });

// //   const json_result = await post_response.json();
// //   // showResponse(json_result);
// //   response.innerHTML = JSON.stringify(data);
// // });

