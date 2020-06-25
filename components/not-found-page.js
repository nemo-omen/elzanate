import { LitElement, html, css } from 'lit-element';

class NotFoundPage extends LitElement {
  render() {
    return html`
    <h1>Oops!</h1>
    <h2>That page was not found.</h2>
    <a href="/" aria-label="Home">Go Home</a>
    `;
  }
}

customElements.define('not-found-page', NotFoundPage);