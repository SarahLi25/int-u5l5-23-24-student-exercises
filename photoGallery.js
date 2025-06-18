
// 1. Declare a variable name 'imageContainer' and store the HTML element with the id 'imageContainer'
let imageContainer = document.querySelector("#imageContainer");

// 2. Add at least four image URLs to the imageUrls array
let imageUrls = [
    "https://m.media-amazon.com/images/M/MV5BNTE4NjcyYmQtMjIxZS00MDE0LThjNmMtMDNkZWRiOTlhZjQ3XkEyXkFqcGdeQTNwaW5nZXN0._V1_.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Amazing_World_of_Gumball_Wattersons.png/250px-Amazing_World_of_Gumball_Wattersons.png",
    "https://imgix.ranker.com/list_img_v2/2284/3302284/original/3302284",
    "https://comicbook.com/wp-content/uploads/sites/4/2025/01/The-Amazing-World-of-Gumball-Cartoon-Network.jpg?w=1024"
];

// 3. Selecting the imageUrls array, create a forEach loop.
imageUrls.forEach((url) => {
    // Create an image element and store it in a variable named 'image'
    let image = document.createElement("img");

    // Update the src of the image element to equal the function parameter (the array element)
    image.src = url;

    // Append the image to the image container
    imageContainer.appendChild(image);
});