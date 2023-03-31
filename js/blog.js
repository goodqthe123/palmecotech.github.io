const blogs = [
   {
    image: '../blog/blogImg/asssssssssssssssssssssss_The_background_is_about_environmental__5f886a97-c4a5-4f33-a246-6435a080b78c.png',
    title: 'Palmeco的誕生',
    date: '2023年3月16日',
    description: "Palmeco起源故事",
    link: '../blog/blog1.html'
  }
  ,

    // Add more news items here
];

const relatedNews = document.getElementById('related-news');
const selectedblogs = getRandomItems(blogs, 7);

selectedblogs.forEach(item => {
    const newsItem = `
        <div class="post-item">
            <div class="post-img">
            <a href="${item.link}">
                <img src="${item.image}" />
                </a>
            </div>
            <div class="post-text">
                <a href="${item.link}">${item.title}</a>
                <div class="post-meta">
                    <p>${item.date}</p>
                </div>
            </div>
        </div>
    `;
    relatedNews.insertAdjacentHTML('beforeend', newsItem);
});

function getRandomItems(items, numItems) {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
}


