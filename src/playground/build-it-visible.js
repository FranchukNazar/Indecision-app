class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) =>{
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'hide details' : 'Show details'}
            </button>
            { this.state.visibility && (
                <div>
                    <p>'Its shown detaiils';</p>
                </div>
            )}
        </div>
        );
    }
}

 ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
