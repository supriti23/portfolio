import AboutPage from "../files/AboutPage.jpg";

const About = () => {
  return (
    <>
      <div className="container-fluid home">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img
              src={AboutPage}
              className="img-fluid aboutImage"
              alt="About background"
            />
          </div>
          <div className="col-md-7 col-xs-12 col-sm-12 aboutDetails">
            <p>
              I'm a software engineer, vlogger and someone who loves to travel.
            </p>
            <p>
              I have a keen interest in learning web development, so I started
              working as a frontend developer after four years of working as an
              SAP Consultant.
            </p>
            <p>
              I have have six years of experience in IT industry and have been a
              part of companies like Tata Consultancy and HCL Technologies. I
              have worked in multiple Technologies such as JavaScript, React JS
              and SAP ABAP.
            </p>
            <p>
              In this era of ever-changing and evolving technology, I want to do
              work that is outside my comfort zone and would help me to continue
              my learning of new technologies, tools and programming languages,
              as well as to contribute towards the success of the organization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
