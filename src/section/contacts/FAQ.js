import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./FAQ.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const data = {
    title: "FAQ",
    rows: [
      {
        title: "What is AdBlue,",
        content: `AdBlue is a solution made from urea and deionized water. It is used in diesel engines equipped with Selective Catalytic Reduction (SCR) technology to reduce harmful nitrogen oxide (NOx) emissions. When injected into the exhaust system, AdBlue reacts with the NOx gases and converts them into harmless nitrogen and water vapor.`,
      },
      {
        title: "What is SCR technology",
        content:
          "Selective Catalytic Reduction (SCR) is an advanced emissions control technology used in diesel vehicles. It involves the injection of AdBlue (a urea-based solution) into the exhaust stream of a diesel engine. In the SCR catalyst, AdBlue reacts with nitrogen oxides (NOx) in the exhaust gases, converting them into nitrogen and water, which are environmentally friendly components.",
      },
      {
        title: "Why should I use AdBlue",
        content: `Using AdBlue is essential for diesel vehicles equipped with SCR technology to comply with strict emission standards. It helps reduce harmful NOx emissions, which contribute to air pollution and environmental damage. By using AdBlue, you contribute to cleaner air and a healthier environment.`,
      },
      {
        title: "Does AdBlue affect fuel consumption",
        content:
          "AdBlue itself does not affect fuel consumption directly. However, the SCR system might lead to a slight increase in fuel consumption because it optimizes the combustion process to reduce NOx emissions. The amount of AdBlue used is relatively small compared to the amount of diesel consumed.",
      },
      {
        title: "How long does AdBlue last",
        content:
          "AdBlue should be stored in a cool, dry place away from direct sunlight. It should be kept in its original sealed container to prevent contamination. Do not mix AdBlue with water or other substances, as it needs to maintain its purity to function effectively in the SCR system.",
      },
      {
        title: "Does AdBlue clean injectors",
        content:
          "AdBlue is primarily used for reducing NOx emissions and does not have a direct cleaning effect on injectors. However, the proper functioning of the SCR system, facilitated by AdBlue, can indirectly contribute to the overall efficiency of the engine, which may result in cleaner combustion and, in the long term, better injector performance. Regular maintenance and using high-quality fuel are essential for injector cleanliness.",
      },
    ],
  };

  const styles = {
    bgColor: "#78bf54",
    titleTextColor: "#254294",
    rowTitleColor: "#000",
    rowContentColor: "#fff",
    // arrowColor: "red",
    padding: 10,
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  const handleFaqClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <section className="faq">
      {data.rows.map((item, index) => (
        <div className="faq-item" key={index}>
          <div
            className={`faq-question ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleFaqClick(index)}
          >
            {item.title}
          </div>
          {index === activeIndex && (
            <div className="faq-answer">{item.content}</div>
          )}
        </div>
      ))}
    </section>
  );
}
