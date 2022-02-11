


// fetch('http://phplaravel-349031-1972063.cloudwaysapps.com/api/posts')
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data)
//         // document.querySelector('.card__img').innerHTML = `<img src="${data[0].thumbnail}">`
//         // document.querySelector('.card__title').innerText = data[0].title;
//         // document.querySelector('.card__coments').innerText = data[0].body;

//         // let i = 0;

//         // console.log(data.lenght);


//         // for (let i = 0; i < data.lenght; i++) {
//         //     console.log(data[i]);
//         // }
//     })



for (let i = 0; i < 11; i++) {
    fetch('http://phplaravel-349031-1972063.cloudwaysapps.com/api/posts')   // should be returned 300 times
        .then(response => response.json())
        .then(data => {
            document.querySelector('.all_content').innerHTML =
                `
                <a >
                    <div class="card">
                        <div class="card__img"><img src="${data[i].thumbnail}"></div>
                        <div class="card__title">${data[i].title}</div>
                        <div class="card__coments">${data[i].body}</div>
                    </div>
                </a`
        })
}

