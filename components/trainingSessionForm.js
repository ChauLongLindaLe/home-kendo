export default class TrainingSessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            duration: '' 
        };
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
        console.log(this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                </label>
                <input 
                    type="text" 
                    name="title" 
                    value={this.state.title} 
                    onChange={this.handleChange} 
                />
                <label>
                    Duration:
                </label>
                <input 
                    type="text" 
                    name="duration" 
                    value={this.state.duration} 
                    onChange={this.handleChange} 
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
