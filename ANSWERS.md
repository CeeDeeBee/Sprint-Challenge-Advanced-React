- [x] Why would you use class component over function components (removing hooks from the question)?

    When writing an application from scratch, it seems that the industry is shifting to writing all components as function components. That said, class components do provide another way of doing things which may be preferable in certian scenarios. I expect that the main reason I would be writing class components over functional components would be in a workplace that is working on a app in an older version of react which lacks hooks.

- [x] Name three lifecycle methods and their purposes.

    componentDidMount is a method that runs whenever a component first mounts. This is often used to make API calls. componentDidUpdate is a method that runs whenever the components state or props have been updated. This method can be useful for executing some logic, other than a rendering, that needs to run whenever state updates. This final main lifecycle method is componentWillUnmount. This method runs when the component has been told to unmount and is often used to clean up event listeners that were created on that component.

- [x] What is the purpose of a custom hook?

    I like to think of custom hooks as a way to write DRYer code. In this sense, custom hooks are essentially functions but instead of being able to reuse the code just within a single component, you can reuse code between components.

- [x] Why is it important to test our apps?

    Testing is a crucial part of apps because it is very common for developers to simply miss something and not realize that something is not working. Writing automated tests is a great way to help mitigate this problem as they can be reused across many developers while being standardized by one team which knows what must be tested.