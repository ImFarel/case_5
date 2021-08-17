import React, { useState } from "react";

export default function ContactInputs() {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    console.log(e);
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.classList.add("was-validated");
      setIsLoading(false);
      return null;
    }
    alert("Terkirim!");
    setPayload({
      nama: "",
      email: "",
      alamat: "",
      pertanyaan: "",
    });
    setIsLoading(false);
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
            value={payload.nama}
            placeholder=""
            onChange={onChangeHandler}
            required
            disabled={isLoading}
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
            value={payload.email}
            onChange={onChangeHandler}
            id="email"
            placeholder="you@example.com"
            required
            disabled={isLoading}
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
            value={payload.alamat}
            name="alamat"
            onChange={onChangeHandler}
            id="address"
            placeholder="Jakarta Pusat"
            required
            disabled={isLoading}
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
            value={payload.pertanyaan}
            onChange={onChangeHandler}
            required
            disabled={isLoading}
          ></textarea>
          <div className="invalid-feedback">Pertanyaan tidak boleh kosong.</div>
        </div>
        <button
          className="w-100 btn btn-primary btn-lg"
          type="submit"
          disabled={isLoading}
        >
          Kirim Pertanyaan
        </button>
      </div>
    </form>
  );
}
