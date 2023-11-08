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