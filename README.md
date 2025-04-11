<div align="center">
	<img width="250" src="https://github.com/Apheiro/conditional-parent/raw/main/public/cParent.svg" alt="conditional parent">
</div>


# c-Parent
A flexible, lightweight React component that dynamically wraps its children in any HTML tag or custom component, seamlessly inheriting their props. It also includes an optional feature to disable the wrapper and render only the children when needed.
# Installation

``` bash   
npm install c-parent 
```

# Description

cParent is designed to be a versatile wrapper component for React applications. It allows you to wrap child elements in either a standard HTML tag (e.g., div, span, etc.) or a custom React component, while automatically passing down props to the wrapper. With the disParent option, you can bypass the wrapper entirely and render just the children, making it highly adaptable to different use cases.


# Usage

The cParent component accepts two primary props:

``` typescript
{
    parent: string | JSX.Element
    disParent: boolean,
}
```

- parent: Specify the wrapper as either:

    - A string (e.g., "div", "span") for standard HTML elements, inheriting all native props.
    - A custom React component, which will also inherit passed props.

- disParent: When set to true, the wrapper is disabled, and only the children are rendered.

# Example

 <div align="center">
	<img width="500" src="https://github.com/Apheiro/conditional-parent/raw/main/public/code.gif" alt="conditional parent">
</div>
