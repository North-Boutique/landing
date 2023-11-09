/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-plusplus */
export const tokyo = {
  dataImage() {
    const d = document.querySelectorAll('[data-img-url]');

    for (let i = 0; i < d.length; i++) {
      const element = d[i] as HTMLElement;

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

      if (imgURL) {
        fetch(imgURL)
          .then((data) => data.text())
          .then((response) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response, 'text/html');
            const svg = xmlDoc.querySelector('svg');

            if (svg) {
              if (typeof imgID !== 'undefined' && imgID) {
                svg.setAttribute('id', imgID);
              }

              if (typeof imgClass !== 'undefined') {
                svg.setAttribute('class', `${imgClass} replaced-svg`);
              }

              svg.removeAttribute('xmlns:a');

              if (el.parentNode) {
                el.parentNode.replaceChild(svg, el);
              }
            }
          });
      }
    });
  },
  customCursor() {
    const myCursor = document.querySelectorAll('.mouse-cursor');
    const hamburger = document.querySelector('.hamburger');
    const kura_tm_topbar = document.querySelector('.kura_tm_topbar ');
    const pointer = document.querySelector('.cursor-pointer');
    const e = document.querySelector('.cursor-inner') as HTMLElement;
    const t = document.querySelector('.cursor-outer') as HTMLElement;

    function mouseEvent(element: any) {
      element.addEventListener('mouseenter', () => {
        e.classList.add('cursor-hover');
        t.classList.add('cursor-hover');
      });
      element.addEventListener('mouseleave', () => {
        e.classList.remove('cursor-hover');
        t.classList.remove('cursor-hover');
      });
    }

    if (myCursor.length) {
      if (document.body && e && t) {
        let n;
        let i = 0;
        const o = !1;

        window.onmousemove = function (s) {
          if (e && t) {
            o ||
              (t.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`);
            o ||
              (e.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`);
            o || (n = s.clientY);
            o || (i = s.clientX);
          }
        };

        document.body.addEventListener(
          'mouseenter',
          // "a,.kura_tm_topbar .trigger, .cursor-pointer",
          () => {
            const a = document.querySelectorAll('a');
            const sliders = document.querySelectorAll(
              '.owl-carousel, .swiper-container, .cursor-link'
            );
            const slider = document.querySelectorAll('.modal_item');

            e.classList.add('cursor-inner');
            t.classList.add('cursor-outer');

            for (let id = 0; id < a.length; id++) {
              const element = a[id];

              mouseEvent(element);
            }

            for (let id = 0; id < sliders.length; id++) {
              const element = sliders[id];

              element.addEventListener('mouseenter', () => {
                e.classList.add('cursor-slider');
                t.classList.add('cursor-slider');
              });
              element.addEventListener('mouseleave', () => {
                e.classList.remove('cursor-slider');
                t.classList.remove('cursor-slider');
              });
            }

            for (let id = 0; id < slider.length; id++) {
              const element = slider[id];

              mouseEvent(element);
            }

            hamburger && mouseEvent(hamburger);
            kura_tm_topbar && mouseEvent(kura_tm_topbar);
            pointer && mouseEvent(pointer);
          }
        );
        e.style.visibility = 'visible';
        t.style.visibility = 'visible';
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
          preloader.classList.add('preloaded');
        }, 800);
        setTimeout(() => {
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
    ) as HTMLElement;

    tokyo_tm_portfolio_animation_wrap.forEach((element) => {
      element.addEventListener('mousemove', () => {
        const title = element.getAttribute('data-title');
        const category = element.getAttribute('data-category');

        if (title) {
          tokyo_tm_portfolio_titles?.classList.add('visible');

          if (tokyo_tm_portfolio_titles) {
            tokyo_tm_portfolio_titles.innerHTML = `${title}<span class="work__cat">${category}</span>`;
          }
        }

        document.addEventListener('mousemove', (e) => {
          if (tokyo_tm_portfolio_titles) {
            tokyo_tm_portfolio_titles.style.left = `${e.clientX - 10}px`;
            tokyo_tm_portfolio_titles.style.top = `${e.clientY + 25}px`;
          }
        });
      });
      element.addEventListener('mouseleave', () => {
        if (tokyo_tm_portfolio_titles) {
          tokyo_tm_portfolio_titles.classList.remove('visible');
        }
      });
    });
  },
};
