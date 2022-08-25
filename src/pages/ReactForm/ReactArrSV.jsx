import React, { Component } from "react";
import { connect } from "react-redux";

class ReactArrSV extends Component {
  renderArrSV = (arrSinhVien) => {
    return arrSinhVien.map((sinhVien, index) => {
      return (
        <tr key={index}>
          <td>{sinhVien.id}</td>
          <td>{sinhVien.name}</td>
          <td>{sinhVien.phone}</td>
          <td>{sinhVien.email}</td>
        </tr>
      );
    });
  };

  render() {
    let { arrSinhVien } = this.props;
    return (
      <div>
        <table className="table">
          <thead className="text-white bg-dark">
            <tr>
              <th scope="col">Mã SV</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>{this.renderArrSV(arrSinhVien)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrSinhVien: state.formReducer.arrSinhVien,
});

export default connect(mapStateToProps)(ReactArrSV);
