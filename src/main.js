function contact(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let errorElement = document.getElementById("error");

  errorElement.textContent = "";

  if (name.length < 3) {
    errorElement.textContent = "Name must be at least 3 characters long.";
    return;
  }

  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    errorElement.textContent = "Enter a valid email address.";
    return;
  }

  if (message.length < 5) {
    errorElement.textContent = "Message must be at least 5 characters long.";
    return;
  }

  errorElement.style.color = "greenyellow";
  errorElement.textContent = "Form submitted successfully!";

  setTimeout(() => {
    errorElement.textContent = "";
  }, 5000);

  document.querySelector("form").reset();
}

document.getElementById("edit-bio").addEventListener("click", function () {
    document.getElementById("bio-content").style.display = "none";
    document.getElementById("bio-form").style.display = "block";

    document.getElementById("name").value = document.getElementById("bio-name").textContent;
    document.getElementById("dob").value = "2000-01-01";
    document.getElementById("nationality").value = document.getElementById("bio-nationality").textContent;

    let educationList = document.querySelectorAll("#bio-education li");
    let educationArray = [];
    educationList.forEach(item => educationArray.push(item.textContent));
    document.getElementById("education").value = educationArray.join(", ");
});

function saveBio(event) {
    event.preventDefault();

    document.getElementById("bio-name").textContent = document.getElementById("name").value;
    document.getElementById("bio-dob").textContent = document.getElementById("dob").value;
    document.getElementById("bio-nationality").textContent = document.getElementById("nationality").value;

    let newEducation = document.getElementById("education").value.split(",");
    let educationList = document.getElementById("bio-education");
    educationList.innerHTML = "";
    newEducation.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.trim();
        educationList.appendChild(li);
    });

    document.getElementById("bio-content").style.display = "block";
    document.getElementById("bio-form").style.display = "none";
}

function showAnswer(type) {
    let names = ["Vraj", "Sakshi", "Deep"];
    let nationality = ["India", "UAE", "United States of America"];
    let role = ["Back-End Developer", "Front-End Developer", "Gentoo Penguin"];
    let company = ["Deep's Institute of Artificial Intelligence", "DeepWorld Designs", "Chihuahua Technologies"];
    let project = ["Apache Kafka", "Apache Airavata", "Spoof Halwa!"];

    let hour = new Date().getHours();
    let turn = hour % 3;

    let answers = {
        name: `My name is ${names[turn]}. How are you my friend?`,
        nationality: `I am from ${nationality[turn]}.`,
        role: `I work as a ${role[turn]}. As a ${role[turn]}`,
        company: `I am currently associated with ${company[turn]}.`,
        project: `Right now, I am working on a project called ${project[turn]}.`
    };

    let answerBox = document.getElementById(`${type}-box`);
    answerBox.innerHTML = ""; // Clear previous text
    answerBox.style.animation = "none";
    void answerBox.offsetWidth; // Force reflow to restart animation

    let text = answers[type];
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            answerBox.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 50);
        }
    }

    answerBox.style.animation = "typing 2s steps(end, end)";
    typeEffect();
}
