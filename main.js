const Store= function() {
    var _cart = []
    var _products = []
    var productsCounter = 0
    var productsCart = 0
    var TotalPrice = 0 
    var ProductsInCart = 0

    const getPrice = function () {
        return TotalPrice
    }

    const getNUmInCart = function () {
        return ProductsInCart
    }


    const addItem = function (name,price,url) {
        productsCounter++
        const product = {
            name: name,
            price: price,
            url: url,
            id: 'p' + productsCounter
        }

        const item = document.createElement('div')
        item.setAttribute('class','product')
        item.setAttribute('id',('p'+ productsCounter))
        

        const newImg = document.createElement('img')
        newImg.style.width  = '200px'
        newImg.style.height = '200px'
        newImg.setAttribute('src',url)
        item.appendChild(newImg)

        const newHeader = document.createElement('h')
        newHeader.innerHTML = name
        item.appendChild(newHeader)

        const newHeader2 = document.createElement('h')
        newHeader2.setAttribute('class','price')
        newHeader2.innerHTML = price + 'NIS'
        item.appendChild(newHeader2)


        const newButton = document.createElement('button')
        newButton.setAttribute('id',('b' + productsCounter))
        newButton.setAttribute('class','but')
        newButton.setAttribute('onclick',`store.addToCart('p${productsCounter}')`)
        // newButton.setAttribute('onclick','pend("p1")')
        newButton.innerHTML = 'Add To Cart'
        item.appendChild(newButton)
        
        if(document.getElementById('products')) document.getElementById('products').appendChild(item)
    
        _products.push(product)
    }

    const deleteFromCart = function (id) {
        let index = -1
        for(i in _cart) {
            if(_cart[i].cartId==id) {
                index=i
            }
        }
        if(index!=-1) {
            var element = document.getElementById(id);
            element.parentNode.removeChild(element);
            TotalPrice -= _cart[index].product.price
            const totalPrice = document.getElementById('totalPrice')
            totalPrice.innerHTML = "Total price of the purchase:" + store.getPrice() + " NIS"
            _cart.slice(index,1)
            ProductsInCart--
            const counter = document.getElementById('counter')
            counter.innerHTML = ProductsInCart
        }
    }

    const addToCart = function (id) {
        for(product of _products) {
            if(product.id==id) {
                productsCart++
                const item = document.createElement('div')
                item.setAttribute('class','product')
                item.setAttribute('id','c'+ productsCart)
                
        
                const newImg = document.createElement('img')
                newImg.style.width  = '200px'
                newImg.style.height = '200px'
                newImg.setAttribute('src',product.url)
                item.appendChild(newImg)
        
                const newHeader = document.createElement('h')
                newHeader.innerHTML = product.name
                item.appendChild(newHeader)
        
                const newHeader2 = document.createElement('h')
                newHeader2.setAttribute('class','price')
                newHeader2.innerHTML = product.price + 'NIS'
                item.appendChild(newHeader2)
        
        
                const newButton = document.createElement('button')
                newButton.setAttribute('id','b'+ id)
                newButton.setAttribute('class','but')
                newButton.setAttribute('onclick',`store.deleteFromCart('c'+ ${productsCart})`)
                newButton.innerHTML = 'Delete Product'
                item.appendChild(newButton)
                if (document.getElementById('cartProducts')) document.getElementById('cartProducts').appendChild(item)
                TotalPrice += product.price
                const totalPrice = document.getElementById('totalPrice')
                totalPrice.innerHTML = "Total price of the purchase:" + store.getPrice() + " NIS"
                _cart.push({product: product,cartId: 'c'+ productsCart})
                ProductsInCart++
                const counter = document.getElementById('counter')
                counter.innerHTML = ProductsInCart
            }
        }
    }



    return {addItem,addToCart,getPrice,deleteFromCart,getNUmInCart}
}

let cartBut = document.getElementById('cart')
cartBut.style.position='relative'
const counter = document.createElement('h')
counter.setAttribute('id','counter')
counter.style.backgroundColor = 'Red'
counter.style.color = 'white'
counter.innerHTML = 0
cartBut.appendChild(counter)


const store = Store()


const showCart = function () {
    // for(product of _cart) addToCart(product)
}

let aboutValue = document.getElementById("aboutus").style.display
let productsValue = document.getElementById("main").style.display
let cartValue = document.getElementById("cartPage").style.display


document.getElementById("aboutus").style.display = "none";
document.getElementById("cartPage").style.display = "none";
  

const AboutBut = document.getElementById('about')
AboutBut.setAttribute('onclick','activateAbout()')

const mainBut = document.getElementById('mainBut')
mainBut.setAttribute('onclick','activateProducts()')

cartBut = document.getElementById('cart')
cartBut.setAttribute('onclick','activateCart()')


const activateAbout = function () {
    document.getElementById("main").style.display = "none";
    document.getElementById("cartPage").style.display = "none";
    document.getElementById("aboutus").style.display = aboutValue;
}

const activateProducts = function () {
    document.getElementById("aboutus").style.display = "none";
    document.getElementById("cartPage").style.display = "none";
    document.getElementById("main").style.display =  productsValue;
}

const activateCart = function () {
    document.getElementById("cartPage").style.display =  cartValue;
    document.getElementById("aboutus").style.display = "none";
    document.getElementById("main").style.display = "none";
}


const totalParag = document.createElement('div')
const total = document.createElement('h1')
total.innerHTML = "----------------------------------------------------------------------"
const totalPrice = document.createElement('h2')
totalPrice.setAttribute('id','totalPrice')
totalPrice.innerHTML = "Total price of the purchase: " + store.getPrice() + " NIS"
totalParag.appendChild(total)
totalParag.appendChild(totalPrice)
document.getElementById('cartPage').appendChild(totalParag)



// const addToCart = store.addToCart
store.addItem('Blueberries 100gr',20,'https://cdn.pixabay.com/photo/2016/04/13/07/18/blueberry-1326154_960_720.jpg')
store.addItem('Strawberries 100gr',15,'https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_960_720.jpg')
store.addItem('Broccoli',5,'https://cdn.pixabay.com/photo/2017/01/12/13/52/broccoli-1974764_960_720.jpg')
store.addItem('Lemon 100gr',2,'https://cdn.pixabay.com/photo/2017/02/05/12/31/lemons-2039830_960_720.jpg')















