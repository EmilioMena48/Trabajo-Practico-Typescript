type Rating = {
    rate: number;
    count: number;
}

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then((products: Product[]) => {
    let tableHTML: string = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';
    products.forEach((p: Product) =>{
        tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
    });
    tableHTML += '</body>';
    document.querySelector('#tableElement')!.innerHTML = tableHTML;
    const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
    spinnerElement.style.display = 'none';
});