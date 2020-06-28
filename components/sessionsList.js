import Router from "next/router";
import Link from "next/link";
import Layout from "./layout";

export default class SessionsList extends React.Component {
  constructor(props) {
    const { error } = props;
    super(props);
    this.state = {
      isLoading: false,
      error,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.setState({ isLoading: true });
    fetch(`/api/training-sessions/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        Router.reload();
      })
      .catch((error) =>
        this.setState({ error: error.message, isLoading: false })
      );
  }

  render() {
    const { trainingSessions } = this.props;
    const { isLoading, error } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <Layout>
        <main>
          <ul>
            {trainingSessions.map((session) => (
              <li key={session.id}>
                <p>{`${session.duration} - ${session.title}`}</p>
                <button className="button is-success" type="button">
                  <Link href={`/training-sessions/edit/${session.id}`}>
                    <p>
                      Edit
                      <i className="fa fa-pencil-square-o" aria-hidden="true" />
                    </p>
                  </Link>
                </button>
                <button
                  type="button"
                  className="button is-danger"
                  onClick={() => this.handleDelete(session.id)}
                >
                  Delete
                  <i className="fa fa-trash" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
          {error && <p>{error}</p>}
        </main>
      </Layout>
    );
  }
}
