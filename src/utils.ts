export const tokyo = {
  dataImage() {
    const d = document.querySelectorAll('[data-img-url]');

    for (let i = 0; i < d.length; i++) {
      const element = d[i];
      // @ts-expect-error TS(2339): Property 'style' does not exist on type 'Element'.

      element.style.backgroundImage = `url(${element.getAttribute(
        'data-img-url'
      )})`;
    }
  },
  imageToSvg() {
    document.querySelectorAll('img.svg').forEach((el) => {
      const imgID = el.getAttribute('id');
      const imgClass = el.getAttribute('class');
      const imgURL = el.getAttribute('src');
      // @ts-expect-error TS(2345): Argument of type 'string | null' is not assignable... Remove this comment to see the full error message

      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, 'text/html');
          const svg = xmlDoc.querySelector('svg');

          if (typeof imgID !== 'undefined') {
            // @ts-expect-error TS(2531): Object is possibly 'null'.
            svg.setAttribute('id', imgID);
          }

          if (typeof imgClass !== 'undefined') {
            // @ts-expect-error TS(2531): Object is possibly 'null'.
            svg.setAttribute('class', `${imgClass} replaced-svg`);
          }

          // @ts-expect-error TS(2531): Object is possibly 'null'.
          svg.removeAttribute('xmlns:a');

          if (el.parentNode) {
            // @ts-expect-error TS(2345): Argument of type 'SVGSVGElement | null' is not ass... Remove this comment to see the full error message
            el.parentNode.replaceChild(svg, el);
          }
        });
    });
  },
  customCursor() {
    const myCursor = document.querySelectorAll('.mouse-cursor');
    const hamburger = document.querySelector('.hamburger');
    const kura_tm_topbar = document.querySelector('.kura_tm_topbar ');
    const pointer = document.querySelector('.cursor-pointer');
    const e = document.querySelector('.cursor-inner');
    const t = document.querySelector('.cursor-outer');

    function mouseEvent(element: any) {
      element.addEventListener('mouseenter', () => {
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        e.classList.add('cursor-hover'), t.classList.add('cursor-hover');
      });
      element.addEventListener('mouseleave', () => {
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        e.classList.remove('cursor-hover'), t.classList.remove('cursor-hover');
      });
    }

    if (myCursor.length) {
      if (document.body) {
        let n;
        let i = 0;
        const o = !1;

        (window.onmousemove = function (s) {
          // console.log(document.querySelector(this));
          o ||
            // @ts-expect-error TS(2531): Object is possibly 'null'.
            (t.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`),
            // @ts-expect-error TS(2531): Object is possibly 'null'.
            (e.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`),
            (n = s.clientY),
            (i = s.clientX);
        }),
          document.body.addEventListener(
            'mouseenter',
            // "a,.kura_tm_topbar .trigger, .cursor-pointer",
            () => {
              const a = document.querySelectorAll('a');
              const sliders = document.querySelectorAll(
                '.owl-carousel, .swiper-container, .cursor-link'
              );
              const slider = document.querySelectorAll('.modal_item');
              // @ts-expect-error TS(2531): Object is possibly 'null'.

              e.classList.add('cursor-inner'), t.classList.add('cursor-outer');

              for (let i = 0; i < a.length; i++) {
                const element = a[i];

                mouseEvent(element);
              }

              for (let i = 0; i < sliders.length; i++) {
                const element = sliders[i];

                element.addEventListener('mouseenter', () => {
                  // @ts-expect-error TS(2531): Object is possibly 'null'.
                  e.classList.add('cursor-slider'),
                    // @ts-expect-error TS(2531): Object is possibly 'null'.
                    t.classList.add('cursor-slider');
                });
                element.addEventListener('mouseleave', () => {
                  // @ts-expect-error TS(2531): Object is possibly 'null'.
                  e.classList.remove('cursor-slider'),
                    // @ts-expect-error TS(2531): Object is possibly 'null'.
                    t.classList.remove('cursor-slider');
                });
              }

              for (let i = 0; i < slider.length; i++) {
                const element = slider[i];

                mouseEvent(element);
              }

              hamburger && mouseEvent(hamburger);
              kura_tm_topbar && mouseEvent(kura_tm_topbar);
              pointer && mouseEvent(pointer);
            }
          ),
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          (e.style.visibility = 'visible'),
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          (t.style.visibility = 'visible');
      }
    }
  },
  preloader() {
    const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    );
    const preloader = document.getElementById('preloader');

    if (preloader) {
      if (!isMobile) {
        setTimeout(() => {
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          preloader.classList.add('preloaded');
        }, 800);
        setTimeout(() => {
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          preloader.remove();
        }, 2000);
      } else {
        preloader.remove();
      }
    }
  },
  portfolioHover() {
    const tokyo_tm_portfolio_animation_wrap = document.querySelectorAll(
      '.tokyo_tm_portfolio_animation_wrap'
    );
    const tokyo_tm_portfolio_titles = document.querySelector(
      '.tokyo_tm_portfolio_titles'
    );

    tokyo_tm_portfolio_animation_wrap.forEach((element) => {
      element.addEventListener('mousemove', () => {
        const title = element.getAttribute('data-title');
        const category = element.getAttribute('data-category');

        if (title) {
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          tokyo_tm_portfolio_titles.classList.add('visible');
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          tokyo_tm_portfolio_titles.innerHTML = `${title}<span class="work__cat">${category}</span>`;
        }

        document.addEventListener('mousemove', (e) => {
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          tokyo_tm_portfolio_titles.style.left = `${e.clientX - 10}px`;
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          tokyo_tm_portfolio_titles.style.top = `${e.clientY + 25}px`;
        });
      });
      element.addEventListener('mouseleave', () => {
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        tokyo_tm_portfolio_titles.classList.remove('visible');
      });
    });
  },
};
