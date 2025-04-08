// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  const continueBtn = document.querySelector('.continue-btn');
  const phoneInput = document.getElementById('phone');

  continueBtn.addEventListener('click', function () {
    const phoneNumber = phoneInput.value.trim();

    if (phoneNumber === '' || phoneNumber.length < 10) {
      alert('Please enter a valid phone number.');
    } else {
      // Redirect to another page or show success message
      alert('OTP sent to ' + phoneNumber);
      // Example redirect:
      window.location.href = 'home.html'; // Apna page yahan daal lena
    }
  });
});
