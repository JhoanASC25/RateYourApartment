
let apartments = document.getElementsByClassName("apartment-image");
let allReviews = [];
let currentApartment = 0


let listingData = [
    {
        name: "The High Rise",
        price: 2000,
        rating: 4.2,
        img: "https://wallpapers.com/images/hd/high-rise-apartment-16fpme9sb99sw7yk.jpg",
        description: "Experience elevated urban living in this stunning high-rise residence, where modern elegance meets unmatched city panoramas. Expansive floor-to-ceiling windows frame breathtaking skyline views, bathing the space in natural light from sunrise to sunset. The open-concept layout flows effortlessly, offering the perfect balance of sophistication and comfort.",
        clean: "4.5",
        landlord: "3.5",
        moveIn: "4",
        responsiveness: "4.5",
        noise: "4.3"

    },
    {
        name: "The Modern Apartment",
        price: 1500,
        rating: 3.2,
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/167cf9181457373.651c5fecd32ff.jpg",
        description: "Discover elevated living at this brand-new mid-rise community, where contemporary architectural elegance meets peaceful street-side charm. The building features a refined facade of clean lines, textured materials, and pops of warm color, all wrapped in a palette of soft grays and creamy tones. Thoughtfully designed ground landscaping and a secure gated entrance welcome residents in a calm, inviting manner.",
        clean: "3.4",
        landlord: "4",
        moveIn: "2.7",
        responsiveness: "2",
        noise: "3.8"
    },
    {
        name: "Luxury 4 Story House",
        price: 3500,
        rating: 4.7,
        img: "https://tse4.mm.bing.net/th/id/OIP.h1CiQuMG3QleGqQjQmSOswHaGj?w=500&h=442&rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "This newly constructed mid-rise apartment complex blends clean modern design with functional elegance. The building’s bold geometric lines and crisp white facade are accented by muted grey tones and an intricate decorative panel at the center, giving it a striking street presence. Expansive windows on every floor invite abundant natural light, while private balconies on select units provide fresh-air retreats.",
        clean: "5",
        landlord: "4.8",
        moveIn: "3.9",
        responsiveness: " 5",
        noise: "4.9"
    },
    {
        name: "Dirt Cheap Dirt House",
        price: 500,
        rating: 1.8,
        img: "https://content.instructables.com/F5W/55WD/GJHVGX42/F5W55WDGJHVGX42.jpg?auto=web",
        description: "Step into a serene slice of countryside living with this beautifully crafted cottage, featuring natural clay walls and a traditional thatch roof. Surrounded by lush greenery and vibrant potted plants, this home blends rustic charm with a connection to nature. Its earthy tones and organic textures create a warm, inviting atmosphere perfect for a peaceful lifestyle.",
        clean: "1.2",
        landlord: "1",
        moveIn: "2",
        responsiveness: "0",
        noise: "5"
    },
    {
        name: "Arab Al Burj",
        price: 450000,
        rating: 5,
        img: "https://lustforthesublime.com/wp-content/uploads/2018/10/The-Terrace.jpg",
        description: "Rising from its own private island just off the coast, this extraordinary sail-inspired tower offers a lifestyle defined by unparalleled luxury and breathtaking views of the Arabian Gulf. Set against the backdrop of Dubai’s glittering skyline, this residence delivers a rare fusion of architectural brilliance, five-star amenities, and exclusive waterfront living.",
        clean: "5",
        landlord: "5",
        moveIn: "5",
        responsiveness: "5",
        noise: "5"


    },
    {
        name: "Manhattan Apartment",
        price: 4500,
        rating: 2.9,
        img: "https://cdngeneral.rentcafe.com/dmslivecafe/3/155743/3_155743_1016688.jpg?crop=(0,0,300,337)&cropxunits=300&cropyunits=337&width=480&quality=90",
        description: "This quintessential New York City mid-rise captures the timeless character of the city’s architectural heritage. Featuring a stately red-brick facade accented by ornate stonework and framed windows, the building offers authentic pre-war charm in the heart of a vibrant neighborhood. Iconic black iron fire escapes trace the exterior, adding both functionality and vintage appeal.",
        clean: "3",
        landlord: "4",
        moveIn: "2",
        responsiveness: "3",
        noise: "2.5"

    },


    {
        name: "Shadow Apartment",
        price: 5000,
        rating: 3.2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYURCmHftiIcEBIyQBMHWe1Ez8OgbuWjAlrw&s",
        description: "This quintessential New York City mid-rise captures the timeless character of the city’s architectural heritage. Featuring a stately red-brick facade accented by ornate stonework and framed windows, the building offers authentic pre-war charm in the heart of a vibrant neighborhood. Iconic black iron fire escapes trace the exterior, adding both functionality and vintage appeal.",
        clean: "4",
        landlord: "3",
        moveIn: "3",
        responsiveness: "4",
        noise: "3.0"

    },

    {
        name: "The Verdi Terrace",
        price: 3700,
        rating: 3.5,
        img: "https://www.shutterstock.com/image-photo/modern-apartment-building-balconies-greenery-600nw-2606887531.jpg",
        description: "Sleek, contemporary design meets tranquil greenery in this stylish low-rise apartment building. With its clean architectural lines, soft neutral tones, and distinctive angled balconies, this residence offers a fresh take on modern urban living. Each level features private outdoor spaces—perfect for morning coffee, evening relaxation, or cultivating your own balcony garden.",
        clean: "3",
        landlord: "4",
        moveIn: "2",
        responsiveness: "3",
        noise: "2.5"

    },


    {
        name: "Palmview Residences",
        price: 4000,
        rating: 3.7,
        img: "https://s1.q4cdn.com/498755859/files/images/irw/JeffersonSandLake_014Crop4.jpg",
        description: "This striking mid-rise community features bold geometric lines, expansive glass windows, and a sophisticated blend of white, stone, and dark wood tones. Lined with swaying palm trees and lush landscaping, the property offers an immediate sense of luxury and relaxation.",
        clean: "4",
        landlord: "2",
        moveIn: "4",
        responsiveness: "3",
        noise: "4.0"

    },

    {
        name: "Cedar Grove Apartments",
        price: 3800,
        rating: 3.4,
        img: "https://st2.depositphotos.com/1015412/8130/i/450/depositphotos_81301130-stock-photo-new-apartment-complex-in-suburban.jpg",
        description: "These inviting three-story buildings feature warm earth-tone siding, peaked gable roofs, and covered balconies that overlook tree-lined streets. Surrounded by lush greenery and landscaped walkways, the community creates a peaceful, welcoming environment for residents.",
        clean: "3",
        landlord: "3",
        moveIn: "5",
        responsiveness: "3",
        noise: "2.0"

    }
]

console.log(apartments)
let selectionInfo = document.getElementById("selectionInfo")
if(selectionInfo){
    selectionInfo.style.display = "none"
}



for (let i = 0; i < apartments.length; i++) {
    apartments[i].onclick = function () {
        currentApartment = i
        document.getElementById("listing").style.display = "none"
        document.getElementById("selectionInfo").style.display = "block"
        displayListing(listingData[i]);
    };
}

function displayListing(data) {
    console.log(data)
    let titleH1 = document.getElementById("selectionTitle");
    let ratingH2 = document.getElementById("selectionRating");
    let priceH3 = document.getElementById("selectionPrice");
    let selectionImg = document.getElementById("selectionImg")
    let apartmentDescription = document.getElementById("description");
    let clean = document.getElementById("cleanliness");
    let landlord = document.getElementById("landlord");
    let moveIn = document.getElementById("moveIn");
    let responsiveness = document.getElementById("responsiveness");
    let noise = document.getElementById("audio")

    selectionImg.src = data.img
    selectionImg.alt = data.name;

    titleH1.innerHTML = data.name
    ratingH2.innerHTML = `<strong>Rating:</strong> ${getStarRating(data.rating)} <span class="numeric-rating">(${data.rating.toFixed(1)})</span>`;
    priceH3.innerHTML = `<strong>Price:</strong> $${data.price.toLocaleString()} Dollars A Month`;
    apartmentDescription.innerHTML = data.description
    clean.innerHTML = `<strong>Cleanliness:</strong> ${data.clean}/5`;
    landlord.innerHTML = `<strong>Landlord:</strong> ${data.landlord}/5`;
    moveIn.innerHTML = `<strong>Move-in Condition:</strong> ${data.moveIn}/5`;
    responsiveness.innerHTML = `<strong>Responsiveness:</strong> ${data.responsiveness}/5`;
    noise.innerHTML = `<strong>Noise Rating:</strong> ${data.noise}/5`;

    messageDiv.innerHTML = '';
    clearReviews();
}
let showListing = document.getElementById("showListings")
if(showListing){
    showListing.onclick = function () {
        document.getElementById("listing").style.display = "block"
        document.getElementById("selectionInfo").style.display = "none"
    }
}

function getStarRating(rating) {
    const starsHTML = [];
    const maxStars = 5;

    for (let i = 0; i < maxStars; i++) {
        let fillPercent = 0;

        if (i < Math.floor(rating)) {
            fillPercent = 100;
        } else if (i === Math.floor(rating)) {
            fillPercent = (rating % 1) * 100;
        }

        starsHTML.push(`<span class="star dynamic" style="--fill: ${fillPercent}%;"></span>`);
    }

    return starsHTML.join('');
}


let userInput = document.getElementById("ryaSearch")
if(userInput){
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            let searchTerm = userInput.value.trim().toLowerCase();

            // Find the apartment with a matching name
            let foundApartment = listingData.find(apartment =>
                apartment.name.toLowerCase() === searchTerm
            );

            if (foundApartment) {
                document.getElementById("listing").style.display = "none";
                document.getElementById("selectionInfo").style.display = "block";
                currentApartment = listingData.indexOf(foundApartment);
                displayListing(foundApartment);
            } else {
                alert("No such apartment exist. Please enter an existing apartment.");
            }
        }
    });
}

const database = firebase.database().ref();
const messageDiv = document.getElementById("reviewSection");
let reviewBtn = document.getElementById("sendReview");

reviewBtn.onclick = function(){ 
    let inputText = document.getElementById("reviewText");
    let username = document.getElementById("username");
    let email = document.getElementById("email");

    localStorage.setItem("currentUserEmail", email.value);
    localStorage.setItem("currentUsername", username.value);
    //I want it so that iof you click myreviews, it shows only your reviews that you added, not others
    

    const date = new Date();
    let dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    let timeString = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    let object = {
        username: username.value,
        message: inputText.value,
        email: email.value,
        apartment: currentApartment,
        apartmentName: listingData[currentApartment].name,
        time: timeString,
        date: dateString
    };

    database.push(object);
    inputText.value = "";
}



function makeReview(usernameTxt, emailTxt, messageTxt, dateTxt, timeTxt) {
    let parentDiv = document.createElement('div');
    parentDiv.className = 'single-message';

    let usernameP = document.createElement('p');
    usernameP.innerHTML = usernameTxt;
    usernameP.className = 'single-message-username';
    parentDiv.append(usernameP);

    let messageP = document.createElement('p');
    messageP.innerHTML = messageTxt;
    parentDiv.append(messageP);

    let emailP = document.createElement('p');
    emailP.innerHTML = emailTxt;
    parentDiv.append(emailP);

    let dateP = document.createElement('p');
    dateP.innerHTML = dateTxt;
    parentDiv.append(dateP);

    let timeP = document.createElement('p');
    timeP.innerHTML = timeTxt;
    parentDiv.append(timeP);

    return parentDiv;
}

database.on('child_added', addMessageToBoard);

function addMessageToBoard(rowData) {
    let data = rowData.val();
    allReviews.push(data);

    if (Number(data.apartment) === Number(currentApartment)) {
        clearReviews();

        //let singleMessage = makeReview(data.username, data.email, data.message, data.date, data.time);
        //messageDiv.appendChild(singleMessage);
    }

}

function clearReviews() {
    messageDiv.innerHTML = ''; // Clear existing reviews
    allReviews.forEach(review => {
        if (Number(review.apartment) === Number(currentApartment)) {
            let singleMessage = makeReview(review.username, review.email, review.message, review.date, review.time);
            messageDiv.appendChild(singleMessage);
        }
    });
}

