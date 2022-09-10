import { Badge } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const AppAccordion = ({
  color,
  icon,
  id,
  name,
  margin,
  icons,
  children,
  label,
  badge,
}) => {
  return (
    <Accordion.Item eventKey={id} style={{ margin: margin }}>
      <Accordion.Header>
        <div className="iconSec" style={{ backgroundColor: color }}>
          <img src={icons[icon]} alt="logo" />
        </div>
        <div className="titleSec">
          <p className="heading">{name}</p>
          <div className="labelSec">
            {!!badge && <Badge>{badge}</Badge>}
            <p className="label">{label}</p>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body>{children}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AppAccordion;
