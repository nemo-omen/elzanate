import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';

import './post-list.js';
import './about-page.js';
import './post-page.js';
import './not-found-page.js';


class EzApp extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('outlet'));

    router.setRoutes([
      {
        path: '/',
        component: 'post-list',
        action: () => { import('./post-list.js'); }
      },
      {
        path: '/about',
        component: 'about-page',
        action: () => { import('./about-page.js'); }
      },
      {
        path: '/stories/:id',
        component: 'post-page',
        action: () => {
          import('./post-page.js');
        }
      },
      {
        path: '(.*)',
        component: 'not-found-page',
        action: () => {
          import('./not-found-page.js');
        }
      }
    ]);
  }

  render() {
    return html`
    <header id="main-header">
      <div id="masthead-logo">
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.91 106.72">
            <path
              d="M182.58,105.22a1.5,1.5,0,0,1-.55-.11l-71.28-28L87.56,73.45,3,73.39a1.5,1.5,0,0,1-1.16-2.45L13.31,57a1.6,1.6,0,0,1,.7-.48l97.86-31.1L149.56,6.07a1.46,1.46,0,0,1,.55-.16L198,1.51h.14a1.41,1.41,0,0,1,.72.19l66.77,37a1.49,1.49,0,0,1,.76,1.2,1.51,1.51,0,0,1-.56,1.3L225.58,72.75,223.81,83.9a1.51,1.51,0,0,1-1.14,1.23l-25.53,6-13.49,13.69A1.52,1.52,0,0,1,182.58,105.22Z" />
            <path
              d="M198.15,3l66.76,37L224.19,71.93l-1.86,11.74-26,6-13.79,14-71.43-28L87.68,72,3,71.89,14.47,58l98-31.14,37.8-19.43L198.15,3m0-3h-.28L150,4.42a2.85,2.85,0,0,0-1.1.32L111.29,24.06,13.56,55.13a3,3,0,0,0-1.41.95L.69,70A3,3,0,0,0,3,74.89L87.44,75l22.91,3.65,71.13,27.91a3,3,0,0,0,1.1.21,3,3,0,0,0,2.13-.9L197.9,92.44,223,86.59a3,3,0,0,0,2.28-2.45L227,73.57l39.79-31.2a3,3,0,0,0-.4-5L199.6.38A3,3,0,0,0,198.15,0Z"
              style="fill:#fff" />
            <polygon
              points="143.44 53.06 81.76 36.6 14.47 57.98 3 71.89 87.68 71.95 122.51 68.24 117.54 55.88 143.44 53.06"
              style="fill:#424242" />
            <polygon
              points="140.37 37.9 147.23 32.81 154.19 37.76 151.47 29.66 158.33 24.57 149.79 24.66 147.06 16.56 144.51 24.71 135.97 24.8 142.93 29.75 140.37 37.9"
              style="fill:#ffc200" />
            <polyline points="143.89 53.13 113.2 48.25 25.84 62.11 3.45 71.97"
              style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.6463085720013825px" /></svg>
        </a>
      </div>
      <h1><a href="/">El Zanate</a></h1>
      <h2>San Angelo, Texas</h2>
    </header>
    <nav>
      <a href="/" aria-label="Home">Home</a>
      <a href="/about" aria-label="About">About</a>
    </nav>
    <article id="page">
      <section id="post-section">
        <div id="outlet"></div>
      </section>
      <aside id="sidebar">
        <h1>Sidebar</h1>
      </aside>
    </article>
    `;
  }

  static get styles() {
    return css`
      #main-header {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 1rem 0 0 0;
        border-bottom: 2px solid #ffc200;
        padding: 0 0 2rem 0;
      }

      #masthead-logo {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #masthead-logo svg {
        height: 50px;
        width: auto;
        filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.6));
        transition-property: all;
        transition-duration: 300ms;
      }

      #masthead-logo svg:hover {
        transform-origin: center;
        filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.7));
      }

      #main-header h1 {
        font-family: 'Kelly Slab', sans-serif;
        font-weight: 400;
        font-size: 3rem;
        margin: 0;
        padding: 0;
        color: #ffc200;
        letter-spacing: 3px;
      }

      #main-header h1 a {
        color: #ffc200;
        text-decoration: none;
      }

      #main-header h2 {
        font-weight: 300;
        font-size: 1.5rem;
        letter-spacing: 2px;
        padding: 0;
        margin: 0;
      }

      #main-header h3 {
        font-weight: 300;
        font-size: 1.25rem;
        padding: 0;
        margin: 0;
        letter-spacing: 3px;
      }
      nav {
        display: flex;
        justify-content: space-evenly;
        padding: 0;
        border-bottom: 2px solid #ffc200;
        padding: 0.25rem;
        margin: 0 0 2rem 0;
      }
      nav a {
        color: #bababa;
        text-decoration: none;
      }
      nav a:hover {
        color: #fff;
      }
      article#page {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 3rem;
        margin: 0 2rem 0 0;
      }

      #page h1, #page h2, #page h3 {
        margin: 0;
        padding: 0;
        color: #0dffe4;
      }

      #post-section {
        grid-column: 1/10;
      }

      #post-section h1 {
        font-size: 2rem;
        font-weight: 200;
        /* color: #fff; */
      }

      #sidebar {
        grid-column: 10/13;
      }

      #sidebar h1 {
        font-size: 2rem;
        font-weight: 200;
        /* color: #fff; */
      }
    `;
  }
}

customElements.define('ez-app', EzApp);