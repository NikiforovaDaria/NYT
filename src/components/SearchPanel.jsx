import React, { Component } from 'react';
import Results from './Results'

class SearchPanel extends Component {
  constructor(props){
    super (props)
    this.state = {
      topic: "",
      articles: []
    };
  }
    

    onTopicCange = event => {
        this.setState({
            topic: event.target.value
        });
    };

    onFormSubmit = event => {
        event.preventDefault();
        fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?
        q=${this.state.topic}
        &api-key=QFGGyfkDkS7fzmnZ8Ex5ZkjSdbStDAW1`,
        {
            headers: {
                'Accept': 'application/json'
            }
        }
        ).then(res => {
            return res.json();
        })
        .then((json) => {
          const elements = json.response.docs;
          this.setState({ articles: elements})
        })
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
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="container">
          <div className="col-8 p-0 h-100 offset-2">
            <h3 className="panel-title text-center">
              Results 
            </h3>
            <div className="panel-body">
              <ul className="list-group">
                {this.state.articles.map(article=> {
                  return <Results {...article} key={article._id}/>;
                })}
              </ul>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default SearchPanel;