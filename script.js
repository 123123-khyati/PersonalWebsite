
function resume() {
    window.open("https://drive.google.com/file/d/1CNahPu3GAik1tfKEiqnx4bLAJBucBFR6/view?usp=sharing");
     
}
// for scrolling through feature buttons

function myFunction() {
    let eduCollection = document.getElementsByClassName("rightMain");
    if (eduCollection.length > 0) {
        let target = eduCollection[0].offsetTop;
        window.scrollTo({top: target, behavior: 'smooth'});
    }
}

function myFunction1() {
    let eduCollection = document.getElementsByClassName("education");
    if (eduCollection.length > 0) {
        let target = eduCollection[0].offsetTop;
        window.scrollTo({top: target, behavior: 'smooth'});
    }
}

function myFunction2() {
    let eduCollection = document.getElementsByClassName("experience");
    if (eduCollection.length > 0) {
        let target = eduCollection[0].offsetTop;
        window.scrollTo({top: target, behavior: 'smooth'});
    }
}

function myFunction3() {
    let eduCollection = document.getElementsByClassName("skills");
    if (eduCollection.length > 0) {
        let target = eduCollection[0].offsetTop;
        window.scrollTo({top: target, behavior: 'smooth'});
    }
}


