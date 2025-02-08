// const postData =  () => {
//     return fetch('http://localhost:3000/goods', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: "Crysis",
//             price: 5000,
//             sale: false,
//             img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
//             hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg",
//             category: "Игровая приставка"
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then(res => res.json())
// }
const postData =  () => {
    return fetch('http://localhost:3000/goods/2610', {
        method: 'DELETE', })
    .then(res => res.json())
}

export default postData