import { LitElement, html } from 'lit-element';
class SelectedCompound extends LitElement {
    static get properties() {
        return {
            compound:
            {
                type: Object,
            }
        }
    }
    render() {
        return html`
            Hello
            <h1>${this.compound.value}</h1>
        `;
    }
}
customElements.define('selected-compound', SelectedCompound);