const getData =  () => {
    return fetch('https://database-d43a2-default-rtdb.firebaseio.com/goods.json')
    .then(res => res.json())
}

export default getData