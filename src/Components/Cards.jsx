import React from 'react';

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-xl font-bold text-center py-8">Secure Privacy</h2>
          <div className="text-center font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi
            dolorum sapiente aspernatur et saepe voluptatibus commodi quam rem
            dolorem?
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Learn More
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-xl font-bold text-center py-8">
            Fingerprint Lock
          </h2>
          <div className="text-center font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ipsum
            harum quibusdam tenetur qui praesentium fuga voluptate possimus
            ipsam eum!
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Learn More
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-xl font-bold text-center py-8">Smart control</h2>
          <div className="text-center font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            voluptatem officia voluptates commodi quam illum fugiat aliquam
            expedita itaque quas?
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
