let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts =[
    {
        id: 1,
        productNo:'MB1000-4',
        name: '產品名稱 : Master Board 棕櫚環保板 (4mm)',
        price: 194,
        quantity:30,
        image:'img/productList/MasterBoard.png',
        nature:{
            size:['4mm'],
            materials:['MasterBoard']
        }
    }
       
    ,
    {
        id: 15,
        productNo:'AY1000-4',
        name: '產品名稱 : Melaboard 安特板 (4mm)',
        price: 574,
        quantity:30,
        image:'img/productList/Melaboard.png',
        nature:{
            size:['4mm'],
            materials:['Melaboard']
        }
    }
    
    ,
    {
        id: 19,
        productNo:'BWQT-68F1',
        name: '產品名稱 : Wall Panel 牆體(一小時防火牆體)',
        price: 797,
        quantity:30,
        image:'img/productList/GeoWall.png',
        nature:{
            size:['1h'],
            materials:['WallPanel']
        }
    }
    ,
    
    {
        id: 2,
        productNo:'MB1000-6',
        name: '產品名稱 : Master Board 棕櫚環保板 (6mm)',
        price: 278,
        quantity:30,
        image:'img/productList/MasterBoard.png',
        nature:{
            size:['6mm'],
            materials:['MasterBoard']
        }
    }
    
    ,
    {
        id: 3,
        productNo:'MB1000-9',
        name: '產品名稱 : Master Board 棕櫚環保板 (9mm)',
        price: 380,
        quantity:30,
        image:'img/productList/MasterBoard.png',
        nature:{
            size:['9mm'],
            materials:['MasterBoard']
        }
    },
    {
        id: 4,
        productNo:'MB1000-12',
        name: '產品名稱 : Master Board 棕櫚環保板 (12mm)',
        price: 482,
        quantity:30,
        image:'img/productList/MasterBoard.png',
        nature:{
            size:['12mm'],
            materials:['MasterBoard']
        }
    },
    {
        id: 5,
        productNo:'MB1000-15',
        name: '產品名稱 : Master Board 棕櫚環保板 (15mm)',
        price: 562,
        quantity:30,
        image:'img/productList/MasterBoard.png',
        nature:{
            size:['15mm'],
            materials:['MasterBoard']
        }
    },
    {
        id: 6,
        productNo:'MB1000-18',
        name: '產品名稱 : Master Board 棕櫚環保板 (18mm)',
        price: 678,
        quantity:30,
        image:'img/productList/MasterBoard.png',
        nature:{
            size:['18mm'],
            materials:['MasterBoard']
        }
    },
    {
        id: 7,
        productNo:'MS1000-4',
        name: '產品名稱 : Sanded Board 棕櫚環保砂板 (4mm)',
        price: 294,
        quantity:30,
        image:'img/productList/SandedBoard.png',
        nature:{
            size:['4mm'],
            materials:['SandedBoard']
        }
    }
    ,
    {
        id: 8,
        productNo:'MS1000-6',
        name: '產品名稱 : Sanded Board 棕櫚環保砂板 (6mm)',
        price: 336,
        quantity:30,
        image:'img/productList/SandedBoard.png',
        nature:{
            size:['6mm'],
            materials:['SandedBoard']
        }
    }
  /*   ,
    {
        id: 9,
        productNo:'MS1000-6L',
        name: '產品名稱 : Sanded Board 棕櫚環保砂板 (比較長)(6mm)',
        price: 416,
        quantity:30,
        image:'img/productList/SandedBoard.png',
        nature:{
            size:['6mm'],
            materials:['SandedBoard']
        }
    } */
    ,
    {
        id: 10,
        productNo:'MS1000-9',
        name: '產品名稱 : Sanded Board 棕櫚環保砂板 (9mm)',
        price: 425,
        quantity:30,
        image:'img/productList/SandedBoard.png',
        nature:{
            size:['9mm'],
            materials:['SandedBoard']
        }
    }
    ,
    {
        id: 11,
        productNo:'MS1000-12',
        name: '產品名稱 : Sanded Board 棕櫚環保砂板 (12mm)',
        price: 509,
        quantity:30,
        image:'img/productList/SandedBoard.png',
        nature:{
            size:['12mm'],
            materials:['SandedBoard']
        }
    }
    ,
    {
        id: 12,
        productNo:'MS1000-15',
        name: '產品名稱 : Sanded Board 棕櫚環保砂板 (15mm)',
        price: 613,
        quantity:30,
        image:'img/productList/SandedBoard.png',
        nature:{
            size:['15mm'],
            materials:['SandedBoard']
        }
    }
    ,
    {
        id: 13,
        productNo:'MS1000-18',
        name: '產品名稱 : Sanded Board 棕櫚環保砂板 (18mm)',
        price: 700,
        quantity:30,
        image:'img/productList/SandedBoard.png',
        nature:{
            size:['18mm'],
            materials:['SandedBoard']
        }
    }



    ,
    {
        id: 14,
        productNo:'MS850',
        name: '產品名稱 : Sanded Board 棕櫚環保砂板 (18mm) (比較輕)',
        price: 595,
        quantity:30,
        image:'img/productList/SandedBoard.png',
        nature:{
            size:['18mm'],
            materials:['SandedBoard']
        }
    } 

    ,
    {
        id: 16,
        productNo:'AY1000-6',
        name: '產品名稱 : Melaboard 安特板 (6mm)',
        price: 616,
        quantity:30,
        image:'img/productList/Melaboard.png',
        nature:{
            size:['6mm'],
            materials:['Melaboard']
        }
    }
    ,
    {
        id: 17,
        productNo:'AY1000-9',
        name: '產品名稱 : Melaboard 安特板 (9mm)',
        price: 702,
        quantity:30,
        image:'img/productList/Melaboard.png',
        nature:{
            size:['9mm'],
            materials:['Melaboard']
        }
        
    }
    ,
    {
        id: 18,
        productNo:'AY1000-12',
        name: '產品名稱 : Melaboard 安特板 (12mm)',
        price: 789,
        quantity:30,
        image:'img/productList/Melaboard.png',
        nature:{
            size:['12mm'],
            materials:['Melaboard']
        }
    }
   
    ,
    {
        id: 20,
        productNo:'BWQT-93F1',
        name: '產品名稱 : Wall Panel 牆體(一小時防火牆體 - 比較厚)',
        price: 915,
        quantity:30,
        image:'img/productList/GeoWall.png',
        nature:{
            size:['1h'],
            materials:['WallPanel']
        }
    }
    ,
    {
        id: 21,
        productNo:'BWQT-80F2',
        name: '產品名稱 : Wall Panel 牆體(二小時防火牆體)',
        price: 983,
        quantity:30,
        image:'img/productList/GeoWall.png',
        nature:{
            size:['2h'],
            materials:['WallPanel']
        }
    }
    ,
    {
        id: 22,
        productNo:'BWQT-160F4',
        name: '產品名稱 : Wall Panel 牆體(四小時防火牆體)',
        price: 1579,
        quantity:30,
        image:'img/productList/GeoWall.png',
        nature:{
            size:['4h'],
            materials:['WallPanel']
        }
    }


];

// button function
function goToGoogle() {
    window.open("https://www.google.com", "_blank");
  }


let productFilter = listProducts;
showProduct(productFilter);
//出介面資料
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);
        // create price
        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText ='$'+ item.price.toLocaleString() ;
        newItem.appendChild(newPrice);

         // create button
         
         let newPage = document.createElement('button');
         newPage.classList.add('page');
         newPage.innerText = "了解產品詳情";
         newPage.addEventListener("click", goToGoogle);
         newItem.appendChild(newPage);
      
        

        list.appendChild(newItem);
    });
}




//filter
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check category
        if(valueFilter.category.value != ''){
            if(item.nature.materials != valueFilter.category.value){
                return false;
            }
        }
        // check color
        if(valueFilter.size.value != ''){
            if(item.nature.size != valueFilter.size.value){
                return false;
            }
        }
    /*     // check name
        if(valueFilter.name.value != ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        // check min price
        if(valueFilter.minPrice.value != ''){
            if(item.price < valueFilter.minPrice.value){
                return false;
            }
        }
        //  check max price
        if(valueFilter.maxPrice.value != ''){
            if(item.price > valueFilter.maxPrice.value){
                return false;
            }
        }
 */

        return true;
    })
    showProduct(productFilter);
})