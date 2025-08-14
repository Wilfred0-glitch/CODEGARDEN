export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img src="/images/logo-main.png" alt="Code Garden Logo" style={{ height: '30px', marginRight: '10px' }} />
              <span className="fw-bold">Code Garden</span>
            </div>
            <p style={{ color: 'var(--secondary-color)' }}>Nurturing young minds through innovative coding education. Join us in cultivating the next generation of tech enthusiasts!</p>
            <div className="d-flex gap-2">
              <a href="http://facebook.com/officialcodegarden" className="btn btn-outline-light btn-sm"><i className="fab fa-facebook"></i></a>
              <a href="#" className="btn btn-outline-light btn-sm"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/official_codegarden?igsh=MXlwZ2JqcnNjdzl0&utm_source=qr" className="btn btn-outline-light btn-sm"><i className="fab fa-instagram"></i></a>
              <a href="http://vm.tiktok.com/ZMStMjug3" target="_blank" className="btn btn-outline-light btn-sm"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">All Courses</h6>
            <ul className="list-unstyled">
              <li><span style={{ color: 'var(--secondary-color)' }}>Roblox Game Development</span></li>
              <li><span style={{ color: 'var(--secondary-color)' }}>Website Design</span></li>
              <li><span style={{ color: 'var(--secondary-color)' }}>Python Programming</span></li>
              <li><span style={{ color: 'var(--secondary-color)' }}>Scratch for Kids</span></li>
              <li><span style={{ color: 'var(--secondary-color)' }}>Basic Computer Literacy</span></li>
              <li><span style={{ color: 'var(--secondary-color)' }}>C++ for Kids</span></li>
              <li><span style={{ color: 'var(--secondary-color)' }}>AI & Machine Learning</span></li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contact Info</h6>
            <ul className="list-unstyled">
              <li style={{ color: 'var(--secondary-color)' }}><i className="fas fa-phone me-2"></i>+234 810 502 5758</li>
              <li style={{ color: 'var(--secondary-color)' }}><i className="fas fa-envelope me-2"></i>info.codegarden@gmail.com</li>
              <li style={{ color: 'var(--secondary-color)' }}><i className="fas fa-map-marker-alt me-2"></i>Rivers State ICT Center, Air Force Road PortHarcourt</li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0" style={{ color: 'var(--secondary-color)' }}>&copy; 2024 All Code Garden Rights Reserved | Designed by Code Garden</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" style={{ color: 'var(--secondary-color)' }} className="text-decoration-none me-3">Privacy Policy</a>
            <a href="#" style={{ color: 'var(--secondary-color)' }} className="text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
