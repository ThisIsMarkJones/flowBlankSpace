import { LightningElement, api } from 'lwc';

export default class FlowBlankSpace extends LightningElement {
    @api height = '20px'; // Default height of the blank space
    @api width = '100%';  // Default width of the blank space

    renderedCallback() {
        // Get the div element using the CSS class selector
        const blankSpaceDiv = this.template.querySelector('.blank-space');
        
        // Set the inline styles dynamically
        if (blankSpaceDiv) {
            blankSpaceDiv.style.height = this.height;
            blankSpaceDiv.style.width = this.width;
        }
    }
}
