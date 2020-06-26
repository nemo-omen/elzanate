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
        path: './stories/:id',
        component: 'post-page',
        action: () => { import('./post-page.js'); }
      },
      {
        path: '(.*)',
        component: 'not-found-page',
        action: () => { import('./not-found-page.js') }
      }
    ]);
  }

  render() {
    return html`
    <nav>
      <a href="/" aria-label="Home">Home</a>
      <a href="/about" aria-label="About">About</a>
    </nav>
    <article id="page">
      <section id="post-list">
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

      #post-list {
        grid-column: 1/10;
      }

      #post-list h1 {
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