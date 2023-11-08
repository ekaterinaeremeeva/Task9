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
    console.log(createPCLink(1001));
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