const postDetailsKey = 'postDetails';
const postInfo = JSON.parse(localStorage.getItem(postDetailsKey));

const postWrap = document.createElement('div');
postWrap.classList.add('post_wrap');

const post = document.createElement('div');
post.classList.add('post');
post.innerHTML = `
<h4>UserID: ${postInfo.userId}</h4>
<h4>ID: ${postInfo.id}</h4>
<h4>Title: ${postInfo.title}</h4>
<p>body: ${postInfo.body}</p>`;

// {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor
//     quam autem quasi\nreiciendis et nam sapiente accusantium"
// },

const allCommentsWrap = document.createElement('div');
allCommentsWrap.classList.add('comments_wrap');

const userCommentsBtn = document.createElement('button');
userCommentsBtn.id = 'comments_details_btn';
userCommentsBtn.innerText = 'show all comments';
userCommentsBtn.onclick = function (e) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postInfo.id}/comments`)
        .then(response => response.json())
        .then(comments => {
            for (const comment of comments) {
                const commentWrap = document.createElement('div');
                commentWrap.classList.add('comment');
                commentWrap.innerHTML = `
                <h4>postId: ${comment.postId}</h4>
                <h4>ID: ${comment.id}</h4>
                <h4>name: ${comment.name}</h4>
                <p>email: ${comment.email}</p>
                <p>body: ${comment.body}</p>`;

                document.body.appendChild(commentWrap);
                allCommentsWrap.append(commentWrap);
            }
        });
}

postWrap.append(post);
post.append(userCommentsBtn);
document.body.append(postWrap, allCommentsWrap);