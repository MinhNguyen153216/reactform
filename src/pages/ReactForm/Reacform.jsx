import React, { Component } from "react";
import { connect } from "react-redux";

class Reacform extends Component {
  render() {
    return (
      <div className="container">
        <form className="form">
          <div className="form-group">
            <p>Mã SV</p>
            <input className="form-control" type="text" id="id" />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Thêm sinh viên</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sinhVien: state.formReducer.sinhVien,
});

export default connect(mapStateToProps)(Reacform);
