
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            const {id, name} = user;
            const wrap = document.getElementById('users_wrap');
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');

            userDiv.innerHTML = `
            <h3>ID: ${id}</h3>
            <h3>Name: ${name}</h3>`;

            const userBtn = document.createElement('button');
            userBtn.id = 'user_btn';
            userBtn.innerText = 'user details';
            userBtn.onclick = function () {
                localStorage.setItem('details', JSON.stringify(user));
                window.location.href = 'detailsUser.html?id=' + id;
            }
            userDiv.append(userBtn);
            wrap.appendChild(userDiv);
        }
    });