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
    id: " ",
    name: " ",
    phone: " ",
    email: " ",
  },
  arrSinhVienSearch: [],
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
    case "VALIDATION": {
      let { input, value } = action.payload;

      let newErrors = { ...state.errors };
      newErrors[input] = value;

      console.log(newErrors);

      return { ...state, errors: newErrors };
    }
    case "ADD_SINHVIEN": {
      let { sinhVien } = action.payload;

      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate.push(sinhVien);

      //if-else to add to the arrSinhVienSearch or not
      //if new sinhVien is match with searchValue
      let searchValue = state.searchValue;
      if (
        sinhVien.name.toLowerCase().includes(searchValue) ||
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
    case "DELETE_SINHVIEN": {
      let { value } = action.payload;
      console.log(value.id);

      let arrSinhVienUpdate = [...state.arrSinhVien].filter(
        (i) => i.id !== value.id
      );
      let arrSinhVienSearchUpdate = [...state.arrSinhVienSearch].filter(
        (i) => i.id !== value.id
      );

      return {
        ...state,
        arrSinhVien: arrSinhVienUpdate,
        arrSinhVienSearch: arrSinhVienSearchUpdate,
      };
    }
    case "LOAD_UPDATE_SINHVIEN": {
      let { value } = action.payload;

      let sinhVienLoad = { ...state.arrSinhVien.find((i) => i.id === value) };

      return { ...state, sinhVien: sinhVienLoad };
    }
    case "UPDATE_SINHVIEN": {
      let { sinhVienUpdate } = action.payload;

      //check if id is invalid or not
      let arrSinhVienUpdate = [...state.arrSinhVien];
      let indexUpdate = arrSinhVienUpdate.findIndex(
        (i) => i.id === sinhVienUpdate.id
      );
      if (sinhVienUpdate.id === "" || indexUpdate === -1) {
        alert("Không tồn tại Mã Sinh Viên cần cập nhật thông tin");
        return state;
      } else {
        let arrSinhVienSearchUpdate = [...state.arrSinhVienSearch];

        arrSinhVienUpdate[indexUpdate] = sinhVienUpdate;
        let indexSearchUpdate = arrSinhVienSearchUpdate.findIndex(
          (i) => i.id === sinhVienUpdate.id
        );
        if (indexSearchUpdate !== -1) {
          arrSinhVienSearchUpdate[indexSearchUpdate] = sinhVienUpdate;
        }

        return {
          ...state,
          arrSinhVien: arrSinhVienUpdate,
          arrSinhVienSearch: arrSinhVienSearchUpdate,
        };
      }
    }
    case "SEARCH_SINHVIEN": {
      let { value } = action.payload;

      let arrSinhVienSearch = [...state.arrSinhVien].filter((i) =>
        i.name.toLowerCase().includes(value.toLowerCase())
      );

      return {
        ...state,
        arrSinhVienSearch: arrSinhVienSearch,
        searchValue: value,
      };
    }
  }
};
