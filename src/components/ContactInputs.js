import React, { useState } from "react";

export default function ContactInputs() {
  const [payload, setPayload] = useState({
    nama: "",
    email: "",
    alamat: "",
    pertanyaan: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (!value) console.log(e.target);
    setPayload((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    console.log(e);
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.classList.add("was-validated");
    }
  };

  return (
    <form className="needs-validation" onSubmit={onSubmitHandler} noValidate>
      <div className="row g-3">
        <div className="col-sm-12">
          <label htmlFor="firstName" className="form-label">
            Nama <span className="text-muted">(Wajib)</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="nama"
            placeholder=""
            onChange={onChangeHandler}
            required
          />
          <div className="invalid-feedback">Nama tidak boleh kosong</div>
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email <span className="text-muted">(Wajib)</span>
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={onChangeHandler}
            id="email"
            placeholder="you@example.com"
            required
          />
          <div className="invalid-feedback">Email tidak boleh kosong.</div>
        </div>

        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Alamat <span className="text-muted">(Wajib)</span>
          </label>
          <input
            type="text"
            className="form-control"
            name="alamat"
            onChange={onChangeHandler}
            id="address"
            placeholder="Jakarta Pusat"
            required
          />
          <div className="invalid-feedback">Alamat tidak boleh kosong.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Pertanyaan
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            name="pertanyaan"
            rows="3"
            onChange={onChangeHandler}
            required
          ></textarea>
          <div className="invalid-feedback">Pertanyaan tidak boleh kosong.</div>
        </div>
        <button className="w-100 btn btn-primary btn-lg" type="submit">
          Kirim Pertanyaan
        </button>
      </div>
    </form>
  );
}
