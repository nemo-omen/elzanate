import { LitElement, html, css } from 'lit-element';
import { router } from 'lit-element-router';

import './post-list.js';
import './about-page.js';
import './post-page';
import './main-outlet.js';

class App extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: String },
      query: { type: Object }
    };
  }
  static get routes() {
    return [
      {
        name: 'home',
        pattern: '',
        data: { title: 'El Zanate | Home' }
      },
      {
        name: 'about',
        pattern: 'about'
      },
      {
        name: 'post',
        pattern: 'stories/:slug'
      },
      {
        name: 'author',
        pattern: 'authors/:name'
      }
    ]
  }

  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
    console.log(route, params, query, data);
  }

  render() {
    return html`
    <app-main active-route=${this.route}>
      <post-list route="home"></post-list>
      <about-page route="about"></about-page>
      <post-page></post-page>
    </app-main>
    `;
  }
}

customElements.define('main-app', App);