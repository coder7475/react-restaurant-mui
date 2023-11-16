import OrderTime from "./OrderTime";
export default function CardImageOverlay() {
  return (
    <>
      {/*<!-- Component: Image overlay card --> */}
      <div className="overflow-hidden bg-[url('./../../src/assets/home/featured.jpg')] bg-fixed rounded bg-white  text-slate-500 mb-28">
        {/*  <!-- Image --> */}
        <figure className="">
         
          <figcaption className="flex justify-center items-center flex-col h-full w-full bg-gradient-to-r from-[#151515B3] to-[#151515B3] p-6 text-white">
            <OrderTime subHeading="Check it out" heading="FROM OUR MENU" />
            <div className="flex gap-4">
              <img
                src="/src/assets/home/featured.jpg"
                alt=""
                width="648px"
                height="400px"
              />
              <div className="flex flex-col gap-2 font-light w-[640px]">
                <h1 className="text-2xl">March 20, 2023</h1>
                <h2 className="text-xl">WHERE CAN I GET SOME?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <button className="w-[178px] py-2 border-b-[3px] border-y-white rounded-lg">Read More</button>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
      {/*<!-- End Image overlay card --> */}
    </>
  );
}
