import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
}));

class SearchInput extends Component {
  componentWillMount() {
    this.resetComponent();
    console.log(source);
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.notes, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      // <Grid columns={2}>
      //   <Grid.Column width={1}></Grid.Column>
      //   <Grid.Column width={12}>

      //   </Grid.Column>
      // </Grid>
      <Search
        size="large"
        fluid
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        results={results}
        value={value}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  return { 
    notes: state.notes.notes
  }
}

export default connect(mapStateToProps, null)(SearchInput)