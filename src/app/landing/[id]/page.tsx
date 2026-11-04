import { Metadata } from "next";
import { notFound } from "next/navigation";
import landingData, { sharedCompanyData } from "@/lib/dummyData";
import { Employee } from "@/types/Employee";
import { FlipCard, Portfolio, Company, QRCodeRedirect } from "@/components/landing";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return Object.keys(landingData).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const employee = landingData[id];
  if (!employee) {
    return {
      title: "Tarjeta no encontrada - Edelco",
    };
  }

  return {
    title: `${employee.fullName} - Tarjeta virtual Edelco`,
    description: `${employee.rol} en Edelco SAS. Contactá a ${employee.fullName}.`,
    openGraph: {
      title: `${employee.fullName} - Tarjeta virtual Edelco`,
      description: `${employee.rol} en Edelco SAS`,
      images: employee.profilePhotoUrl ? [employee.profilePhotoUrl] : undefined,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { id } = await params;
  const employeeData: Employee | undefined = landingData[id];

  if (!employeeData) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-gradient-radial from-background to-background">
      <ThemeToggle />

      <main className="w-full max-w-6xl mx-auto space-y-12 py-8">
        <FlipCard employeeData={employeeData} />

        <Portfolio
          whspUrl={employeeData.whspUrl}
          facebookUrl={employeeData.facebookUrl}
          emailUrl={employeeData.emailUrl}
          instagramUrl={employeeData.instagramUrl}
          phone={employeeData.phone}
          youtubeUrl={employeeData.youtubeUrl}
        />

        <Company
          company_description2={sharedCompanyData.company_description2}
          address={sharedCompanyData.address}
        />

        <QRCodeRedirect id={id} />
      </main>
    </div>
  );
}
