import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

export default class Multi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      value: [],
    };
  }

  async getOptions() {
    const res = await axios.get("http://localhost:8000/api/projects/");
    const data = res.data;

    const options = data.map((d) => ({
      value: d.id,
      label: d.bs_project_id,
    }));

    this.setState({ selectOptions: options });
  }

  handleChange(e) {
    console.log(e);
    this.setState({ value: e });
  }

  componentDidMount() {
    this.getOptions();
  }

  render() {
    console.log(this.state.value);
    return (
      <div>
        <Select options={this.state.selectOptions} />
        {this.state.selectOptions.map((r, i) => (
          <option key={i} >
            {i.id}
          </option>
        ))}
      </div>
    );
  }
}

