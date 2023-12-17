export default class Home {
    constructor() {
        this.elem = document.createElement('div');
    }

    render() {
        this.elem.classList.add('home');
        this.elem.innerHTML = `<h1>Exclusive and non-standard home furniture</h1>
        <div class="info">
            <div class="info_inf">
                <p>We can produce any furniture for your project and find a production solution for any idea.</p>
                <a href="#"><img class="image_1" src="images/michael.png" alt="michael"/></a>
            </div>
            <a href="#"><img class="image_2" src="images/spacejoy.png" alt="spacejoy"/></a>
        </div>
        `;
    }

    init() {
        this.render();
        return this.elem;
    }
}
