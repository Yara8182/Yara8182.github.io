function clickme() {

    const color1 = "pink"
    const color2 = "blue"

    const img = document.getElementsByClassNameId("my-img")
    if (document.body.style.backgroundColor == color1) {
        document.body.style.backgroundColor = color2;
    } else {
        document.body.style.backgroundColor = color1;
    }




}