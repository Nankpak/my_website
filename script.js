const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');
const downloadImageButton = document.getElementById('downloadImageButton');
const profileImage = document.getElementById('my-image');

if (downloadImageButton && profileImage) {
  downloadImageButton.addEventListener('click', () => {
    const imageUrl = profileImage.src;
    const fileName = imageUrl.split('/').pop().split('?')[0] || 'profile-image.jpg';
    const link = document.createElement('a');

    link.href = imageUrl;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = bookingForm.name.value.trim();
  const email = bookingForm.email.value.trim();
  const message = bookingForm.message.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill in all fields before sending your booking request.';
    formMessage.style.color = '#fda4af';
    return;
  }

  formMessage.textContent = 'Thanks! Your booking request has been received. I will contact you soon.';
  formMessage.style.color = '#86efac';
  bookingForm.reset();
});
