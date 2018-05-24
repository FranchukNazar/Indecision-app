console.log("is run");

const app = {
    tittle: 'Indecision app',
    subtittle: 'This is subtittle',
    options: []
};
// JSX - JavaScript XML
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

const onRemoveAll = () =>{
    app.options = [];
    render();
};

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(randomNum);
    alert(option);
};

const appRoot = document.getElementById('app');

const render = () =>{
    const template = (
        <div>
          <h1>{app.tittle}</h1>
          {app.subtittle && <p>{app.subtittle}</p>}
          <p>{app.options.length > 0 ? 'here are your option' : 'no options'}</p>
          <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button> 
          <button onClick={onRemoveAll}>Remove All</button>
          <ol>
          {
            app.options.map((option) => <li key={option}>Item1: {option}</li>)
          }
          </ol>
          <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
          </form>
        </div>
    
    );
    ReactDOM.render(template, appRoot);
}

render();
