
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(randomNum);
        alert(option);
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

   

    handleAddOption(option) {
        if(!option) {
            return 'enter valid value to add item'
        } else if(this.state.options.indexOf(option) > -1){
            return 'this option is already exist'
        }
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // });
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render() {
        const subtittle = 'Put your life in the hands of computer';
        return (
            <div>
                <Header subtittle = {subtittle} />
                <Action
                 hasOptions={this.state.options.length > 0} 
                 handlePick={this.handlePick}
                 />
                <Options 
                options = {this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                handleAddOption={this.handleAddOption}
                /> 
            </div>  
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};


const Header = (props) => {
    return (
        <div>
        <h1>{props.tittle}</h1>
        {props.subtittle && <h2>{props.subtittle}</h2>}
        </div>  
    );
};


Header.defaultProps = {
    tittle: 'Indecision'
};
const Action = (props) => {
    return(
        <div>
            <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
             What should I do?</button>
        </div>
    );     
};

const Options = (props) => {
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
            {  
                props.options.map((option) => <Option key={option} optionText={option}/>)
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
         {props.optionText}
        </div>
    );
}


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();   
        const error = this.props.handleAddOption(option);
        
        // this.setState(() => {
        //     return { error };
        // });
        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        ); 
    }
}


ReactDOM.render(<IndecisionApp options={['opt1', 'opt2']} />, document.getElementById('app'));