const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `meme by ${author}`;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok (${response.status} ${response.statusText})`);
            }
            return response.json();
        })
        .then((data) => {
            updateDetails(data.url, data.title, data.author);
        })
        .catch((error) => {
            console.error("Error fetching meme:", error);
        });
};

generateMemeBtn.addEventListener("click", generateMeme);


