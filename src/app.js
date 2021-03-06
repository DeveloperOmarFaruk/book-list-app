/* 
1. DOM Selection
2. Event Listner added
3. Basic Validation
4. Creating Elements
5. Append
*/

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('#btn');
const bookList = document.querySelector('#book-list');



btn.addEventListener('click', function(e) {
    e.preventDefault();

    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Please, Input validation information...')
    } else {
        const newRow = document.createElement('tr');

        // Creat new title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);


        // Creat new title
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);


        // Creat new title
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);



        bookList.appendChild(newRow);

    }
})