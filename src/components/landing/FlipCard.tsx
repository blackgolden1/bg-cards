"use client";

import { Employee } from "@/types/Employee";
import { Header, CardContainer } from "@/components/landing";

interface FlipCardProps {
  employeeData: Employee;
}

export default function FlipCard({ employeeData }: FlipCardProps) {
  return (
    <section className="relative w-full">
      <Header
        name={employeeData.fullName}
        role={employeeData.rol}
        profilePhotoUrl={employeeData.profilePhotoUrl}
      />
      <CardContainer
        firstName={employeeData.firstName}
        lastName={employeeData.lastName}
        phone={employeeData.phoneCard}
        email={employeeData.email}
        rol={employeeData.rol}
        website={employeeData.website}
      />
    </section>
  );
}
