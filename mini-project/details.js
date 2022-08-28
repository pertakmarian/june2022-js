const detailsKey = 'details';
const userInfo = JSON.parse(localStorage.getItem(detailsKey));

const postsTitleWrap = document.createElement('div');
postsTitleWrap.classList.add('post_title_wrap');

const userWrap = document.createElement('div');
userWrap.classList.add('user_wrap');

const user = document.createElement('div');
user.classList.add('user');
user.innerHTML = `
<h4>ID: ${userInfo.id}</h4>
<h4>name: ${userInfo.name}</h4>
<p>username: ${userInfo.username}</p>
<p>email: ${userInfo.email}</p>
<h4>address: </h4>
<p>street - ${userInfo.address.street}</p>
<p>city - ${userInfo.address.city}</p>
<p>zipcode - ${userInfo.address.zipcode}</p>
<p>geo: lat - ${userInfo.address.geo.lat}; lng - ${userInfo.address.geo.lng}</p>
<p>phone: ${userInfo.phone}</p>
<p>website: ${userInfo.website}</p>
<h4>company: </h4>
<p>name: ${userInfo.company.name}</p>
<p>catchPhrase: ${userInfo.company.catchPhrase}</p>
<p>bs: ${userInfo.company.bs}</p>`;

const userPostBtn = document.createElement('button');
userPostBtn.id = 'user_post_btn';
userPostBtn.innerText = 'post of current user';
userPostBtn.onclick = function (e) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userInfo.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                const postTitle = document.createElement('p');
                postTitle.innerText = `${post.title}`;

                const postContainer = document.createElement('div');
                postContainer.classList.add('posts_title_container');

                const postDetailsBtn = document.createElement('button');
                postDetailsBtn.id = 'post_details_btn';
                postDetailsBtn.innerText = 'post details';
                postDetailsBtn.onclick = function (e) {
                    localStorage.setItem('postDetails', JSON.stringify(post));
                    window.location.href = 'post-detailsUser.html?id=' + post.id;
                }
                postContainer.append(postTitle, postDetailsBtn);
                postsTitleWrap.append(postContainer);
            }
        });
}

userWrap.append(user, userPostBtn);
document.body.append(userWrap, postsTitleWrap);

