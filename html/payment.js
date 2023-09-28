// Step 1: Initiate Payment Function
function initiatePayment(amount) {
    const api_key = '[8a5effd970d184ae8ea706459e3efe1311093390]'; // Replace with your actual API key
    const apiUrl = 'https://sandbox.paymee.tn/api/v2/payments/create'; // Use the sandbox URL for testing
    // const apiUrl = 'https://app.paymee.tn/api/v2/payments/create'; // Use the live URL for production

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${api_key}`,
    };

    const paymentData = {
      amount: parseFloat(amount),
      note: 'Subscription Payment',
      first_name: 'John', // Replace with buyer's first name
      last_name: 'Doe',  // Replace with buyer's last name
      email: 'test@paymee.tn', // Replace with buyer's email
      phone: '+21611222333',   // Replace with buyer's phone number
      return_url: 'https://www.return_url.tn',    // Replace with the URL to redirect after payment
      cancel_url: 'https://www.cancel_url.tn',    // Replace with the URL to redirect after payment cancellation
      webhook_url: 'https://www.webhook_url.tn',  // Replace with your webhook URL to receive payment status
      order_id: '123456',    // Replace with your own order ID if needed
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(paymentData),
    })
    .then(response => response.json())
    .then(data => {
      handleApiResponse(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  // Step 2: Handle API Response Function
  function handleApiResponse(responseData) {
    if (responseData.status === true) {
      const paymentUrl = responseData.data.payment_url;
      // Redirect the user to the payment form
      window.location.href = paymentUrl;
    } else {
      // Handle the case when the payment initiation was not successful
      console.error('Payment initiation failed:', responseData.message);
      alert('Payment initiation failed. Please try again later.');
    }
  }

  // Step 3: Add Event Listeners
  document.addEventListener('DOMContentLoaded', function() {
    const subscribeButtons = document.querySelectorAll('.subscribe-button');
    subscribeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const amount = button.getAttribute('data-amount');
        initiatePayment(amount);
      });
    });
  });
