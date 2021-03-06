import React from 'react'
import { data } from '../../data'

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap {color: #222129 }";
    document.body.appendChild(css);
};

class HeroBanner extends React.Component {
    render() {
        let heroBanenr = data.heroBanenr.filter(item => {
            return item.parentWrapper.id === this.props.heroId
        })
        return (
            <div>
                {
                    heroBanenr[0] ?
                        <div className={heroBanenr[0].parentWrapper.className}>
                            <div className={heroBanenr[0].parentWrapper.container.className}>
                                <div className={heroBanenr[0].parentWrapper.container.row.className}>
                                    <div className={heroBanenr[0].parentWrapper.container.row.col.className}>
                                        <div className={heroBanenr[0].parentWrapper.container.row.col.content.className}>
                                            <h1>Track real time <br />water <a href="/" className="typewrite" data-period="2000"
                                                data-type='[ "consumption", "consumption"]'>
                                                <span className="wrap"></span> </a>
                                            </h1>
                                            <p>{heroBanenr[0].parentWrapper.container.row.col.content.para.value}</p>
                                            <a href={heroBanenr[0].parentWrapper.container.row.col.content.anchor.href} className={heroBanenr[0].parentWrapper.container.row.col.content.anchor.className}>{heroBanenr[0].parentWrapper.container.row.col.content.anchor.value}</a>
                                        </div>
                                    </div>
                                    <div className={heroBanenr[0].parentWrapper.container.row.mobiileImg.className}>
                                        <img src={heroBanenr[0].parentWrapper.container.row.mobiileImg.img.url} alt={heroBanenr[0].parentWrapper.container.row.mobiileImg.img.alt} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}
export default HeroBanner