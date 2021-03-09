import SkillsImage from "../files/Skills.jpg";

const Skills = () => {
  const skillArr = [
    { tech: "HTML", percent: 80 },
    { tech: "CSS", percent: 75 },
    { tech: "Sass", percent: 65 },
    { tech: "JavaScript", percent: 80 },
    { tech: "React JS", percent: 80 },
    { tech: "TypeScript", percent: 65 },
    { tech: "Bootstrap", percent: 70 },
    { tech: "SAP ABAP", percent: 80 },
  ];
  return (
    <>
      <div className="container-fluid home">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img
              src={SkillsImage}
              className="img-fluid skillImage"
              alt="Skills background"
            />
          </div>
          <div className="col-md-7 col-xs-12 col-sm-12">
            {skillArr.map((val) => (
              <div>
                {" "}
                <strong>{val.tech}</strong>
                <div className="progress skillBar">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: `${val.percent}%` }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
