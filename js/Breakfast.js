fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {    
    document.getElementById('posts').innerHTML = 
    ` ${data.map((post, index) => {
        let titleText = post.body;
        let bodyText = post.body;
        let truncatedTitle = titleText.substr(0, 25);
        let truncatedBody = bodyText.substr(0, 150);
        
        if (index < 15) {
          return `
            <div class="post">
              <div class="post__image">               
                <div class="post__toolbar"><i class="material-icons md-18">share</i></div>
                <img src="https://picsum.photos/600/200/?image=${index * 10}" alt="">
              </div>
              <div class="post__content">
                <div class="post__content--title">${truncatedTitle}</div>
                <div class="post__content--body">${truncatedBody}...</div>
              </div>
            </div>
          `
        }
      }).join("")}      
    `  
  });