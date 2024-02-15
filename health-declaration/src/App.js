import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Formik } from "formik";

function App() {
  const SEX_LIST = [
    { label: "Nam", value: "male" },
    { label: "Nữ", value: "female" },
  ];
  const [form, setForm] = useState({});

  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  const handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? !form[event.target.name]
        : event.target.value;

    setForm({
      ...form,
      [event.target.name]: value,
    });
  };

  const handleValidate = (values) => {
    let errors = {};
    if (!values.fullName) {
      errors.fullName = "Required";
    }

    // Kiểm tra trường Số hộ chiếu / CMND
    if (!values.idNumber) {
      errors.idNumber = "Required";
    }

    // Kiểm tra trường Năm sinh
    if (!values.birthYear) {
      errors.birthYear = "Required";
    } else if (parseInt(values.birthYear) <= 1900) {
      errors.birthYear = "Year of birth must be greater than 1900";
    }

    // Kiểm tra trường Quốc tịch
    if (!values.nationality) {
      errors.nationality = "Required";
    }

    // Kiểm tra trường Tỉnh thành
    if (!values.province) {
      errors.province = "Required";
    }

    // Kiểm tra trường Quận / Huyện
    if (!values.district) {
      errors.district = "Required";
    }

    // Kiểm tra trường Phường / Xã
    if (!values.ward) {
      errors.ward = "Required";
    }

    // Kiểm tra trường Số nhà,...
    if (!values.address) {
      errors.address = "Required";
    }

    // Kiểm tra trường Điện thoại
    if (!values.phone) {
      errors.phone = "Required";
    }

    // Kiểm tra trường Email
    if (!values.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const handleSubmit = () => {
    alert("Khai báo thành công!");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded-md">
      <h3 className="text-2xl font-bold mb-4">Tờ khai y tế</h3>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName">Họ tên: </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                onChange={handleChange}
                value={values.fullName || ""}
              />
              {errors.fullName && <div>{errors.fullName}</div>}
            </div>
            <div>
              <label htmlFor="idNumber">Số hộ chiếu/CMND: </label>
              <input
                type="number"
                name="idNumber"
                id="idNumber"
                onChange={handleChange}
                value={values.idNumber || ""}
              />
              {errors.idNumber && <div>{errors.idNumber}</div>}
            </div>
            <div>
              <label htmlFor="birthYear">Year of Birth: </label>
              <input
                type="number"
                name="birthYear"
                id="birthYear"
                onChange={handleChange}
                value={values.birthYear || ""}
              />
              {errors.birthYear && <div>{errors.birthYear}</div>}
            </div>
            <div>
              <label>Gender: </label>
              {SEX_LIST.map((sex) => (
                <label key={sex.value} className="px-2">
                  <input
                    type="radio"
                    name="gender"
                    value={sex.value}
                    checked={values.gender === sex.value}
                    onChange={handleChange}
                  />
                  {sex.label}
                </label>
              ))}
              {errors.gender && <div>{errors.gender}</div>}
            </div>
            <div>
              <label htmlFor="nationality">Quốc tịch: </label>
              <input
                type="text"
                name="nationality"
                id="nationality"
                onChange={handleChange}
                value={values.nationality || ""}
              />
              {errors.nationality && <div>{errors.nationality}</div>}
            </div>

            <div>
              <label htmlFor="company">Công ty làm việc: </label>
              <input type="text" name="company" id="company" />
            </div>

            <div>
              <label htmlFor="department">Bộ phận làm việc: </label>
              <input type="text" name="department" id="department" />
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="healthInsurance"
                  checked={values.healthInsurance || false}
                  onChange={handleChange}
                />
                Có thẻ bảo hiểm y tế
              </label>
            </div>
            <h2>Địa chỉ liên lạc tại việt nam</h2>
            <div>
              <label htmlFor="province">Tỉnh thành: </label>
              <input
                type="text"
                name="province"
                id="province"
                onChange={handleChange}
                value={values.province || ""}
              />
              {errors.province && <div>{errors.province}</div>}
            </div>
            <div>
              <label htmlFor="district">Quận huyện: </label>
              <input
                type="text"
                name="district"
                id="district"
                onChange={handleChange}
                value={values.district || ""}
              />
              {errors.district && <div>{errors.district}</div>}
            </div>
            <div>
              <label htmlFor="ward">Phường xã: </label>
              <input
                type="text"
                name="ward"
                id="ward"
                onChange={handleChange}
                value={values.ward || ""}
              />
              {errors.ward && <div>{errors.ward}</div>}
            </div>
            <div>
              <label htmlFor="address">
                Số nhà, phố, tổ dân phố /thôn /đội:{" "}
              </label>
              <input
                type="text"
                name="address"
                id="address"
                onChange={handleChange}
                value={values.address || ""}
              />
              {errors.address && <div>{errors.address}</div>}
            </div>
            <div>
              <label htmlFor="phone">Điện thoại: </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                onChange={handleChange}
                value={values.phone || ""}
              />
              {errors.phone && <div>{errors.phone}</div>}
            </div>

            <div>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={values.email || ""}
              />
              {errors.email && <div>{errors.email}</div>}
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold">
                Trong vòng 14 ngày qua, Anh Chị có đến quốc gia/vùng lãnh thổ
                nào (Có thể đi qua nhiều quốc gia)
              </label>
              <br></br>
              <textarea
                rows="4"
                cols="50"
                name="countriesVisited"
                id="countriesVisited"
                style={{ border: "1px solid #3333" }}
              ></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label>
                <input
                  type="checkbox"
                  name="fever"
                  checked={values.fever || false}
                  onChange={handleChange}
                />
                Sốt
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cough"
                  checked={values.cough || false}
                  onChange={handleChange}
                />
                Ho
              </label>
              <label>
                <input
                  type="checkbox"
                  name="difficultyBreathing"
                  checked={values.difficultyBreathing || false}
                  onChange={handleChange}
                />
                Khó thở
              </label>
              <label>
                <input
                  type="checkbox"
                  name="pneumonia"
                  checked={values.pneumonia || false}
                  onChange={handleChange}
                />
                Viêm phổi
              </label>
              <label>
                <input
                  type="checkbox"
                  name="soreThroat"
                  checked={values.soreThroat || false}
                  onChange={handleChange}
                />
                Đau họng
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fatigue"
                  checked={values.fatigue || false}
                  onChange={handleChange}
                />
                Mệt mỏi
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
