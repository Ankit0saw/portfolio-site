// for the hamburger menu toggle
function toggleMenu() {
    const navList = document.querySelector('.navlist');
    navList.classList.toggle('active');

    const icon = document.querySelector('.menu-icon');
    icon.classList.toggle('active');
}

// for image tilting effect
const tiltContainer = document.querySelector('.img-hero');
const tiltImg = tiltContainer.querySelector('.dp');

  tiltContainer.addEventListener('mousemove', (e) => {
    const rect = tiltContainer.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the container
    const y = e.clientY - rect.top;  // y position within the container

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    tiltImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  tiltContainer.addEventListener('mouseleave', () => {
    tiltImg.style.transform = `rotateX(0deg) rotateY(0deg)`;
});


// for typing effect on the home page
const phrases = [
    "Fullstack development",
    "Web designing",
    "Frontend magic",
    "Backend architecture"
  ];
  
  const typedText = document.getElementById("typed-text");
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.substring(0, charIndex);
  
    typedText.textContent = currentText;
  
    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        charIndex++;
        setTimeout(type, 100);
      } else {
        isDeleting = true;
        setTimeout(type, 1500); // Pause before deleting
      }
    } else {
      if (charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
      } else {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", type);
  
// for sending message in contact form
document.getElementById("contact-form").addEventListener("submit", function(e) {
 e.preventDefault(); // prevent page reload

  const form = e.target;
  const data = new FormData(form);

  fetch("https://formsubmit.co/ajax/ankitkrrsss@gmail.com", {
    method: "POST",
    body: data
  })
  .then(response => {
    if (response.ok) {
      alert("Message sent successfully!");
      form.reset(); // Clear the form
    } else {
      document.getElementById("status-msg").textContent = "Failed to send message.";
    }
  })
  .catch(error => {
    document.getElementById("status-msg").textContent = "An error occurred.";
    console.error(error);
  });
});