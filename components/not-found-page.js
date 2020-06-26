import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';

class NotFoundPage extends LitElement {
  firstUpdated() {
    console.log(this.location.params);
  }
  render() {
    return html`
    <h1>Oops!</h1>
    <h2>That page was not found.</h2>
    <a href="/" aria-label="Home">Go Home</a>
    `;
  }
}

customElements.define('not-found-page', NotFoundPage);