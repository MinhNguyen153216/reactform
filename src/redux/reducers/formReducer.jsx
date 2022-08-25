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
  }
};
