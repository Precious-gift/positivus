import { TeamListProps } from "@/constants";
import React from "react";

const TeamCard = ({ name, title, description, imageUrl }: TeamListProps) => {
  return (
    <div className="card">
      <div className="card-header relative border-b-2 border-black">
        <div className="flex items-end gap-[20px] pb-[20px]">
          <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="cut-star">
                <ellipse
                  cx={50}
                  cy={50}
                  rx={25}
                  ry={50}
                  transform="rotate(315, 50, 50)"
                  style={{ fill: "yellow", strokeWidth: 3 }}
                />
                <ellipse
                  cx={50}
                  cy={50}
                  rx={25}
                  ry={50}
                  transform="rotate(45, 50, 50)"
                  style={{ fill: "yellow", strokeWidth: 3 }}
                />
              </clipPath>
            </defs>
            <rect
              width={100}
              height={100}
              rx={8}
              ry={8}
              transform="translate(5, 5)"
              fill="black"
              clip-path="url(#cut-star)"
            />
            <image
              width={100}
              height={100}
              href={imageUrl}
              clip-path="url(#cut-star)"
              style={{ fill: "yellow", strokeWidth: 3 }}
            />
          </svg>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-xs xl:text-sm">{title}</p>
          </div>
        </div>
        <svg
          width="34"
          height="34"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-1"
        >
          <circle cx={17} cy={17} r={17} style={{ fill: "black" }}></circle>
          <image
            width="17"
            height="17"
            x="8.5"
            y="8.5"
            href="/positivus_linkedin_icon.svg"
          ></image>
        </svg>
      </div>
      <div className="card-body pt-[20px]">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
