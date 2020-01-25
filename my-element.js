import { LitElement, html } from 'lit-element';
import './node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box.js'
class MyElement extends LitElement {
    static get properties() {
        return {
            prop1: { type: String },
            options: [{ "name": "1", "value": "1" }]
        };
    }
    constructor() {
        super();
        this.prop1 = "Hello World!"
        this.options = ["Oxygen", "Carbon"]
    }
    render() {
        return html`
        Hello
        <p>Prop1 : ${this.prop1}</p>
        
        <vaadin-combo-box id="demo1" label="Element"
             .items="${this.options}"
             @value-changed = "${this.onSelectedValueChanged}"
              ></vaadin-combo-box>
        `
    }
    onSelectedValueChanged(e) {
            var event = new CustomEvent('my-event', {
            detail: {
                message: '{"id": 1,"value":"' + e.detail.value + '"}'
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    };

}
customElements.define('my-element', MyElement);