
"use client";

import { useState } from "react";
import { Employee } from "@/types/Employee";
import { Header, CardContainer } from "@/components/landing";
import { sharedCompanyData } from "@/lib/dummyData";

type Props = {
  employeeData: Employee;
};

export default function FlipCard({ employeeData }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="w-full [perspective:1200px]">
      <div
        className={`relative w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Cara frontal */}
        <div className="[backface-visibility:hidden]">
          <div className="flex justify-end w-full pr-[1rem]">
            <button
              type="button"
              onClick={handleClick}
              aria-label="Ver información de la empresa"
              aria-expanded={isFlipped}
              className="w-fit cursor-pointer"
            >
              <img
                src="/cambiar.png"
                alt=""
                className="w-[2rem]"
              />
            </button>
          </div>

          <CardContainer
            profilePhotoUrl={employeeData.profilePhotoUrl}
            firstName={employeeData.firstName}
            lastName={employeeData.lastName}
            phone={employeeData.phoneCard}
            email={employeeData.email}
            rol={employeeData.rol}
            website={employeeData.website}
          />
        </div>

        {/* Cara posterior */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex justify-end w-full pr-[1rem]">
            <button
              type="button"
              onClick={handleClick}
              aria-label="Volver a la tarjeta personal"
              aria-expanded={isFlipped}
              className="w-fit cursor-pointer"
            >
              <img
                src="/cambiar.png"
                alt=""
                className="w-[2rem]"
              />
            </button>
          </div>

          <Header
            name={employeeData.fullName}
            profilePhotoUrl={employeeData.profilePhotoUrl}
            company_description1={
              sharedCompanyData.company_description1
            }
          />
        </div>
      </div>
    </div>
  );
}
