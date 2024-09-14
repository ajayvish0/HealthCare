import { Avatar, Card } from "antd";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="service-section">
      <h1>
        Our Healthcare <span>Services</span>
      </h1>
      <div className="service-cards">
        {services.map((service, ind) => (
          <Card key={ind}>
            <Card.Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              }
              title={service.title}
              description={
                <>
                  <p>{service.description}</p>
                </>
              }
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
