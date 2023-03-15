// Get the navigation element
const nav = document.getElementById("toc_menu");

// Get the headings in the article
const headings = document.querySelectorAll("article h2");

// Create a list of links for the navigation
const navList = document.createElement("ul");
navList.classList.add("nav", "flex-column", "text-success");

// Loop through the headings and create a link for each one
headings.forEach((heading) => {
  // Create a list item for the link
  const listItem = document.createElement("li");
  listItem.classList.add("nav-item");

  // Create the link element
  const link = document.createElement("a");
  link.classList.add("nav-link");
  link.textContent = heading.textContent;
  link.href = "#" + heading.id;

  // Add the link to the list item and the list item to the list
  listItem.appendChild(link);
  navList.appendChild(listItem);
});

// Add the list to the navigation
nav.querySelector("div").appendChild(navList);