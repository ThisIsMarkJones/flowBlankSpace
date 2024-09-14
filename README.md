# FlowBlankSpace

`FlowBlankSpace` is a simple Lightning Web Component (LWC) designed for Salesforce Flows. It allows users to insert customizable blank spaces into Flow screens to improve layout and spacing.

## Features

- **Custom Height:** Specify the height of the blank space using common CSS units like `px`, `rem`, `%`, etc.
- **Custom Width:** Set the width of the blank space, supporting a variety of CSS units for flexible layouts.
- **Flow Compatibility:** Designed specifically for use within Salesforce Flow screens, allowing you to enhance the visual arrangement of Flow elements.

## Usage

The `FlowBlankSpace` component can be used in Salesforce Flow screens to create empty spaces of a specified height and width. By setting these properties, you can control how much blank space appears, facilitating better screen design and spacing in Flow.

### Properties

- **Height:** Controls the height of the blank space. This property accepts CSS units like `px`, `rem`, `%`. The default height is set to `20px`.
- **Width:** Adjusts the width of the blank space. This property also supports various CSS units like `px`, `%`, and `auto`. The default width is `100%`.

### How to Use in a Flow

1. **Add the Component:** After deploying `FlowBlankSpace` to your Salesforce org, drag the component onto your desired Flow screen.
2. **Set Properties:** Use the component's properties panel to set the desired `Height` and `Width` for the blank space. These properties can accept various CSS units to match your layout requirements.
3. **Deploy and Test:** Preview the Flow to ensure the blank space appears as expected, providing the necessary layout adjustments.

## How It Works

- The component contains a simple `div` element in its HTML template. 
- The JavaScript file exposes two properties (`height` and `width`) using the `@api` decorator. These properties allow the Flow builder to customize the dimensions of the blank space.
- The `renderedCallback()` lifecycle hook is used to dynamically apply the specified height and width to the `div` element whenever the component is rendered.
- Basic CSS is applied to make the blank space a block-level element, ensuring that it behaves as intended within the layout.

## Installation

1. **Deploy the Component:** Use your preferred method (Salesforce CLI, Workbench, etc.) to deploy the component files to your Salesforce org.
2. **Add to Flow:** In Flow Builder, drag and drop the `FlowBlankSpace` component into your desired screen and configure its properties to fit your layout needs.

## Meta XML Configuration

The component is exposed for use in Flow screens through its `.js-meta.xml` file, which defines the component's API version and target (Flow screens). It also specifies the `height` and `width` properties for customization in the Flow Builder.

## Customization

You can customize the appearance of the blank space by adjusting the `height` and `width` properties directly within the Flow screen properties. This flexibility allows you to use the component in a variety of layouts and screen designs.

## Support

If you encounter any issues or have questions, please open an issue in this GitHub repository.
