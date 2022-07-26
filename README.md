### You can pull this Project , or clone it to your local Directories 
After The clone you can do the Quick install for modules "install npm"
## Available Scripts

In the project directory, you can run:

### "pm start"

### "THE JSX Working inside the Compiler , State Use And Rendering"

return(                                                
    <div className="App">
    I am the box
    </div>
);
# The Above React .js Code will be in JSX as bellow :-
React.createElement(
    'div',
    {class: 'App'},
    'I am the box'
)

# if the code is like 
return (
    <div className="App">
    <p>I am Satya</p>
    <button> Click me</button>
    </div>
);
# The Above React .js Code will be in JSX as bellow :-
React.createElement(
    'div',
    {class: 'App'},
    [
    React.createElement('p',null,'I am Satya'),
    React.createElement('button',null,'Click me'),
    ],
)

