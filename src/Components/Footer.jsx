import 'bootstrap-icons/font/bootstrap-icons.css';


function Footer() {
  return (
    <footer className="text-center text-white py-5" style={{ backgroundColor: "#2a9d8f" }}>
      <div>
        <h5>Contact Us</h5>
        <p>
          <i className="bi bi-envelope-fill"></i> meditrack@gmail.com
        </p>
        <p>
          <i className="bi bi-telephone-fill"></i> +91 9876543210
        </p>
      </div>

      <div className="my-3">
        <h5>Connect With Us</h5>
        <a href="#" className="text-white mx-2">
          <i className="bi bi-whatsapp" style={{ fontSize: "1.5rem" }}></i>
        </a>
        <a href="#" className="text-white mx-2">
          <i className="bi bi-instagram" style={{ fontSize: "1.5rem" }}></i>
        </a>
        <a href="#" className="text-white mx-2">
          <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
        </a>
      </div>

      <div>
        <p>Designed And Built With <span style={{ color: "red" }}>❤️</span> Using REACT</p>
      </div>
    </footer>

  )
}

export default Footer