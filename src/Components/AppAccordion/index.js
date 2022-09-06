import { Badge } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const AppAccordion = ({
  id,
  img,
  title,
  label,
  badge,
  children,
  margin,
  logoBg,
}) => {
  return (
    <Accordion.Item eventKey={id} style={{ margin: margin }}>
      <Accordion.Header>
        <div className="iconSec" style={{ backgroundColor: logoBg }}>
          <img src={img} alt="logo" />
        </div>
        <div className="titleSec">
          <p className="heading">{title}</p>
          <div className="labelSec">
            <Badge>{badge}</Badge>
            <p className="label">{label}</p>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body >{children}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AppAccordion;
