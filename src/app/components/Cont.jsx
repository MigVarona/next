import React from 'react';

const Cont = () => {
  return (
    <div className="flex w-full">
      <div className="grid h-20 flex-grow card bg-base-100 rounded-box place-items-center mb-10 mt-10">
        <div className="w-full h-full overflow-hidden rounded-box">
          <img src="/1.jpg" alt="Contact Image 1" className="w-full h-full object-cover" />
        </div>
        {/* Resto del contenido */}
      </div>
      <div className="divider divider-horizontal">OR</div>
      <div className="grid h-20 flex-grow card bg-base-100 rounded-box place-items-center mb-10 mt-10">
        <div className="w-full h-full overflow-hidden rounded-box">
          <img src="/1.jpg" alt="Contact Image 2" className="w-full h-full object-cover" />
        </div>
        {/* Resto del contenido */}
      </div>
    </div>
  );
}

export default Cont;
