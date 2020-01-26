import { LitElement, html } from "lit-element";
import './my-element'
import './selected-compound'
class MainElement extends LitElement {
    static get properties() {
        return {
            hideControl: { type: Boolean },
            selectedItem: {
                type: Object
            }
        }
    }
    constructor() {
        super();
        this.selectedItem = '{"id": 1,"value":"initial value"}';
    }
    render() {
        return html`
            <my-element @my-event= "${(e) => {
                this.selectedItem = JSON.parse(e.detail.message);
                if (this.selectedItem.value == 'Carbon') {
                    this.hideControl = false;
                }
                else{
                    this.hideControl = true;
                }
            }}">
            </my-element>
            <!-- <my-element @my-event= "${(e) => console.log(e.detail.message)}"></my-element>  -->
            
            <br />
            <selected-compound ?hidden = "${this.hideControl}" compound = "${JSON.stringify(this.selectedItem)}" ></selected-compound>
        `;
    }
}
customElements.define("main-element", MainElement);