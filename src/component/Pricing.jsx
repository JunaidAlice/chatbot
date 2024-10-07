import { FaRegCircleDot } from "react-icons/fa6";
const Pricing = () => {
  const cardData = [
    {
      id: "01",
      title: "Free",
      para1:
        "Get started with the basics for free and see how finalyear.ai can help you generate innovative project ideas.",
      Pricing: "free /month",
      P1: "Access to 3 project ideas",
      P2: "Basic project outlines",
      P3: "Support for one field of study",
      P4: "Community Support",
      btn: "Continue Free",
    },
    {
      id: "02",
      title: "Starter",
      para1:
        "Perfect for students who want more detailed project ideas and flexibility in exploring multiple fields of study.",
      Pricing: "$9.99 /month",
      P1: "Access to 10 project ideas per month",
      P2: "Detailed project outlines & methodologies",
      P3: "Support for up to 3 fields of study",
      P4: "Email Support",
      btn: "Unlock Starter Pack",
    },
    {
      id: "03",
      title: "Professional",
      para1:
        "For students who want comprehensive guidance, deeper project outlines, and unlimited idea generation.",
      Pricing: "$19.99 /month",
      P1: "Unlimited project ideas",
      P2: "Advanced project outlines with tools",
      P3: "Access to cross-disciplinary ideas",
      P4: "Save and bookmark ideas for future use",
      btn: "Unlock pro",
    },
  ];
  return (
    <div id="pricing">
      <div className=" w-[90%] mx-auto rounded-t-full  border  border-purple-700"></div>

      <div className=" w-[90%] mx-auto text-center space-y-4 p-4  text-white  ">
        <h1 className="text-3xl font-bold">Simple Pricing for Every Student</h1>
        <p>
          Whether you’re just starting your project journey or need in-depth
          guidance, we have a plan that fits your needs. Choose the plan that
          works best for you!
        </p>
      </div>

       <div className="bg-purple-600 absolute p-[14%] md:p-[8%] bg-opacity-10  rounded-b-full blur-3xl left-[35%] top-[70%]"></div>
       <div className="bg-purple-600 absolute p-[14%] md:p-[8%] bg-opacity-10  rounded-b-full blur-3xl left-[35%]"></div>
       <div className="bg-purple-600 absolute p-[14%] md:p-[8%] bg-opacity-10  rounded-b-full blur-3xl left-[34%] top-[90%] "></div>
       <div className="bg-purple-600 absolute p-[14%] md:p-[8%] bg-opacity-10  rounded-b-full blur-3xl left-[35%] top-[80%]"></div>
      

      <div className="card flex md:flex-row flex-col  justify-evenly items-center relative">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="border p-3  w-[50%] md:w-[20%] rounded-xl hover:border-purple-900 md:mt-0 mt-4 mb-4 text-center "
          >
            <div className="space-y-4 ">
              <div className=" border w-fit mx-auto   px-4 text-xl font-semibold rounded-full border-purple-800">
                <h1 className="">{card.title}</h1>
              </div>
              <p>{card.para1}</p>
              <div className="font-bold">{card.Pricing}</div>
              <div className="border-spacing-y-2  text-start">
              {
                   card.P1?<div className="flex items-center gap-2 "><FaRegCircleDot/> <p>{card.P1}</p></div>:""
                }  {
                    card.P2?<div className="flex items-center gap-2 "><FaRegCircleDot/> <p>{card.P2}</p></div>:""
                 }  {
                    card.P3?<div className="flex items-center gap-2 "><FaRegCircleDot/> <p>{card.P3}</p></div>:""
                 }
               {
                   card.P4?<div className="flex items-center gap-2 tes "><FaRegCircleDot/> <p>{card.P4}</p></div>:""
                }
     
              </div>
              <button className="border border-purple-700 hover: hover:ring-1 hover:cursor-pointer px-2 py-1 rounded-md">{card.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
