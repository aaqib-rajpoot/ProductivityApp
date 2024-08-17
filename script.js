// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('save-button').addEventListener('click', function(event) {
    event.preventDefault();

    const entryText = document.getElementById('entry-text').value;
    const entryDate = new Date().toLocaleString();

    if (entryText.trim() !== "") {
        const entry = document.createElement('div');
        entry.classList.add('entry');
        entry.innerHTML = `<p>${entryText}</p><small>${entryDate}</small>`;

        document.querySelector('.diary-page').appendChild(entry);
        document.getElementById('entry-text').value = ""; // Clear the textarea
    } else {
        alert('Please enter some text.');
    }
});


document.getElementById('new-entry-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const entryText = document.getElementById('entry-text').value;
    if (entryText.trim() !== '') {
        const entryList = document.getElementById('entries-list');
        const newEntry = document.createElement('li');
        newEntry.textContent = entryText;
        entryList.prepend(newEntry); // Adds the new entry to the top of the list

        // Clear the text area
        document.getElementById('entry-text').value = '';
    }
});

document.getElementById('search-entries').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const entries = document.querySelectorAll('#entries-list li');
    entries.forEach(function(entry) {
        const entryText = entry.textContent.toLowerCase();
        if (entryText.includes(searchQuery)) {
            entry.style.display = 'block';
        } else {
            entry.style.display = 'none';
        }
    });
});

// document.getElementById('new-entry-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const entryText = document.getElementById('entry-text').value;
//     if (entryText.trim() !== '') {
//         const entryList = document.getElementById('entries-list');
//         const newEntry = document.createElement('li');

//         // Create the text node for the entry
//         const entryContent = document.createElement('span');
//         entryContent.textContent = entryText;
//         newEntry.appendChild(entryContent);

//         // Create the Edit button
//         const editButton = document.createElement('button');
//         editButton.textContent = 'Edit';
//         editButton.className = 'edit-button';
//         newEntry.appendChild(editButton);

//         // Create the Delete button
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.className = 'delete-button';
//         newEntry.appendChild(deleteButton);

//         entryList.prepend(newEntry); // Adds the new entry to the top of the list

//         // Clear the text area
//         document.getElementById('entry-text').value = '';
//     }
// });

// // Edit and Delete functionality
// document.getElementById('entries-list').addEventListener('click', function(e) {
//     if (e.target.className === 'edit-button') {
//         const entry = e.target.parentNode;
//         const entryContent = entry.querySelector('span').textContent;
//         const newText = prompt('Edit your entry:', entryContent);

//         if (newText !== null) { // If the user didn't cancel the prompt
//             entry.querySelector('span').textContent = newText;
//         }
//     } else if (e.target.className === 'delete-button') {
//         const entry = e.target.parentNode;
//         entry.remove();
//     }
// });


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle new diary entries
document.getElementById('new-entry-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const entryText = document.getElementById('entry-text').value;
    if (entryText.trim() !== '') {
        const entryList = document.getElementById('entries-list');
        const newEntry = document.createElement('li');

        // Get the current date and time
        const now = new Date();
        const dateTime = now.toLocaleString();

        // Create the text node for the entry
        const entryContent = document.createElement('span');
        entryContent.textContent = `${dateTime}: ${entryText}`;
        newEntry.appendChild(entryContent);

        // Create the Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        newEntry.appendChild(editButton);

        // Create the Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        newEntry.appendChild(deleteButton);

        entryList.prepend(newEntry); // Adds the new entry to the top of the list

        // Clear the text area
        document.getElementById('entry-text').value = '';
    }
});

// Edit and Delete functionality
document.getElementById('entries-list').addEventListener('click', function(e) {
    if (e.target.className === 'edit-button') {
        const entry = e.target.parentNode;
        const entryContent = entry.querySelector('span').textContent.split(': ').slice(1).join(': '); // Extract the content after the timestamp
        const newText = prompt('Edit your entry:', entryContent);

        if (newText !== null && newText.trim() !== '') { // If the user didn't cancel the prompt and provided valid text
            const now = new Date();
            const dateTime = now.toLocaleString();
            entry.querySelector('span').textContent = `${dateTime}: ${newText}`;
        }
    } else if (e.target.className === 'delete-button') {
        const entry = e.target.parentNode;
        entry.remove();
    }
});

// Search functionality
document.getElementById('search-entries').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const entries = document.querySelectorAll('#entries-list li');
    entries.forEach(function(entry) {
        const entryText = entry.querySelector('span').textContent.toLowerCase();
        if (entryText.includes(searchQuery)) {
            entry.style.display = 'block';
        } else {
            entry.style.display = 'none';
        }
    });
});



document.getElementById('search-entries').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const entries = document.querySelectorAll('#entries-list li');
    entries.forEach(function(entry) {
        const entryText = entry.querySelector('span').textContent.toLowerCase();
        if (entryText.includes(searchQuery)) {
            entry.style.display = 'block';
        } else {
            entry.style.display = 'none';
        }
    });
});

