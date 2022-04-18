const instaTouch = require('instatouch');

// Scrape comments from a post
// For example from this post https://www.instagram.com/p/B7wOyffArc5/
// In this example post id will be B7wOyffArc5 or you can set full URL
(async () => {
    try {
        const options = { 
            count: 100,
            session: "sessionid=236651314%3AqCAHs2BmxB2Wzd%3A3"
            //session: process.env.INSTAGRAM_SESSION_ID//
         }; 
        const comments = await instaTouch.comments('B7wOyffArc5', options);
        console.log(comments);
    } catch (error) {
        console.log(error);
    }
})();