import { LitElement, html, css } from 'lit-element';
import { navigator } from 'lit-element-router';

class Link extends navigator(LitElement) {
  static get properties() {
    return {
      href: { type: String },
      linkclass: { type: String, attribute: true }
    };
  }
  static get styles() {
    return css`
      a {
        text-decoration: none;
        font-family: 'IBM Plex Sans';
      }
      .nav {
        color: #bababa;
        text-decoration: none;
      }
      .nav:hover {
        color: #fff;
      }
      .headline-link:hover {
        color: #0dffe4;
        text-decoration: underline;
      }
      .bio-link, .content-link {
        color: #dadada;
      }
      .bio-link:hover, .content-link:hover {
        color: #fff;
      }
    `;
  }
  constructor() {
    super();
    this.href = "";
  }
  render() {
    return html`
      <a href=${this.href} @click=${this.linkClick} class=${this.linkclass}>
        <slot></slot>
      </a>
    `;
  }

  linkClick(event) {
    event.preventDefault();
    this.navigate(this.href);
  }
}

customElements.define('main-link', Link);