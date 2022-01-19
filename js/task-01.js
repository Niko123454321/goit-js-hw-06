const categories = document.querySelectorAll('#categories li.item');
    console.log('Number of categories: '+categories.length);

categories.forEach(element => {
    const categoryName = element.firstElementChild.textContent;
    console.log('Category:', categoryName);

    const categoryTypesList = element.lastElementChild;
    const categoryTypesArray = categoryTypesList.children.length;
    console.log('Elements:', categoryTypesArray);
});
