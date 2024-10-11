const Features = () => {
  const cardData = [
    {
      Heading: "Project Sugestions",
      para: "Get project ideas that align with your academic focus and passion. ",
    },
    {
      Heading: "AI-Driven Creativity",

      para: "Leverage advanced AI to unlock fresh, innovative ideas you hadn’t considered.",
    },
    {
      Heading: "Comprehensive Project Plans",
      para: "Receive fully detailed outlines that guide your project from concept to completion. ",
    },
    {
      Heading: "Easy-to-Use Platform",
      para: "Our intuitive interface ensures you can generate and review ideas in seconds. ",
    },
  ];
  return (
    <div id="features" className="text-center text-black " >
      <h1 className="pb-4 text-3xl font-bold">Why Choose Final Year.ai</h1>
      <div className=" flex flex-wrap gap-6 justify-center p-4 mb-2  ">
    {cardData.map((Card ,index)=>(
        <div key={index} >
            <div className="p-2 text-center border w-44 backdrop-blur-md rounded-md hover:bg-blue-600 hover:text-white bg-opacity-20 shadow-lg  hover:border-purple-600">
                <h1 className="text-lg font-bold mb-4">{Card.Heading}</h1>
                <p>{Card.para}</p>
            </div>

        </div>
    ))}
      </div>
    </div>
  );
};

export default Features;
