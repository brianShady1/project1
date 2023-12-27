document.getElementById('nameSubmitButton').addEventListener('click', function() {
  const name = document.getElementById('nameInput').value.trim();

  if (name !== '') {
    document.getElementById('nameContainer').style.display = 'none';
    document.getElementById('proposalContainer').style.display = 'block';
    
    document.getElementById('loading').style.display = 'none'; // Hide loading animation initially

    document.getElementById('yesButton').addEventListener('click', function() {
      document.getElementById('loading').style.display = 'block'; // Show loading animation

      // Simulate delay for loading (you can replace this timeout with actual tasks)
      setTimeout(function() {
        document.getElementById('loading').style.display = 'none'; // Hide loading animation
        const message = `Hi ${name}, these past weeks have been a bit challenging, I'm sorry if sometimes i feel heavy for you but i am really doing my best.  I hope this little webpage brings a smile to your face. Thank you for saying yes—it means a lot. And actually this is my first time ever creating this webpage ever, its just for you. I love you and i appreciate you saying yes , I'm excited to see where it takes us!`;

        const currentDate = new Date().toLocaleString();
        const finalMessage = `${message}<br><br><strong>Date and Time:</strong> ${currentDate}<br><br><em>Screenshot the whole screen and send it to the owner/Brian.</em>`;
        
        document.getElementById('message').innerHTML = finalMessage;
      }, 2000); // Simulating a 2-second delay (replace with your actual task)
    });
  } else {
    alert('Please enter your name.');
  }
});

  
  
  