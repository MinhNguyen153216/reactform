const initialState = {
  arrSinhVien: [
    {
      id: "1",
      name: "NguyenVanA",
      phone: "0123456789",
      email: "nguyenvana@gmail.com",
    },
    {
      id: "2",
      name: "NguyenVanB",
      phone: "0123456780",
      email: "nguyenvanb@gmail.com",
    },
  ],
  sinhVien: {
    id: "",
    name: "",
    phone: "",
    email: "",
  },
  errors: {
    id: "",
    name: "",
    phone: "",
    email: "",
  },
  arrSinhVienSearch: [
    {
      id: "2",
      name: "NguyenVanB",
      phone: "0123456780",
      email: "nguyenvanb@gmail.com",
    },
  ],
  searchValue: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case "CHANGE_INPUT": {
      let { id, value } = action.payload;

      let sinhVienUpdate = { ...state.sinhVien };
      sinhVienUpdate[id] = value;

      return { ...state, sinhVien: sinhVienUpdate };
    }
    case "ADD_SINHVIEN": {
      let { sinhVien } = action.payload;

      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate.push(sinhVien);

      //if-else to add to the arrSinhVienSearch or not
      //if new sinhVien is match with searchValue
      let searchValue = state.searchValue;
      if (
        sinhVien.name.toLowerCase().include(searchValue.toLowerCase()) ||
        searchValue === ""
      ) {
        let arrSinhVienSearchNew = [...state.arrSinhVienSearch];
        arrSinhVienSearchNew.push(sinhVien);
        return {
          ...state,
          arrSinhVien: arrSinhVienUpdate,
          arrSinhVienSearch: arrSinhVienSearchNew,
        };
      }

      //else which is not match
      else {
        return {
          ...state,
          arrSinhVien: arrSinhVienUpdate,
        };
      }
    }
    case "SEARCH_SINHVIEN": {
      let { value } = action.payload;
      state.searchValue = value;
      return { ...state };
    }
  }
};
