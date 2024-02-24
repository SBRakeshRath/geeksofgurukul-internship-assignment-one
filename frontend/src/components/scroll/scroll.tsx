import Card from "../card/card";
import data from "./../../assets/iitSectionData.json";
import "./scroll.scss";
export default function Scroll() {
  return (
    <div className="scrollWrapper">
      <div className="scroll">
        <div className="initialChild">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                name={item.name}
                role={item.role}
                qualification={item.qualification}
                comment={item.comment}
                imageAlt={item.imageAlt}
                logo1={item.logo1}
                logo2={item.logo2}
                logo1Alt={item.log1Alt}
                logo2Alt={item.log2Alt}
              />
            );
          })}
        </div>
        <div className="secondaryChild">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                name={item.name}
                role={item.role}
                qualification={item.qualification}
                comment={item.comment}
                imageAlt={item.imageAlt}
                logo1={item.logo1}
                logo2={item.logo2}
                logo1Alt={item.log1Alt}
                logo2Alt={item.log2Alt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
