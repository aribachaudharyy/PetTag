// ========================================
// PET INFORMATION
// ========================================

const pets = {

    luna: {
        name: "Luna",
        age: "3 years",
        breed: "Indie",
        colour: "Calico",
        gender: "Female",
        image: "images/luna.jpg",

        description:
            "Luna is a loved family cat. If you found her, please contact her owner."
    },

    pandu: {
        name: "Pandu",
        age: "3 years",
        breed: "Indie",
        colour: "White and Black with stripes on the back leg",
        gender: "Female",
        image: "images/pandu.jpg",

        description:
            "Pandu is a loved family cat. If you found her, please contact her owner."
    },

    sheru: {
        name: "Sheru",
        age: "3 years",
        breed: "Indie",
        colour: "Tabby Cat",
        gender: "Female",
        image: "images/sheru.jpg",

        description:
            "Sheru is a loved family cat. If you found her, please contact her owner."
    }

};


// ========================================
// OWNER PHONE NUMBER
// ========================================

// Apna actual number yahan daalna.
// Example:
// const ownerPhone = "919876543210";

const ownerPhone = "918779022561";


// ========================================
// GET CAT FROM QR LINK
// ========================================

const urlParams = new URLSearchParams(
    window.location.search
);

const petID = urlParams.get("pet") || "luna";


// If wrong pet ID is used,
// Luna will be shown instead.

const pet = pets[petID] || pets.luna;


// ========================================
// DISPLAY CAT INFORMATION
// ========================================

document.getElementById("petName").textContent =
    pet.name;

document.getElementById("petImage").src =
    pet.image;

document.getElementById("petImage").alt =
    pet.name;

document.getElementById("description").textContent =
    pet.description;

document.getElementById("petAge").textContent =
    pet.age;

document.getElementById("petBreed").textContent =
    pet.breed;

document.getElementById("petColour").textContent =
    pet.colour;

document.getElementById("petGender").textContent =
    pet.gender;


// ========================================
// CALL OWNER
// ========================================

document.getElementById("callButton").href =
    "tel:+" + ownerPhone;


// ========================================
// LOCATION STATUS
// ========================================

const locationStatus =
    document.getElementById("locationStatus");


// ========================================
// SEND LOCATION
// ========================================

function sendLocation() {

    if (!navigator.geolocation) {

        locationStatus.textContent =
            "❌ Location is not supported on this device.";

        return;
    }


    locationStatus.textContent =
        "📍 Asking for your location...";


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            // Google Maps location

            const mapLink =
                `https://www.google.com/maps?q=${latitude},${longitude}`;


            locationStatus.textContent =
                "✅ Location found!";


            // WhatsApp message

            const message =
                `🐾 PETTAG ALERT\n\n` +
                `I found ${pet.name}.\n\n` +
                `📍 My location:\n${mapLink}\n\n` +
                `Please contact me regarding your cat.`;


            const whatsappURL =
                `https://wa.me/${ownerPhone}?text=${encodeURIComponent(message)}`;


            // Open WhatsApp

            window.location.href =
                whatsappURL;

        },


        function(error) {

            locationStatus.textContent =
                "❌ Location permission was not allowed.";

            alert(
                "Please allow location permission to share your location."
            );

        },


        {
            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0
        }

    );
}