export default class Gallery {
    constructor() {
        this.elem = document.createElement('div');
    }

    render() {
        this.elem.classList.add('gallery');
        this.elem.innerHTML = `
        <a href="#"><img src="images/project-img1.png" alt="spacejoy"/></a>
        <a href="#"><img src="images/project-img2.png" alt="spacejoy"/></a>
        <a href="#"><img src="images/project-img3.png" alt="spacejoy"/></a>
        <a href="#"><img src="images/project-img4.png" alt="spacejoy"/></a>
        <a href="#"><img src="images/project-img5.png" alt="spacejoy"/></a>
        <a href="#"><img src="images/project-img6.png" alt="spacejoy"/></a>
        <a href="#"><img src="images/project-img7.png" alt="spacejoy"/></a>
        `;
    }

    init() {
        this.render();
        return this.elem;
    }
}
