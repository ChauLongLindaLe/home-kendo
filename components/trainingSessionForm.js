export default class TrainingSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      duration: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="section">
        <form onSubmit={this.handleSubmit}>
          <label className="label">Title:</label>
          <div className="control">
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              className="input"
              placeholder="Text"
            />
          </div>
          <label className="label">Duration:</label>
          <div className="control">
            <input
              type="text"
              name="title"
              value={this.state.duration}
              onChange={this.handleChange}
              className="input"
              placeholder="Text"
            />
          </div>
          <div className="section">
            <div className="field is-grouped">
              <div className="control">
                <input
                  className="button is-link"
                  type="submit"
                  value="Submit"
                />
              </div>
              <div className="control">
                <input className="button is-link is-light" value="Cancel" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
