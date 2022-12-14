import React, { Component } from "react";
import { connect } from "react-redux";

class ReactArrSV extends Component {
  handleSearch = (e) => {
    const action = {
      type: "SEARCH_SINHVIEN",
      payload: {
        value: e.target.value,
      },
    };
    this.props.dispatch(action);
  };

  handleDelete = (sinhVien) => {
    const action = {
      type: "DELETE_SINHVIEN",
      payload: {
        value: sinhVien,
      },
    };
    this.props.dispatch(action);
  };

  handleUpdate = (id) => {
    const action = {
      type: "LOAD_UPDATE_SINHVIEN",
      payload: {
        value: id,
      },
    };
    this.props.dispatch(action);
  };

  renderArrSV = (arrSinhVienSearch) => {
    if (this.props.searchValue === "") {
      arrSinhVienSearch = [...this.props.arrSinhVien];
    }
    return arrSinhVienSearch.map((sinhVien, index) => {
      return (
        <tr className="align-middle" key={index}>
          <td>{sinhVien.id}</td>
          <td>{sinhVien.name}</td>
          <td>{sinhVien.phone}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button
              className="btn btn-primary m-1"
              onClick={() => {
                this.handleUpdate(sinhVien.id);
              }}
            >
              Sửa
            </button>
            <button
              className="btn btn-danger m-1"
              onClick={() => {
                this.handleDelete(sinhVien);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    let { arrSinhVienSearch, searchValue } = this.props;
    return (
      <div>
        <table className="table">
          <thead className="text-white bg-dark">
            <tr>
              <th scope="col">Mã SV</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th scope="col">
                Tìm kiếm{" "}
                <input
                  type="text"
                  id="searchTenSV"
                  onChange={this.handleSearch}
                  value={searchValue}
                />{" "}
              </th>
            </tr>
          </thead>
          <tbody>{this.renderArrSV(arrSinhVienSearch)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrSinhVien: state.formReducer.arrSinhVien,
  arrSinhVienSearch: state.formReducer.arrSinhVienSearch,
  searchValue: state.formReducer.searchValue,
});

export default connect(mapStateToProps)(ReactArrSV);
