console.log("Email", localStorage.getItem("currentUserEmail"));
console.log("Username", localStorage.getItem("currentUsername"));

const firebaseConfig = {
  apiKey: "AIzaSyCnu2CHL6YFeZv1cSWkp4ce0DOdDYzr9z4",
  authDomain: "finalproject-f0e65.firebaseapp.com",
  projectId: "finalproject-f0e65",
  storageBucket: "finalproject-f0e65.firebasestorage.app",
  messagingSenderId: "302894515567",
  appId: "1:302894515567:web:6e6f00068f976fe0e9d49a",
  measurementId: "G-R3TKX7S2C2"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database().ref();

database.once('value', (data) => {
  for (entry in data.val()) {
    showReview(data.val()[entry]);
  }
});

function showReview(review) {
  let emailMatch = review.email === localStorage.getItem("currentUserEmail");
  let usernameMatch = review.username === localStorage.getItem("currentUsername");

  if (emailMatch && usernameMatch) {
    let singleMessage = makeReview(
      review.username,
      review.email,
      review.message,
      review.date,
      review.time,
      review.apartmentName || "Unknown Apartment"  // ← NEW: apartment name
    );
    document.getElementById("userReviewSection").appendChild(singleMessage);
  }
}

// UPDATED to include apartmentName
function makeReview(usernameTxt, emailTxt, messageTxt, dateTxt, timeTxt, apartmentNameTxt) {
  let parentDiv = document.createElement('div');
  parentDiv.className = 'single-message';

  let usernameP = document.createElement('p');
  usernameP.innerHTML = `<strong>User:</strong> ${usernameTxt}`;
  usernameP.className = 'single-message-username';
  parentDiv.append(usernameP);

  let apartmentP = document.createElement('p');
  apartmentP.innerHTML = `<strong>Apartment:</strong> ${apartmentNameTxt}`;  // ← NEW
  apartmentP.className = 'single-message-apartment';
  parentDiv.append(apartmentP);

  let messageP = document.createElement('p');
  messageP.innerHTML = `<strong>Message:</strong> ${messageTxt}`;
  parentDiv.append(messageP);

  let emailP = document.createElement('p');
  emailP.innerHTML = `<strong>Email:</strong> ${emailTxt}`;
  parentDiv.append(emailP);

  let dateP = document.createElement('p');
  dateP.innerHTML = `<strong>Date:</strong> ${dateTxt}`;
  parentDiv.append(dateP);

  let timeP = document.createElement('p');
  timeP.innerHTML = `<strong>Time:</strong> ${timeTxt}`;
  parentDiv.append(timeP);

  return parentDiv;
}