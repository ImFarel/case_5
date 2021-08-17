// import { Modal } from "bootstrap";
import { Modal, Button, Container } from "react-bootstrap";
import CardComp from "./components/CardComp";
import ContactInputs from "./components/ContactInputs";
import Feature from "./components/Feature";
import Featurette from "./components/Featurette";

//TODO: Tab HOME (home)
//TODO: Tab Fasilitas dan layanan (facility)
//TODO: TAB About US (about)
//TODO: Tab Aktivitas Ekstrakulikuler (activity)
//TODO: Contact us (contact)
function App() {
  const facility = [
    {
      title: "Lab Komputer",
      desc: "Sekolah kami memiliki lab komputer dengan daya yang tinggi.",
      button: ["view"],
      img: {
        placeholder: "Gambar Lab",
        thumb: "Lab Komputer",
      },
    },
    {
      title: "Lapangan Olahraga",
      desc: "Lapangan serbaguna terdiri dari lapangan basket, sepak bola/futsal, dan voli.",
      button: ["view"],
      img: {
        placeholder: "Gambar Lapangan Olahraga",
        thumb: "Lapangan Olahraga",
      },
    },
    {
      title: "Tempat Parkir",
      desc: "Parkir mobil, motor, pesawat, helikopter, dan kapal pesiar ada di sini.",
      button: ["view"],
      img: {
        placeholder: "Gambar Tempat Parkir",
        thumb: "Tempat Parkir",
      },
    },
  ];

  const cardRenderer = (data) =>
    data.map((item) => (
      <div className="col" key={item.title}>
        <CardComp
          key={item.title}
          title={item.title}
          desc={item.desc}
          button={item.button}
          img={item.img}
        />
      </div>
    ));

  return (
    <>
      <Container className="App">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4">Pelita Kasih</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#home" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#facility" className="nav-link">
                Fasilitas
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#activity" className="nav-link">
                Aktifitas
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </header>
      </Container>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Selamat datang !</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="/" className="btn btn-primary my-2 mx-1">
                  Main call to action
                </a>
                <a href="/" className="btn btn-secondary my-2 mx-1">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </section>
        <div className="bg-light py-5" id="facility">
          <Container>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {cardRenderer(facility)}
            </div>
          </Container>
        </div>
        <div className="py-5" id="about">
          <Container>
            <div>
              <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                  <h1 className="display-5 fw-bold">
                    Tentang Sekolah dan Yayasan
                  </h1>
                  <p className="col-md-8 fs-4">
                    Using a series of utilities, you can create this jumbotron,
                    just like the one in previous versions of Bootstrap. Check
                    out the examples below for how you can remix and restyle it
                    to your liking.
                  </p>
                </div>
              </div>
              <div className="row align-items-md-stretch">
                <div className="col-md-4">
                  <div className="h-100 p-5 text-white bg-dark rounded-3">
                    <h2>Visi</h2>
                    <p>
                      Terwujudnya siswa yang UNGGUL, SEHAT jasmani dan rohani,
                      memiliki KARAKTER POSITIF, CITRA DIRI POSITIF, memiliki
                      tujuan hidup yang jelas, memiliki STRATEGI DAN KOMITMEN
                      dalam menggapai cita- citanya.
                    </p>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="h-100 p-5 bg-light border rounded-3">
                    <h2>Misi</h2>
                    <ol>
                      <li>Menanamkan pendidikan berkarakter</li>
                      <li>
                        Membimbing peserta didik yang selalu optimis, percaya
                        diri, berpikiran positif, mengetahui kelebihan pada
                        dirinya yang bermanfaat untuk orang lain dan mempunyai
                        gambaran yang jelas tentang masa depannya.
                      </li>
                      <li>
                        Membina peserta didik yang bertumbuh menjadi siswa yang
                        sehat, berbudi pekerti luhur dan bertanggung jawab
                        sesuai nilai kebenaran.
                      </li>
                      <li>
                        Memperlengkapi peserta didik dengan keterampilan yang
                        berkualitas sesuai kebutuhan dan untuk pengembangan
                        dirinya.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <Featurette className={"pt-5"} />
          </Container>
        </div>

        <div className="container px-4 py-5" id="activity">
          <Feature />
        </div>

        <div className="bg-light py-5" id="contact">
          <div className="container col-md-6">
            <h4 className="mb-3">Ada pertanyaan?</h4>
            <ContactInputs />
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a
                href="#home"
                className="nav-link px-2 text-muted active"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#facility" className="nav-link px-2 text-muted">
                Fasilitas
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#activity" className="nav-link px-2 text-muted">
                Aktifitas
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-muted">
                Contact
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">2021</p>
        </footer>
      </div>
    </>
  );
}

export default App;
