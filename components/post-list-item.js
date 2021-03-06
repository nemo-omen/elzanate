import { LitElement, html, css } from 'lit-element';

class PostListItem extends LitElement {
  static get properties() {
    return {
      _id: { type: String },
      headline: { type: String },
      byline: { type: String },
      dateline: { type: String },
      lastUpdated: { type: String },
      featuredImage: { type: String },
      content: { type: String },
      slug: { type: String },
      permalink: { type: String },
      biolink: { type: String },
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.buildBiolink();
    this.buildPermalink();
    this.buildSlug();
  }

  buildSlug() {
    const headlineText = this.headline.toLowerCase();
    this.slug = headlineText.replace(/ /g, '_').replace(/:/, '').replace(/\?/, '').replace(/\!/, '').replace(/\./, '');
  }

  buildBiolink() {
    const bylineText = this.byline.toLowerCase();
    this.biolink = '/authors/' + bylineText.replace(/ /g, '_');
  }

  buildPermalink() {
    const headlineText = this.headline.toLowerCase();
    this.permalink = '/stories/' + headlineText.replace(/ /g, '_').replace(/:/, '').replace(/\?/, '').replace(/\!/, '').replace(/\./, '');
  }

  static get styles() {
    return css`
      article {
        font-family: 'IBM Plex Sans';
        display: flex;
        flex-direction: row;
        padding: 0 1rem 0 0;
        margin: 0 0 2rem 0;
        background-color: #1f2329;
        transition-property: all;
        transition-duration: 400ms;
      }
      a {
        text-decoration: none;
        color: inherit;
        font-family: 'IBM Plex Sans';
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
      div.featured-image {
        width: 300px;
        height: 200px;
        overflow: hidden;
      }
      img {
        max-width: 300px;
        min-height: 200px;
      }
      .main-section {
        margin: 0 0 0 1rem;
        padding: 0;
        flex-grow: 1;
      }
      header {
        border-bottom: 1px dotted #ffc200;
        display: flex;
        flex-direction: column;
      }
      .subheadline-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top: 1px dotted #ffc200;
        padding: 0.25rem 0;
      }
      h2 {
        margin: 0 0 0.5rem 0;
        padding: 0;
        font-weight: 300;
        color: #0dffe4;
        font-size: 1.5rem;
        text-decoration: none;
        transition-property: all;
        transition-duration: 400ms;
      }
      h3 {
        padding: 0;
        margin: 0;
        font-weight: 400;
        font-size: 1rem;
      }
      p {
        margin: 0.25rem 0 0 0;
      }
    `;
  }

  render() {
    return html`
    <article>
      <a href="/stories/${this._id}" class="feature-image-link">
        <div class="featured-image">
          <img src=${this.featuredImage} alt="${this.headline}">
        </div>
      </a>
      <section class="main-section">
        <header>
          <a href="/stories/${this._id}" class="headline-link">
            <h2>${this.headline}</h2>
          </a>
          <section class="subheadline-section">
            <h3>
            <a href=${this.biolink} class="bio-link">
                ${this.byline}
              </a>
            </h3>
            <h3>${this.dateline}</h3>
          </section>
        </header>
        <section class="content-section">
          <a href="/stories/${this._id}" class="content-link">
            <p>${this.content}</p>
          </a>
        </section>
      </section>
    </article>
    `;
  }
}

customElements.define('post-list-item', PostListItem);