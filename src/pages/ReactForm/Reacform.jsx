import React, { Component } from "react";
import { connect } from "react-redux";
import ReactArrSV from "./ReactArrSV";

class Reacform extends Component {
  checkValidity = () => {};

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div className="container">
        <form className="form m-2">
          <div className="row">
            <div className="col-6">
              <p className="m-0">Mã SV</p>
              <input className="form-control" type="text" id="id" />
              <span className="text-danger">lỗi</span>
              <p className="m-0">Họ tên</p>
              <input className="form-control" type="text" id="name" />
              <span className="text-danger">lỗi</span>
            </div>

            <div className="col-6">
              <p className="m-0">Số điện thoại</p>
              <input className="form-control" type="text" id="phone" />
              <span className="text-danger">lỗi</span>
              <p className="m-0">Email</p>
              <input className="form-control" type="text" id="email" />
              <span className="text-danger">lỗi</span>
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
