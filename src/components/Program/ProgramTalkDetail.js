import React from "react";
import API from "../../config/API";
import FixUtils from "../../helpers/FixUtils";

export default class ProgramTalkDetail extends React.Component {
  state = {talk: null, error: null, isLoaded: false};

  createMarkup(talk) {
    return {__html: talk.description};
  }

  render() {
    const {talk, error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (<article className="b-talk">

            <section className="b-section b-section--dark b-section--talk-main">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                    <div className="b-talk__image pt-5">
                      <img src={FixUtils.fixImageURL(talk.image)}
                           alt={talk.title}
                           className="img-fluid img-thumbnail"/>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <div
                        className="mt-3 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5 text-center text-sm-left">
                  <span
                      className="b-talk__place text-uppercase d-block">{talk.room.name}</span>
                      <h1 className="b-talk__title">{talk.title}</h1>
                      <p className="b-talk__speaker pb-5">
                        <strong>Speaker: </strong>
                        <span>{talk.speaker.name}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="b-section b-section--highlighted">
            <span className="b-talk__time text-center d-block p-3">

            </span>
            </section>

            <section className="b-section b-section--talk-extra">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="mt-5">
                      <div
                          className="text-center text-sm-left"
                          dangerouslySetInnerHTML={this.createMarkup(talk)}></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </article>
      );
    }
  }

  // Runs as soon as the component is "mounted" / "added" to the page
  componentDidMount() {
    // 1. Get the "slug" from the params (injected automatically)
    const {slug} = this.props.match.params;

    fetch(`${API.serverURL}/api/talks/${slug}`).
        then(response => response.json()).
        then(
            (result) => {
              this.setState({
                isLoaded: true,
                talk: result,
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.error("Error", error);
              this.setState({
                isLoaded: false,
                error,
              });
            },
        );
  }
}
