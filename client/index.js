const imageForm = document.querySelector("#imageForm");
const imageInput = document.querySelector("#imageInput");

imageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const file = imageInput.files[0];
  console.log(file);

  // get secure url from server
  const { url } = await fetch("/s3Url").then((res) => res.json());
  console.log("browser", url);

  // post the image direclty to the s3 bucket
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: file,
  });

  const imageUrl = url.split("?")[0];
  console.log("imgurl", imageUrl);

  // post requst to my server to store any extra data
  const img = document.createElement("img");
  img.src = imageUrl;
  document.body.appendChild(img);
});
