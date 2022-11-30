class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="nav">
                <nav class="navbar navbar-light navbar-expand">
                <div class="container"><a href="../" aria-current="page" class="navbar-brand nuxt-link-exact-active nuxt-link-active" target="_self">
                    <img src="https://dy9hpnbyn8tl0.cloudfront.net/kodego-large.svg" alt="KodeGo" class="logo"></a>
                                <ul class="navbar-nav">
                                <li class="nav-item"><a href="#" class="nav-link" target="_self">About Us</a></li>
                                <li class="nav-item"><a href="#" class="nav-link" target="_self">How It Works</a></li>
                                <li class="nav-item"><a href="../courses" class="nav-link" target="_self">Courses</a></li>
                                <li class="nav-item"><a href="../partners" class="nav-link" target="_self">Partners</a></li>
                                <li class="nav-item"><a href="../blogs" class="nav-link" target="_self">Blog</a></li>
                                <li class="nav-item"><a href="../careers" class="nav-link" target="_self">Careers</a></li>
                                <li class="nav-item"><a href="#" class="nav-link" target="_self">FAQ</a></li>
                                <li class="nav-item auth-links"><a href="../signin" class="btn fw-700 text-success px-4 py-0" role="button">Sign In</a>
                                    <a role="button" class="btn btn-success text-white fw-700 px-4 py-0 text-nowrap">Apply Now</a></li>
                                </ul>
                        </div>
                    </nav>
                </div>
        `
    }
}
customElements.define('my-header', MyHeader)

class Myfooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div data-v-3b77e288="" class="container">
        <div data-v-3b77e288="" class="row footer-top footer-row">
            <div data-v-3b77e288="" class="col">
                <p data-v-3b77e288="">Contacts</p>
                <dl data-v-3b77e288="">
                    <dd data-v-3b77e288="">
                        <div data-v-3b77e288="" class="row">
                            <div data-v-3b77e288="" class="col-1">
                                <img data-v-3b77e288="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHqSURBVHgBxVPtTeNAEJ31msM/KYGrgFh3CXIkdHYFl6sAqCC5CggdhAoQFYRUkCCimHwgpwNMB/5ppLDDm9gbTPj4y0i2dmdm37x5s0v03aa2HUmS7OW5aWN5QsT7pXvJTDdK6V4Q+OmnALe381Br1V8HFC2N4ZtirQ6wbwEwZVb/m83f1+8AxuNZTWsnkWpE+t92pTiO95l3+gCqrVYcHR3VR+J3bILWui8VPE9H24fFgiBIn550hFaWrkuXbxhMJosWkPtV5Lu7RdsY6pYtoPdf5wWTeQjP0OZaBqFUt4fH48UJKvWU4gto0kOsG8fJccGkPkIsg78le7cU7AD/1NJyHBNCrEGzWe+WbGrMBkXoygrMXExoDYDgI0b0Z9OXEjDVRlUk5YgrAPDgVRElhwcVEZ1rmbmMUXZ57oK2yoieH4h28BmSOyCx2WxWk1yInmwYQN3R7u5z5rrqDNtRFPk4TD8LwYq+be3VijrQJj089K+oakiGUAu2LD4yuQuSM50WglZa2NBOSxaf2I+hTKtafQNQ0DanWIaTybyzfXQ6vT+T3uUqV/3vHhMuFeZPba2N32g0lpa6iIn5X+AddL4EGA6TPc8ziSgvd6F0H0O4zPNcH5Z9CWArMusuOvy7TlLrB3b60Rt5Afe+6ktE8dSVAAAAAElFTkSuQmCC" class="contacts-img">
                            </div>
                                <div data-v-3b77e288="" class="col">
                                    <span data-v-3b77e288="">18th Floor, W Fifth, 5th Avenue, Taguig, 1630 Metro Manila</span>
                                </div>
                            </div>
                        </dd>
                                <dd data-v-3b77e288="">
                                    <div data-v-3b77e288="" class="row">
                                        <div data-v-3b77e288="" class="col-1">
                                            <img data-v-3b77e288="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFASURBVHgBlVPRbcIwEL2zQSDxkxHSDZKPVkICKZmgWaEToG7QDWgnyAhtJwgSSEaFqu4EZYR88hNfz01cBYjAPMnK+XLv+e58RmiwWn1EACICDxDRbjq9XVgblVIhQD9nO4HroIdDmfaI5BMihexIx+Na9RJstlLK1/3ezAWnfY+I2pdsMZncaS5DczGZQISACDKlPnNfAaW2OfMyNgNhHUT4zIpeIpZsD+T1Yvd/AsbQtzEmvSTiyDbWGND/Aq6ucyJtso11/l47yP7gDqdCiGK93nJv5GNdYjVncnJMPsjgNBPkoap+7OJrjrrIJxm0Rfhzo9QmqSoqR6P+Lo7jsiu2U8DBZzYE11YKQQFciYZTcg/MOw/FrH5MflguNwmimPFTesOi+AoGg6pgEW+BBgsA+YBuVzcMQz+u0e5GfgGxDbViVemPPgAAAABJRU5ErkJggg==" class="contacts-img">
                                        </div>
                                            <div data-v-3b77e288="" class="col"><a data-v-3b77e288="" href="mailto:help@kodego.ph" target="_self" class="mail">help@kodego.ph</a>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                                            <div data-v-3b77e288="" class="col quick-links"><p data-v-3b77e288="">Quick Links</p>
                                                <div data-v-3b77e288="" class="row">
                                                    <div data-v-3b77e288="" class="col">
                                                        <dl data-v-3b77e288="">
                                                            <dd data-v-3b77e288=""><a data-v-3b77e288="" href="/#about-us" class="">About Us</a></dd>
                                                            <dd data-v-3b77e288=""><a data-v-3b77e288="" href="/#how-it-works" class="">How It works</a></dd>
                                                            <dd data-v-3b77e288=""><a data-v-3b77e288="" href="./courses" class="">Courses</a></dd>
                                                            <dd data-v-3b77e288=""><a data-v-3b77e288="" href="./careers" class="">Careers</a></dd>
                                                        </dl>
                                                        </div>
                                                            <div data-v-3b77e288="" class="col">
                                                                <dl data-v-3b77e288="">
                                                                    <dd data-v-3b77e288=""><a data-v-3b77e288="" href="./partners" class="">Partners</a></dd>
                                                                    <dd data-v-3b77e288=""><a data-v-3b77e288="" href="#" class="">Terms and Conditions</a></dd>
                                                                    <dd data-v-3b77e288=""><a data-v-3b77e288="" href="#" target="_blank">Privacy Policy</a></dd>
                                                                </dl>
                                                            </div>
                                                        </div>
                                                    </div>
                                                                    <div data-v-3b77e288="" class="col news-letter"><p data-v-3b77e288="">Follow Us</p>
                                                                        <div data-v-3b77e288=""><a data-v-3b77e288="" href="https://www.facebook.com/KodegoPH" target="_blank"><img data-v-3b77e288="" src="https://dy9hpnbyn8tl0.cloudfront.net/facebook.png" width="24" height="24"></a>
                                                                            <a data-v-3b77e288="" href="https://www.instagram.com/kodegoph/" target="_blank">
                                                                                <img data-v-3b77e288="" src="https://dy9hpnbyn8tl0.cloudfront.net/instagram.png" width="24" height="24"></a>
                                                                                <a data-v-3b77e288="" href="https://twitter.com/kodegoph/" target="_blank"><img data-v-3b77e288="" src="https://dy9hpnbyn8tl0.cloudfront.net/twitter.png" width="24" height="24"></a>
                                                                                <a data-v-3b77e288="" href="https://www.youtube.com/channel/UCyfN03LZwOfef8IKprZsdNg" target="_blank">
                                                                                    <img data-v-3b77e288="" src="https://dy9hpnbyn8tl0.cloudfront.net/youtube.png" width="24" height="24">
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-3b77e288="" class="hr p-0"></div>
                                                                    <div data-v-3b77e288="" class="footer-row footer-bottom"><a data-v-3b77e288="" href="./" class="logo-holder">
                                                                        <img data-v-3b77e288="" src="https://dy9hpnbyn8tl0.cloudfront.net/kodego-large.svg" alt="KodeGo" class="logo"></a>
                                                                        <div data-v-3b77e288="" class="d-flex align-items-center justify-content-end">
                                                                            <div data-v-3b77e288="" class="font-size-14 copyright">© 2022 KodeGo All Rights Reserved
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </footer>
        `
    }
}
customElements.define('my-footer', Myfooter)