document.addEventListener('DOMContentLoaded', () => {
    const ipAddressDiv = document.getElementById('ip-address');

    // Function to fetch and display the IP address
    function displayIPAddress() {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                ipAddressDiv.textContent = `Your IP: ${data.ip}`;
            })
            .catch(() => {
                ipAddressDiv.textContent = 'Your IP: Not available';
            });
    }

    // Call the function on load to display the IP address
    displayIPAddress();
});
