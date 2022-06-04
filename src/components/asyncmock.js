const products = [
    {
        id: "1",
        name: "Zapatos Black",
        price: "$8.000",
        category: "Zapatos",
        img: '../images/Zapatos.jpg',
        stock: '10',
        description: 'Zapatos Hombre - Black',
    },
    {
        id: "2",
        name: "Gaban Grey",
        price: "$15.000",
        category: "Sacos",
        img: '../images/Gaban.jpg',
        stock: '20',
        description: 'Saco Gaban Hombre - Gris',
    },
    {
        id: "3",
        name: "Reloj Black",
        price: "$20.000",
        category: "Relojes",
        img: '../images/Reloj.jpg',
        stock: '5',
        description: 'Reloj Hombre - Black',
    }
]



export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
    resolve(products)
}, 2000)
})

}
