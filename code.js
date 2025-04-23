// Example 1: Unsafe DOM manipulation with innerHTML
function displayUserComment(comment) {
    // Vulnerable: Directly inserts user input into DOM without sanitization
    document.getElementById('comments').innerHTML = comment;
}

// Example 2: Unsafe URL parameter handling
function loadProfile() {
    // Vulnerable: Extracts URL parameter and inserts it without validation
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    document.getElementById('welcome').innerHTML = 'Welcome, ' + username + '!';
}

// Example 3: Unsafe document.write usage
function showMessage(msg) {
    // Vulnerable: Uses document.write with unvalidated input
    document.write('<div class="message">' + msg + '</div>');
}

// Example 4: Eval on user input
function calculateResult() {
    // Vulnerable: Uses eval on user-provided input
    const userFormula = document.getElementById('formula').value;
    const result = eval(userFormula);
    document.getElementById('result').textContent = result;
}

// Example 5: Creating script tags dynamically
function loadExternalScript(scriptUrl) {
    // Vulnerable: Creates script elements with user-controlled URLs
    const script = document.createElement('script');
    script.src = scriptUrl;
    document.head.appendChild(script);
}

// Example 6: Unsafe usage of jQuery
function updateProfileJQuery(userData) {
    // Vulnerable: Using jQuery to set HTML content with unsanitized data
    $('#profile-name').html(userData.name);
    $('#profile-bio').html(userData.bio);
}

// Example 7: Unsafe template string interpolation in innerHTML
function renderTemplate(templateData) {
    // Vulnerable: Template literals with user data directly inserted into HTML
    const template = `
        <div class="user-card">
            <h3>${templateData.username}</h3>
            <div class="bio">${templateData.biography}</div>
        </div>
    `;
    document.querySelector('.container').innerHTML = template;
}

// Example 8: Unsafe attribute setting
function setImageSource(imageUrl) {
    // Vulnerable: Setting attributes without validation
    // Can be exploited with javascript:alert(document.cookie)
    document.getElementById('profile-image').setAttribute('src', imageUrl);
}

// Example 9: DOM-based XSS via location.hash
window.onload = function() {
    // Vulnerable: Using fragment identifier without sanitization
    const hash = location.hash.substring(1);
    document.getElementById('hashtag').innerHTML = 'Current hashtag: ' + hash;
}

// Example 10: Inline event handlers with user input
function bindClickHandler(buttonId, handlerCode) {
    // Vulnerable: Creating event handlers with user-supplied code
    const button = document.getElementById(buttonId);
    button.setAttribute('onclick', handlerCode);
}
