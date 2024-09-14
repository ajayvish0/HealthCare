import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { doctors } from "../constants";

const DocterCard = () => {
  return (
    <section className="doc-section">
      <h1>
        Meet Our <span>Doctors</span>
      </h1>
      <div className="docs">
        {doctors.map((doc) => (
          <Card
            key={doc.id}
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta
              title={
                <>
                  <span>{doc.name}</span>
                </>
              }
              description={
                <>
                  <h3>specialty : {doc.specialty}</h3>
                  <p>Experience: {doc.experience} years</p>
                  <p>Location: {doc.location}</p>
                </>
              }
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DocterCard;
