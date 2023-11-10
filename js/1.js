function task1()
{
    function createLinkTovar(category){
        return function(artikul) {
            return `https://myshop.ru/${category}/${artikul}`;
        }
    }
    createPCLink = createLinkTovar('pc');
    createMonitorLink = createLinkTovar('monitors');
    createNotebooksLink = createLinkTovar('notebooks');
    console.log((createPCLink(1001)));
    console.log((createNotebooksLink(4004)));
    console.log((createMonitorLink(345)));
}

function task2()
{
    let orders=[
        {
            fio:"Ivan",
            tovar:"phone",
            price:10000,
            quantity:2
        },
        {
            fio:"Peter",
            tovar:"usb",
            price:2300,
            quantity:5
        },
        {
            fio:"Mary",
            tovar:"connector",
            price:100,
            quantity:100
        },
    ]
    function showOrder(){
        let str=`Заказ покупателя ${this.fio} составил ${this.price*this.quantity}`;
        console.log(str);
    }

    orders.forEach(elem=>showOrder.call(elem));
}

function task3()
{
    let orders=[
        {
            fio:"Ivan",
            tovar:"phone",
            price:10000,
            quantity:2
        },
        {
            fio:"Peter",
            tovar:"usb",
            price:2300,
            quantity:5
        },
        {
            fio:"Mary",
            tovar:"connector",
            price:100,
            quantity:100
        },
    ]
    function showOrder(action){
        let str=`Заказ покупателя ${this.fio} составил ${this.price*this.quantity*(100-action)/100}, скидка составила ${action}%`;
        console.log(str);
    }

    orders.forEach(elem=>showOrder.call(elem,0));
    orders.forEach(elem=>showOrder.call(elem,10));
}

function task4()
{
    function Menu(...navList) {
        this.navList = navList;
        this.wrapperA = function() {
            return this.navList.map(elem => `<a href='${elem}'>item</a>`);
        }
    }
    let mainMenu = new Menu("home.html", "services.html", "price.html", "about.html");
    for(elem of mainMenu.navList) 
    var elem = 0;
    while(elem <= mainMenu.wrapperA().length - 1) {
        console.log(mainMenu.wrapperA()[elem]);
        elem = elem + 1;
    }
    let footerMenu = new Menu("newPage.html", "checkPage.html", "seoPage.html");
    for(elem of footerMenu.navList) 
    var elem = 0;
    while(elem <= footerMenu.wrapperA().length - 1) {
        console.log(footerMenu.wrapperA()[elem]);
        elem = elem + 1;
    }
}