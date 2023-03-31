const newsItems = [
   {
    imgUrl: '../companyNews/companyNewsImg/news161.jpg',
    title: 'Palmeco實現聯合國可持續發展目標',
    date: '2022年5月21日',
    link: '../companyNews/companyNews16.html'
  },
  {
    imgUrl: '../companyNews/companyNewsImg/news151.png',
    title: '新里程！ 「棕科超輕質地聚牆體」納入建造業創科基金的預先批核名單產品',
    date: '2022年9月20日',
    link: '../companyNews/companyNews15.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news141.jpg',
    title: '深圳家具展',
    date: '2021年3月17日',
    link: '../companyNews/companyNews14.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news131.jpg',
    title: '棕科地聚保溫芯參與支持2020元創坊deTour展覽',
    date: '2020年11月28日',
    link: '../companyNews/companyNews13.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news121.jpg',
    title: '棕科和Nami共同參與推動深港綠色建築發展',
    date: '2022年8月31日',
    link: '../companyNews/companyNews12.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news111.jpg',
    title: '慶祝綠色建築議會十週年 棕科分享創新經驗',
    date: '2019年12月21日',
    link: '../companyNews/companyNews11.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news101.jpg',
    title: '棕科地聚保溫芯入圍2019年世界創新研發100項大獎',
    date: '2019年12月12日',
    link: '../companyNews/companyNews10.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news91.jpg',
    title: '棕科地聚保溫板牆體 耐火性能高達到4小時',
    date: '2019年12月12日',
    link: '../companyNews/companyNews9.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news81.jpg',
    title: '迪拜設計週展出棕科創新可持續產品',
    date: '2019年11月26日',
    link: '../companyNews/companyNews8.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news71.jpg',
    title: '與香港建築師分享, 建材創新經驗',
    date: '2019年9月4日',
    link: '../companyNews/companyNews7.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news61.jpg',
    title: '棕科在第47屆國際發明展上獲得金獎',
    date: '2019年4月12日',
    link: '../companyNews/companyNews6.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news51.jpg',
    title: '棕科是菲律賓政府住房建築物料的官方供應商',
    date: '2019年4月8日',
    link: '../companyNews/companyNews5.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news41.jpg',
    title: '棕科在第一屆亞洲發明展上獲得金獎和全場總冠軍的最高榮譽',
    date: '2018年12月7日',
    link: '../companyNews/companyNews4.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news31.jpg',
    title: 'Bond Interiors 在設計比賽中使用棕科環保板',
    date: '2018年12月6日',
    link: '../companyNews/companyNews3.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news21.jpg',
    title: '棕科在舊金山設計週首次亮相',
    date: '2018年6月15日',
    link: '../companyNews/companyNews2.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news1.jpg',
    title: 'Palmeco棕科建材參加2016年廣東21世紀海上絲綢之路國際博覽會',
    date: '2017年10月25日',
    link: '../companyNews/companyNews1.html'
  }
  ,
  {
    imgUrl: '../companyNews/companyNewsImg/news171.jpg',
    title: 'Palmeco 參加 FSBI Mumbai 2023 取得圓滿成功',
    date: '2023年2月09日',
    link: '../companyNews/companyNews17.html'
  }
    // Add more news items here
];

const relatedNews = document.getElementById('related-news');
const selectedNewsItems = getRandomItems(newsItems, 7);

selectedNewsItems.forEach(item => {
    const newsItem = `
        <div class="post-item">
            <div class="post-img">
            <a href="${item.link}">
                <img src="${item.imgUrl}" />
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