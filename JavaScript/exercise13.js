function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr
    if (views < 1000000 && views > 999) {
        viewStr = views / 1000 + "K";
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views;
    }
    let html= `<div class="card">
            <div class="image">
                <img src="${thumbnail}" >
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName}. ${viewStr} views . ${monthsOld} months ago</p>
            </div>
            </div>
        </div>`
document.querySelector(".C").innerHTML = document.querySelector(".C").innerHTML + html;
}
createCard("introduction to learning", "code with shoaib", 560000, 7, "31:22", "https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB21Dwm3c7yoXYuR2rb5vPT7YxK1A");
