// script.js
document.getElementById('internForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for validation
  
    // Get form values
    const startDate = document.getElementById('start-date').value;
    const companyName = document.getElementById('company-name').value;
    const companyAddress = document.getElementById('company-address').value;
    const mentorName = document.getElementById('mentor-name').value;
    const mentorContact = document.getElementById('mentor-contact').value;
    const mentorEmail = document.getElementById('mentor-email').value;
    const companyReg = document.getElementById('company-reg').value;
    const city = document.getElementById('city').value;
    const stipend = document.getElementById('stipend').value;
    const offerLetter = document.getElementById('offer-letter').files[0];
  
    // Validate required fields
    if (
      !startDate ||
      !companyName ||
      !companyAddress ||
      !mentorName ||
      !mentorContact ||
      !mentorEmail ||
      !companyReg ||
      !city ||
      !stipend ||
      !offerLetter
    ) {
      alert('Please fill out all fields.');
      return;
    }
  
    // Validate contact number
    if (!mentorContact.match(/^\d{10}$/)) {
      alert('Please enter a valid 10-digit contact number.');
      return;
    }
  
    // If all checks pass
    alert('Form submitted successfully!');
  });
  