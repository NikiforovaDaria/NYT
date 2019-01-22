import React, { Component } from 'react';

class SearchPanel extends Component {
    state = {
    topic: ""
    };

    onTopicCange = event => {
        this.setState({
            topic: event.target.value
        });
    };

    onFormSubmit = event => {
        event.preventDefault();
        fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.topic}&api-key=QFGGyfkDkS7fzmnZ8Ex5ZkjSdbStDAW1`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }
        ).then(res => {
            console.log(res);
            return res.json();
        });
    };
  render() {
    return (
      <div className="container-fluid h-10">
        <div className="row h-100">
          <div className="col-12 p-0 h-100">
            <div className="jumbotron h-100 text-center m-0 d-flex flex-column justify-content-cente">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    New York Times Articles Search
                  </h3>
                </div>
                <div className="panel-body">
                  <form>
                    <div className="form-group">
                      <input
                        onChange={this.onTopicCange}
                        type="text"
                        className="form-control"
                        id="topic"
                        placeholder="Search"
                      />
                    </div>
                    <button
                      onClick={this.onFormSubmit}
                      type="submit"
                      className="btn btn-primary"
                    >
                      {" "}
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong> Results </strong>
                </h3>
              </div>
              <div className="panel-body" />
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default SearchPanel;