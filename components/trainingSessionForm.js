import Router from "next/router";

export default class TrainingSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || "",
      duration: props.duration || "",
      isLoading: false,
      error: null
    };
    console.log(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { title, duration } = this.state;
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch(this.props.endpoint, {
      method: this.props.httpMethod,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, duration })
    })
      .then((response) => {
        if(response.ok){
          return
        } 
        // if (response.status === 200) {
        //   return response.json();
        // } else if (response.status === 204) return;
        throw response;
      })
      .then(() => {
        Router.push("/training-sessions");
        this.setState({ isLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const { duration, title, isLoading, error } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }
    return (
      <div className="section">
        <form onSubmit={this.handleSubmit}>
          <label className="label" htmlFor="title">
            Title:
            <div className="control">
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
                className="input"
                placeholder="Text"
              />
            </div>
          </label>
          <label className="label" htmlFor="duration">
            Duration:
            <div className="control">
              <input
                type="text"
                name="duration"
                value={duration}
                onChange={this.handleChange}
                className="input"
                placeholder="Text"
              />
            </div>
          </label>
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
                {/* <input className="button is-link is-light" value="Cancel" /> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
