import React from "react";
import IMAGE from "../assets/top_selling_products/iPhone-12-2-removebg-preview 1.png";
import { FaRegStar, FaStar } from "react-icons/fa";

interface ListingProps {
  title: string;
  data: Record<string, any>;
}

const Listing: React.FC<ListingProps> = ({ title, data }) => {
  return (
    <div className="bg-white p-5 flex flex-col rounded-xl">
      <div className="flex flex-row justify-start w-full mb-5">
        <div className="py-6">
          <p className="text-[#000000] text-opacity-70 font-bold text-[18px] font-text">
            {title}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        {data.map((dt: any, index: any) => {
          return (
            <div className="flex w-full" key={`product-${index}`}>
              <div className="flex flex-row gap-2 w-full items-center">
                <div className="flex justify-center items-center bg-saas-primary bg-opacity-60 rounded-md py-3 px-2">
                  <img src={IMAGE} width={100} />
                </div>
                <div className="flex flex-col gap-4 justify-start w-5/6 mx-2">
                  <div className="text-[#000000] text-[15px] font-normal text-opacity-100">
                    {dt.product_name}
                  </div>
                  <div className="inline-flex items-center">
                    {new Array(5).fill(null).map((_, index) => {
                      return index < dt.rating ? (
                        <FaStar key={index} className="text-saas-yellow" />
                      ) : (
                        <FaRegStar key={index} className="text-saas-yellow" />
                      );
                    })}
                  </div>
                  <div className="text-[15px] text-[#000000] font-bold">
                    ${dt.price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listing;
