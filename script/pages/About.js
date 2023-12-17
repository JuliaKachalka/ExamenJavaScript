export default class About {
    constructor() {
        this.elem = document.createElement('div');
    }

    render() {
        this.elem.classList.add('about');
        this.elem.innerHTML = `
        <div class="about_start">
            <h3>We have been creating furniture for your comfort for more than 5 years</h3>
            <div class="about_startx">
                <p>We are a team of professionals who can produce any furniture for your project, as well as find a production solution for any idea.</p>
                <p>Our main goal is to implement the most daring ideas, and to do it efficiently and accurately.</p>
                <p>We use natural materials as materials - glass, wood, concrete, stone, metal and epoxy resin.</p>
                <h5>1 year</h5>
                <span>guarantees for all products</span>
                <h5>300+</h5>
                <span>completed projects</span>
                <h5>15 days</h5>
                <span>expiration date</span>
            </div>
        </div>
        `;
    }

    init() {
        this.render();
        return this.elem;
    }
}
