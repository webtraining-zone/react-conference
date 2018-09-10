import React from "react";
// import {Redirect} from "react-router-dom";
import FixUtils from "../../helpers/FixUtils";
import API from "./../../config/API";

export default class ProgramAgenda extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      talks: [],
      // navigate: false,
    };
  }

  componentDidMount() {
    fetch(`${API.serverURL}/api/talks/`).
        then(response => response.json()).
        then(
            (result) => {
              this.setState({
                isLoaded: true,
                talks: result,
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

  handleClick = (talk) => {
    this.props.history.push(`/program/${talk.slug}`);
    // this.setState({navigate: true});
  };

  render() {
    const {error, isLoaded, talks} = this.state;
    // We have access to the history since it was injected from the parent component
    // const {history} = this.props;

    // if (navigate) {
    // return <Redirect to="/" push={true}/>;
    // }
    if (error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (<section className="b-section b-section--news mt-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>
                    Agenda
                  </h2>
                  {
                    talks.map(talk => {
                      return <article className="b-schedule-item" key={talk.id}>

                        <div className="b-schedule-item-header__date">
                            <span className="b-schedule-item-header__time">

                            </span>
                        </div>

                        <div className="b-schedule-item-body">
                          <div className="row">
                            <div
                                className="col-12 col-sm-7 col-md-5 col-lg-4 col-xl-4">
                              <img src={FixUtils.fixImageURL(talk.thumbnail)}
                                   className="img-fluid rounded b-schedule-item__image"
                                   onClick={() => this.handleClick(talk)}/>
                            </div>
                            <div
                                className="col-12 col-sm-7 col-md-7 col-lg-8 col-xl-8">
                            <span
                                className="b-schedule-item__place text-uppercase">
                              {talk.room.name}
                              </span>
                              <a href="#"
                                 onClick={() => this.handleClick(talk)}>
                                <h4 className="b-schedule-item__title">
                                  {talk.title}
                                </h4>
                              </a>

                              <p>
                                <strong>Conferencista: </strong>
                                <span
                                    className="b-schedule-item__speaker">{talk.speaker.name}</span>
                              </p>

                              <p className="b-schedule-item__summary">
                                {talk.summary}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>;
                    })
                  }
                </div>
              </div>
            </div>
          </section>
      );
    }
  }
}
