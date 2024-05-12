import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Overview_descripion.css';
import Image1 from '../../Resources/images/image2.jpg';

const Overview = () => {
  return (
    <div>
      <div className="container-fluid section-1">
        <div className="row">
          <div className="content-1">
            <h3>Embark on a Journey of Ayurvedic Healing</h3>
            <h2>Welcome to <span>Ayurvedhaa Hospital</span></h2>
          </div>
          <div className="row">
            <div className="container content-2">
              <div className="col-lg-5 sub-1">
                <img src={Image1} alt="" />
              </div>
              <div className="col-lg-7 sub-2">
                <div className="para">
                  <p>Welcome to our sanctuary of Ayurvedic wellness, where ancient wisdom meets modern healing. At [Hospital Name], we believe in the transformative power of Ayurveda,a holistic approach to health that harmonizes mind, body, and spirit. Nestled in serene surroundings,our hospital offers a haven for those seeking natural remedies and rejuvenation. With a dedicated team of experienced doctors and therapists, state-of-the-art facilities, and a commitment to personalized care, we aim to guide you on your journey to vibrant health and inner balance. Whether you seek relief from ailments, rejuvenation, or simply a retreat from the stresses of daily life, we invite you to embark on this transformative path with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Overview
