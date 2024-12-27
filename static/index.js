// Example of what might be in your HTML/JS
async function generateHaiku() {
    // Start interval before fetch
    const waitingInterval = setInterval(() => {
        console.log("waiting");
    }, 3000);

    try {
        const response = await fetch('/generate-haiku', {
            method: 'POST'
        });
        const data = await response.json();
        
        // Clear interval after getting response
        clearInterval(waitingInterval);
        
        // Log the haiku
        console.log("Haiku received:", data.haiku);
        
        document.getElementById('haiku-display').textContent = data.haiku;
    } catch (error) {
        // Clear interval if there's an error
        clearInterval(waitingInterval);
        
        console.error('Error:', error);
        document.getElementById('haiku-display').textContent = 'Error generating haiku';
    }
}
