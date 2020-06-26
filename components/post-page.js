import { LitElement, html, css } from 'lit-element';

class PostPage extends LitElement {
  firstUpdated() {
    console.log(this.location.params.slug);
  }
}

customElements.define('post-page', PostPage);