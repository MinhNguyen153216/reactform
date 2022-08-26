import React, { Component } from "react";
import { connect } from "react-redux";
import ReactArrSV from "./ReactArrSV";

class Reacform extends Component {
  checkValidity = () => {};

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    let { arrSinhVien, sinhVien } = this.props;

    //check if-else already added ot not
    //if already added in arrSinhVien then alert
    if (arrSinhVien.findIndex((i) => i.id === sinhVien.id) !== -1) {
      return alert("Sinh viên đã tồn tại");
    }
    //do create action when not
    const action = {
      type: "ADD_SINHVIEN",
      payload: {
        sinhVien: { ...this.props.sinhVien },
      },
    };
    this.props.dispatch(action);
  };

  handleChange = (e) => {
    const action = {
      type: "CHANGE_INPUT",
      payload: {
        id: e.target.id,
        value: e.target.value,
      },
    };
    this.props.dispatch(action);
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
  arrSinhVien: state.formReducer.arrSinhVien,
});

export default connect(mapStateToProps)(Reacform);
