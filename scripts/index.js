function directory(){
    console.log(`directory`);
    document.addEventListener('click', (event)=>{
        if (!event.target.matches('#directory-header')) return;
        event.preventDefault();
        console.log(`event.target=${event.target}`);
        toggle(document.getElementById("directory-content"));
    });
    console.log(`d=`,d);
    sortAndDisplay(d,'directory-content');
}
function toggle(e){
    console.log(`toggle`);
    e.classList.toggle('is-visible');
};
function sortAndDisplay(o,id) {
    console.log(`sortAndDisplay, id=${id}`);
    let keys = Object.keys(o);
    keys.sort();
    let temp_obj = {};
    for (let i=0; i<keys.length; i++){
        temp_obj[keys[i]] = o[keys[i]]
    }
    for (let key in temp_obj) {
        console.log(`key=${key}`);
        document.getElementById(id).innerHTML += `<div class="directory-entry"><p><strong>${temp_obj[key].handle}</p><ul id="${key}"></ul></div>`;
        for (let i=0; i<temp_obj[key].links.length; i++) {
            document.getElementById(key).innerHTML += `<li><a href="${temp_obj[key].links[i].link}">${temp_obj[key].links[i].text}</a></li>`;
        }
    }
}