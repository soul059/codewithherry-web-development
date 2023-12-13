function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    if(views >= 100000 ){
        views = views/1000
        views = Math.floor(views) + "k";
    }

    let card = document.querySelector(".contanr");
    let div = document.createElement("div");
    card.appendChild(div);
    div.classList.add("card");

    let img = document.createElement("div");
    img.classList.add("img");
    div.append(img);

    // thumbnail
    let Image = document.createElement("img");
    Image.src = thumbnail;
    img.appendChild(Image);

    //create time
    let timediv = document.createElement('span');
    timediv.textContent = duration;
    timediv.classList.add("time");
    img.appendChild(timediv);

    // text element
    let content = document.createElement("div");
    content.classList.add("content");
    div.appendChild(content);


    //create title
    let h3 = document.createElement('h3');
    h3.textContent = title;
    h3.classList.add("title");
    content.appendChild(h3);

    //creat small element
    let p0 = document.createElement('p');
    p0.classList.add("small")
    content.appendChild(p0);


    //create Cname
    let p1 = document.createElement('span');
    p1.textContent = `${cName}`;
    p1.classList.add("cName");
    p0.appendChild(p1);
    //create view
    let p2 = document.createElement('span');
    p2.textContent = ` • ${views} views`;
    p2.classList.add("view");
    p0.appendChild(p2);
    //create monthsOld
    let mO = document.createElement('span');
    mO.textContent = ` • ${monthsOld} month old`;
    mO.classList.add("mO");
    p0.appendChild(mO);
    

}


createCard("sigma web devolepment","codewithharry",345300,7,"30:31","https://i.ytimg.com/an_webp/mCx5aSEK8YE/mqdefault_6s.webp?du=3000&sqp=CJ7l3KsG&rs=AOn4CLDXzqVX52ZkEs9jgwqo-Sls4TlL7A");