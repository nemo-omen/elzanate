import { LitElement, html, css } from 'lit-element';
import { router } from 'lit-element-router';

import './post-list.js';
import './main-outlet.js';
import './main-link.js';

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
        pattern: 'about',
        data: { title: 'El Zanate | About' }
      },
      {
        name: 'post',
        pattern: 'post/:slug'
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
    <main-link href="/">Home</main-link>
    <main-link href="/about">About</main-link>

    <app-main active-route=${this.route}>
      <post-list route="home"></post-list>
      <h1 route="about">About</h1>
    </app-main>
    `;
  }
}

customElements.define('main-app', App);