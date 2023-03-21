const input = document.querySelector("input");
const output = document.querySelector("output");
let imagesArray = [];

input.addEventListener("change", () => {
  const file = input.files;
  console.log(file);
  imagesArray = [...file];
  console.log(imagesArray);
  displayImages();
});

function displayImages() {
  let images = "";
  imagesArray.forEach((image, index) => {
    console.log(image.name);
    images += `<div class="image">
    <img src="${URL.createObjectURL(image)}" alt="image">
    <span onclick="deleteImage(${index})">&times;</span>
    </div>`;
  });
  output.innerHTML = images;
  console.log(images);
}

function deleteImage(index) {
  imagesArray.splice(index, 1);
  displayImages();
}

// const imageForm = document.querySelector("#imageForm");
// const imageInput = document.querySelector("#imageInput");

// imageForm.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   const file = imageInput.files[0];
//   console.log(file);

//   // get secure url from server
//   const { url } = await fetch("http://localhost:8000/s3Url").then((res) =>
//     res.json()
//   );
//   console.log("browser", url);

//   // post the image direclty to the s3 bucket
//   await fetch(url, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//     body: file,
//   });

//   const imageUrl = url.split("?")[0];
//   console.log("imgurl", imageUrl);

//   // post requst to my server to store any extra data
//   const img = document.createElement("img");
//   img.src = imageUrl;
//   document.body.appendChild(img);
// });
