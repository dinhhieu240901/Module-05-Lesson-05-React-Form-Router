import { Form, Formik } from "formik";
import React, { useState } from "react";

function BookManagemnt() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", number: "" });
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleValidate = (values) => {
    let errors = {};

    if (!values.title || values.title.trim() === "") {
      errors.title = "Required";
    }

    if (!values.number || isNaN(values.number)) {
      errors.number = "Required";
    }

    return errors;
  };

  const handleSelect = (book, index) => {
    setForm({ title: book.title, number: book.number });
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    let newBooks = JSON.parse(JSON.stringify(books));
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleSubmit = (values) => {
    console.log("Submitted values:", values);

    let newBooks = JSON.parse(JSON.stringify(books));

    if (indexSelected > -1) {
      console.log("Editing existing book at index:", indexSelected);
      newBooks.splice(indexSelected, 1, values);
      setIndexSelected(-1);
    } else {
      console.log("Adding a new book");
      newBooks.push(values);
    }

    setBooks(newBooks);
    setForm({ title: "", number: "" });

    console.log("Books after state update:", newBooks);
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ title: form.title || "", number: form.number || "" }}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">
                Title:
                <input
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  className="border rounded p-2 mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
                />
                {errors.title && (
                  <div className="text-red-700">{errors.title}</div>
                )}
              </label>
              <label className="text-gray-700">
                Number:
                <input
                  type="text"
                  name="number"
                  value={values.number}
                  onChange={handleChange}
                  className="border rounded p-2 mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
                />
                {errors.number && (
                  <div className="text-red-700">{errors.number}</div>
                )}
              </label>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.number}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  onClick={() => handleSelect(book, index)}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookManagemnt;
