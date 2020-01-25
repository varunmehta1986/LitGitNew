import { LitElement, html } from "lit-element";
import './my-element'
import './selected-compound'
class MainElement extends LitElement {
    static get properties() {
        return {
            selectedItem: {
                type: Object,
                hasChanged(newValue, oldValue) {
                    if (oldValue !== undefined && newValue !== undefined) {
                        if (newValue.value == 'Carbon') {
                            console.log(newValue.value);
                            return true;
                        }
                        else {
                            console.log('Nothing to show');
                            return false;
                        }
                    }
                }
            }
        }
    }
    constructor() {
        super();
        this.selectedItem = '{"id": 1,"value":"initial value"}';
    }
    render() {
        return html`
            <my-element @my-event= "${(e) => { this.selectedItem = JSON.parse(e.detail.message); }}">
            </my-element>
            <!-- <my-element @my-event= "${(e) => console.log(e.detail.message)}"></my-element>  -->
            
            <br />
            <selected-compound compound = "${JSON.stringify(this.selectedItem)}" ></selected-compound>
        `;
    }
}
customElements.define("main-element", MainElement);