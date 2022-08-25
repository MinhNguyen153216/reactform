import React, { Component } from "react";
import { connect } from "react-redux";
import ReactArrSV from "./ReactArrSV";

class Reacform extends Component {
  checkValidity = () => {};

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  handleChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="container">
        <form className="form m-2">
          <div className="row">
            <div className="col-6">
              <p className="m-0">Mã SV</p>
              <input
                className="form-control"
                type="text"
                id="id"
                value={this.props.sinhVien.id}
                onChange={this.handleChange}
              />
              <span className="text-danger">{this.props.errors.id}</span>
              <p className="m-0">Họ tên</p>
              <input
                className="form-control"
                type="text"
                id="name"
                value={this.props.sinhVien.name}
                onChange={this.handleChange}
              />
              <span className="text-danger">{this.props.errors.id}</span>
            </div>

            <div className="col-6">
              <p className="m-0">Số điện thoại</p>
              <input
                className="form-control"
                type="text"
                id="phone"
                value={this.props.sinhVien.phone}
                onChange={this.handleChange}
              />
              <span className="text-danger">{this.props.errors.id}</span>
              <p className="m-0">Email</p>
              <input
                className="form-control"
                type="text"
                id="email"
                value={this.props.sinhVien.email}
                onChange={this.handleChange}
              />
              <span className="text-danger">{this.props.errors.id}</span>
            </div>
          </div>

          <button
            className="btn btn-success mt-2 mb-2"
            type="submit"
            onClick={this.handleSubmit}
          >
            Thêm sinh viên
          </button>
        </form>

        <ReactArrSV />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sinhVien: state.formReducer.sinhVien,
  errors: state.formReducer.errors,
});

export default connect(mapStateToProps)(Reacform);
