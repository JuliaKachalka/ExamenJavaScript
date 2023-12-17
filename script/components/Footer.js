class Footer {
    constructor() {
        this.elem = document.createElement('footer');
    }

    render() {
        this.elem.classList.add('footer');
        this.elem.innerHTML = `
            <div class="logo_footer">
                <a href="#"><img src="images/logo.jpg" alt="logo"/></a>
            </div>
            <div class="icon">
                 <ul class="icon_icon">
                    <li><a href="https://twitter.com/" target="_blank"><img src="images/twitter.png" alt="twitter" /></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><img src="images/instagram.png" alt="instagram" /></a></li>
                    <li><a href="https://ru-ru.facebook.com/" target="_blank"><img src="images/facebook.png" alt="facebook" /></a></li>
                </ul>
            </div>
        `;
    }

    init() {
        this.render();
        return this.elem;
    }
}

export default Footer;