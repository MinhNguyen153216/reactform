import React, { Component } from "react";
import { connect } from "react-redux";
import ReactArrSV from "./ReactArrSV";

class Reacform extends Component {
  checkValidity = (sinhVien) => {
    let flag = true;
    let regexName = /^[a-zA-Z ]+$/;
    let regexEmail = /\S+@\S+\.\S+/;
    let regexNumber = /^\d+$/;
    if (!regexNumber.test(sinhVien.id)) {
      flag = false;
      let action = {
        type: "VALIDATION",
        payload: {
          input: "id",
          value: "Mã sinh viên không phù hợp",
        },
      };
      this.props.dispatch(action);
    } else {
      let action = {
        type: "VALIDATION",
        payload: {
          input: "id",
          value: " ",
        },
      };
      this.props.dispatch(action);
    }

    if (!regexNumber.test(sinhVien.phone)) {
      flag = false;
      let action = {
        type: "VALIDATION",
        payload: {
          input: "phone",
          value: "Số điện thoại không phù hợp",
        },
      };
      this.props.dispatch(action);
    } else {
      let action = {
        type: "VALIDATION",
        payload: {
          input: "phone",
          value: " ",
        },
      };
      this.props.dispatch(action);
    }

    if (!regexName.test(sinhVien.name)) {
      flag = false;
      let action = {
        type: "VALIDATION",
        payload: {
          input: "name",
          value: "Tên không phù hợp",
        },
      };
      this.props.dispatch(action);
    } else {
      let action = {
        type: "VALIDATION",
        payload: {
          input: "name",
          value: " ",
        },
      };
      this.props.dispatch(action);
    }

    if (!regexEmail.test(sinhVien.email)) {
      flag = false;
      let action = {
        type: "VALIDATION",
        payload: {
          input: "email",
          value: "Email không phù hợp",
        },
      };
      this.props.dispatch(action);
    } else {
      let action = {
        type: "VALIDATION",
        payload: {
          input: "email",
          value: " ",
        },
      };
      this.props.dispatch(action);
    }

    return flag;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    let { arrSinhVien, sinhVien } = this.props;

    //checkvalidity here
    let validityResult = this.checkValidity(sinhVien);
    if (!validityResult) {
      return alert("Thông tin sinh viên nhập không phù hợp");
    }

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

  handleChangeInput = (e) => {
    const action = {
      type: "CHANGE_INPUT",
      payload: {
        id: e.target.id,
        value: e.target.value,
      },
    };
    this.props.dispatch(action);
  };

  handleUpdate = () => {
    if (this.checkValidity(this.props.sinhVien)) {
      const action = {
        type: "UPDATE_SINHVIEN",
        payload: { sinhVienUpdate: { ...this.props.sinhVien } },
      };
      this.props.dispatch(action);
    } else {
      alert("Sinh viên cập nhật không phù hợp");
    }
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
                data-type="number"
                value={this.props.sinhVien.id}
                onChange={this.handleChangeInput}
              />
              <span className="text-danger">{this.props.errors.id}</span>
              <p className="m-0">Họ tên</p>
              <input
                className="form-control"
                type="text"
                id="name"
                data-type="name"
                value={this.props.sinhVien.name}
                onChange={this.handleChangeInput}
              />
              <span className="text-danger">{this.props.errors.name}</span>
            </div>

            <div className="col-6">
              <p className="m-0">Số điện thoại</p>
              <input
                className="form-control"
                type="text"
                id="phone"
                data-type="number"
                value={this.props.sinhVien.phone}
                onChange={this.handleChangeInput}
              />
              <span className="text-danger">{this.props.errors.phone}</span>
              <p className="m-0">Email</p>
              <input
                className="form-control"
                type="text"
                id="email"
                data-type="email"
                value={this.props.sinhVien.email}
                onChange={this.handleChangeInput}
              />
              <span className="text-danger">{this.props.errors.email}</span>
            </div>
          </div>

          <button
            className="btn btn-success mt-2 mb-2"
            type="submit"
            onClick={this.handleSubmit}
          >
            Thêm sinh viên
          </button>
          <button
            className="btn btn-warning mt-2 mb-2 ms-2"
            type="button"
            onClick={this.handleUpdate}
          >
            Cập nhật sinh viên
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
