class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav>
        <img src="../images/logo2.png" class="logo"/>
        <div class="navigation">
            <ul>
                <i id="menu-close" class="fas fa-times"></i>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/courses.html">Courses</a></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
            <img id="menu-btn" src="../images/menu.png" alt="">
        </div>
        </nav>`;
        
        // Add the script for menu functionality
        const script = document.createElement('script');
        script.innerHTML = `
            document.getElementById('menu-btn').addEventListener('click', function() {
                document.querySelector('nav .navigation ul').classList.add('active');
            });
            document.getElementById('menu-close').addEventListener('click', function() {
                document.querySelector('nav .navigation ul').classList.remove('active');
            });
        `;
        this.appendChild(script);
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="footer has-bg-image" style="background-image: url('./assets/images/footer-bg.png')">

    <div class="section footer-top">
      <div class="container">

        <div class="footer-brand">

          <a href="#" class="logo">
            <img src="./images/logo2.png" width="195" height="145" alt="Youdemi home">
          </a>

          <p class="title-sm footer-text">
            Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus.
          </p>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
                <img src="./images/facebook.svg" width="40" height="40" loading="lazy" alt="facebook">
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <img src="./images/twitter.svg" width="40" height="40" loading="lazy" alt="twitter">
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <img src="./images/pinterest.svg" width="40" height="40" loading="lazy" alt="pinterest">
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <img src="./images/instagram.svg" width="40" height="40" loading="lazy" alt="instagram">
              </a>
            </li>

          </ul>

        </div>

        <ul class="footer-list">

          <li>
            <p class="headline-sm footer-list-title">Links</p>
          </li>

          <li>
            <a href="#" class="title-sm footer-link">Home</a>
          </li>

          <li>
            <a href="#" class="title-sm footer-link">About Us</a>
          </li>

          <li>
            <a href="#" class="title-sm footer-link">Pricing</a>
          </li>

          <li>
            <a href="#" class="title-sm footer-link">Courses</a>
          </li>

          <li>
            <a href="#" class="title-sm footer-link">Contact Us</a>
          </li>

          <li>
            <a href="#" class="title-sm footer-link">Blog</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="headline-sm footer-list-title">Legal</p>
          </li>

          <li>
            <a href="#" class="title-sm footer-link">Legal</a>
          </li>

          <li>
            <a href="#" class="title-sm footer-link">Tearms of Use</a>
          </li>

          <li>
            <a href="#" class="title-sm footer-link">Tearm & Condition</a>
          </li>

          <li>
            <a href="#" class="title-sm footer-link">Payment Method</a>
          </li>

          <li>
            <a href="#" class="title-sm footer-link">Privacy Policy</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>

            <p class="headline-sm footer-list-title">Instagram Post</p>

            <ul class="grid-list">

              <li>
                <img src="./images/ins-1.png" width="80" height="80" loading="lazy" alt="instagram post"
                  class="img-cover">
              </li>

              <li>
                <img src="./images/ins-2.png" width="80" height="80" loading="lazy" alt="instagram post"
                  class="img-cover">
              </li>

              <li>
                <img src="./images/ins-3.png" width="80" height="80" loading="lazy" alt="instagram post"
                  class="img-cover">
              </li>

              <li>
                <img src="./images/ins-4.png" width="80" height="80" loading="lazy" alt="instagram post"
                  class="img-cover">
              </li>

              <li>
                <img src="../images/ins-5.png" width="80" height="80" loading="lazy" alt="instagram post"
                  class="img-cover">
              </li>

              <li>
                <img src="./assets/images/ins-6.png" width="80" height="80" loading="lazy" alt="instagram post"
                  class="img-cover">
              </li>

            </ul>

          </li>

        </ul>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">

        <p class="copyright">
          © Copyright 2022 | Youdemi Template | All Rights Reserved by codewithsadee
        </p>

      </div>
    </div>

  </footer>
`;
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
