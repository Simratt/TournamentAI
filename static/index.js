// Example of what might be in your HTML/JS
async function getHaiku() {
    try {
        const response = await fetch('/generate-haiku', {
            method: 'POST'
        });
        const data = await response.json();
        document.getElementById('haiku-display').textContent = data.haiku;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('haiku').textContent = 'Error generating haiku';
    }
}
