import React, { Component } from "react";
import { connect } from "react-redux";

class ReactArrSV extends Component {
  renderArrSV = (arrSinhVien) => {
    return arrSinhVien.map((sinhVien, index) => {
      return (
        <tr className="align-middle" key={index}>
          <td>{sinhVien.id}</td>
          <td>{sinhVien.name}</td>
          <td>{sinhVien.phone}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button className="btn btn-primary m-1">Sửa</button>
            <button className="btn btn-danger m-1">Xóa</button>
          </td>
        </tr>
      );
    });
  };

  render() {
    let { arrSinhVienSearch } = this.props;
    return (
      <div>
        <table className="table">
          <thead className="text-white bg-dark">
            <tr>
              <th scope="col">Mã SV</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderArrSV(arrSinhVienSearch)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrSinhVienSearch: state.formReducer.arrSinhVienSearch,
  searchValue: state.formReducer.searchValue,
});

export default connect(mapStateToProps)(ReactArrSV);
