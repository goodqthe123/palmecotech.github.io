const themeButtonsContainer = document.querySelector('.theme-buttons-container');
const patternFilter = document.querySelector('#pattern-filter');
const colorFilter = document.querySelector('#color-filter');

const colors = [
  { name: 'AY001 -ST', imgUrl: 'img/colorPalette/MB001-ST.png', pattern: 'stone', color: 'black' },
  { name: 'AY002-WD', imgUrl: 'img/colorPalette/MB002-WD.png', pattern: 'wood', color: 'light-brown' },
  { name: 'AY003-ST', imgUrl: 'img/colorPalette/MB003-ST.png', pattern: 'stone', color: 'gray' },
  { name: 'AY004-WD', imgUrl: 'img/colorPalette/MB004-WD.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'AY005-WD', imgUrl: 'img/colorPalette/MB005-WD.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'AY006-WD', imgUrl: 'img/colorPalette/MB006-WD.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'AY008-WD', imgUrl: 'img/colorPalette/MB008-WD.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'AY009-WD', imgUrl: 'img/colorPalette/MB009-WD.png', pattern: 'wood', color: 'black' },
  { name: 'AY011-WD', imgUrl: 'img/colorPalette/MB011-WD.png', pattern: 'wood', color: 'light-brown' },
  { name: 'AY012-MS', imgUrl: 'img/colorPalette/MB012-MS.png', pattern: 'cloth', color: 'beige' },
  { name: 'AY0013-WD',imgUrl:'img/colorPalette/MB0013-WD.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'AY015-GL', imgUrl: 'img/colorPalette/MB015-GL.png', pattern: 'plain', color: 'red' },
  { name: 'AY017-WD', imgUrl: 'img/colorPalette/MB017-WD.png', pattern: 'wood', color: 'light-brown' },
  { name: 'AY018-WD', imgUrl: 'img/colorPalette/MB018-WD.png', pattern: 'wood', color: 'gray' },
  { name: 'AY020-WD', imgUrl: 'img/colorPalette/MB020-WD.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'AY021-WD', imgUrl: 'img/colorPalette/MB021-WD.png', pattern: 'wood', color: 'gray' },
  { name: 'AY022-WD', imgUrl: 'img/colorPalette/MB022-WD.png', pattern: 'wood', color: 'light-brown' },
  { name: 'AY023-MS', imgUrl: 'img/colorPalette/MB023-MS.png', pattern: 'cloth', color: 'light-brown' },
  { name: 'AY025-WD', imgUrl: 'img/colorPalette/MB025-WD.png', pattern: 'wood', color: 'light-brown' },
  { name: 'AY027-ST', imgUrl: 'img/colorPalette/MB027-ST.png', pattern: 'stone', color: 'gray' },
  { name: 'AY028-WD', imgUrl: 'img/colorPalette/MB028-WD.png', pattern: 'wood', color: 'light-brown' },
  { name: 'AY029-WD', imgUrl: 'img/colorPalette/MB029-WD.png', pattern: 'wood', color: 'beige' },
  { name: 'AY031-WD', imgUrl: 'img/colorPalette/MB031-WD.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'AY032-PC', imgUrl: 'img/colorPalette/MB032-PC.png', pattern: 'plain', color: 'black' },
  { name: 'AY033-MS', imgUrl: 'img/colorPalette/MB033-MS.png', pattern: 'wood', color: 'white' },
  { name: 'AY034-WD', imgUrl: 'img/colorPalette/MB034-WD.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'AY037-WD', imgUrl: 'img/colorPalette/MB037-WD.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'AY038-WD', imgUrl: 'img/colorPalette/MB038-WD.png', pattern: 'wood', color: 'light-brown' },
  { name: 'AY040-WD', imgUrl: 'img/colorPalette/MB040-WD.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'AY042-PC', imgUrl: 'img/colorPalette/MB042-PC.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'AY043-WD', imgUrl: 'img/colorPalette/MB043-WD.png', pattern: 'wood', color: 'gray' },
  { name: 'AY044-WD', imgUrl: 'img/colorPalette/MB044-WD.png', pattern: 'wood', color: 'black' },
  { name: 'AY045-WD', imgUrl: 'img/colorPalette/MB045-WD.png', pattern: 'wood', color: 'light-brown' },
  { name: 'AY049-MS', imgUrl: 'img/colorPalette/MB049-MS.png', pattern: 'stone', color: 'gray' },
//金頂
 { name: 'F91001-1', imgUrl: 'img/colorPalette/F91001-1.png', pattern: 'wood', color: 'light-brown' },
  { name: 'F91001-3', imgUrl: 'img/colorPalette/F91001-3.png', pattern: 'wood', color: 'gray' },
  { name: 'F91001-5', imgUrl: 'img/colorPalette/F91001-5.png', pattern: 'wood', color: 'black' },
  { name: 'F91002-1', imgUrl: 'img/colorPalette/F91002-1.png', pattern: 'wood', color: 'light-brown' },
  { name: 'F91002-3', imgUrl: 'img/colorPalette/F91002-3.png', pattern: 'wood', color: 'light-brown' },
  { name: 'F91002-4', imgUrl: 'img/colorPalette/F91002-4.png', pattern: 'wood', color: 'light-brown' },
  { name: 'F91002-5', imgUrl: 'img/colorPalette/F91002-5.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'F91002-6', imgUrl: 'img/colorPalette/F91002-6.png', pattern: 'wood', color: 'dark-brown' },
  { name: 'F91002-7', imgUrl: 'img/colorPalette/F91002-7.png', pattern: 'wood', color: 'dark-brown' },

  { name: 'F9005-1', imgUrl: 'img/colorPalette/F9005-1.png', pattern: 'cloth', color: 'gray' },
  { name: 'F9005-2', imgUrl: 'img/colorPalette/F9005-2.png', pattern: 'cloth', color: 'blue' },
  { name: 'F9005-3', imgUrl: 'img/colorPalette/F9005-3.png', pattern: 'cloth', color: 'blue' },
  { name: 'F9005-5', imgUrl: 'img/colorPalette/F9005-5.png', pattern: 'cloth', color: 'gray' },
  { name: 'F9005-6', imgUrl: 'img/colorPalette/F9005-6.png', pattern: 'cloth', color: 'gray' },
  { name: 'F9001-1', imgUrl: 'img/colorPalette/F9001-1.png', pattern: 'cloth', color: 'beige' },
  { name: 'F9001-2', imgUrl: 'img/colorPalette/F9001-2.png', pattern: 'cloth', color: 'beige' },
  { name: 'F9001-3', imgUrl: 'img/colorPalette/F9001-3.png', pattern: 'cloth', color: 'gray' },
  { name: 'F9001-5', imgUrl: 'img/colorPalette/F9001-5.png', pattern: 'cloth', color: 'light-brown' },
  
  { name: 'F9001-10', imgUrl: 'img/colorPalette/F9001-10.png', pattern: 'cloth', color: 'blue' },
  { name: 'F9006-1', imgUrl: 'img/colorPalette/F9006-1.png', pattern: 'cloth', color: 'white' },
  { name: 'F9006-2', imgUrl: 'img/colorPalette/F9006-2.png', pattern: 'cloth', color: 'blue' },
  { name: 'F9006-3', imgUrl: 'img/colorPalette/F9006-3.png', pattern: 'cloth', color: 'white' },
  { name: 'F9006-4', imgUrl: 'img/colorPalette/F9006-4.png', pattern: 'cloth', color: 'blue' },
  { name: 'F9006-5', imgUrl: 'img/colorPalette/F9006-5.png',  pattern: 'cloth', color: 'white' },
  { name: 'F9006-6', imgUrl: 'img/colorPalette/F9006-6.png', pattern: 'cloth', color: 'light-brown' },
  { name: 'F9006-7', imgUrl: 'img/colorPalette/F9006-7.png', pattern: 'wood', color: 'light-brown' },
  { name: 'F9006-8', imgUrl: 'img/colorPalette/F9006-8.png', pattern: 'cloth', color: 'blue' },

  { name: 'F9006-9', imgUrl: 'img/colorPalette/F9006-9.png', pattern: 'cloth', color: 'blue' },
  { name: 'F91003-1', imgUrl: 'img/colorPalette/F91003-1.png', pattern: 'stone', color: 'white' }, 
];
// 顯示番色卡
colors.forEach(color => {
  const span = document.createElement('span');
  span.classList.add('theme-buttons');
  span.dataset.color = `url(../${color.imgUrl})`;
  span.style.backgroundImage = `url(${color.imgUrl})`;
  span.dataset.pattern = color.pattern;
  span.dataset.colorName = color.color;
  span.textContent = color.name;
  themeButtonsContainer.appendChild(span);
});

//制左右郁
document.querySelector('.switcher-btn').onclick = () => {
  document.querySelector('.color-switcher').classList.toggle('active');
};
//filter
const filterColors = () => {
  const pattern = patternFilter.value;
  const colorName = colorFilter.value;
  const buttons = document.querySelectorAll('.theme-buttons');
  buttons.forEach(button => {
    const buttonPattern = button.dataset.pattern;
    const buttonColor = button.dataset.colorName;
    if ((!pattern || buttonPattern === pattern) && (!colorName || buttonColor === colorName)) {
      button.style.display = 'inline-block';
    } else {
      button.style.display = 'none';
    }
  });
};

patternFilter.addEventListener('change', filterColors);
colorFilter.addEventListener('change', filterColors);
filterColors();



    //依度改右邊果行製
    document.querySelector('.switcher-btn').onclick = () =>{
      document.querySelector('.color-switcher').classList.toggle('active');
  };









  let themeButtons = document.querySelectorAll('.theme-buttons');

  themeButtons.forEach(color => {
//依度改色
      color.addEventListener('click', () => {
          let dataColor = color.getAttribute('data-color');
          document.querySelector(':root').style.setProperty('--main-background-image', dataColor);
      })
  })





  //依度改字

// Get the button elements
  const colorSwitcher = document.querySelectorAll('.theme-buttons');

  // Get the H1 element by its ID
  const colorNameTitle = document.querySelector('.colorPaletteName');

  // Add click event listeners to the buttons using forEach
  colorSwitcher.forEach(colorSwitcher =>{
      colorSwitcher.addEventListener('click',() => {
          colorNameTitle.textContent = colorSwitcher.textContent;

      });
  });
