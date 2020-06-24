import { LitElement, html, css } from 'lit-element';
import { router } from 'lit-element-router';

class AboutPage extends LitElement {
	render() {
		return html`
			<section>
				<h1>About</h1>
				<p>This is the about section. I'm hoping it will show when I attempt to navigate to this via a link generated in LitElement.</p>
			</section>
		`;
	}
}

customElements.define('about-page', AboutPage);