import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/app/data/services";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServicePageContent from "./ServicePageContent";

/* ── Static params for all services ──────────────────────── */
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/* ── Dynamic metadata ────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} | Waltz's Garage – Kendallville, IN`,
    description: `${service.description} Trusted ${service.name.toLowerCase()} service in Kendallville, Indiana. 25 years of experience at Waltz's Garage.`,
  };
}

/* ── Page ─────────────────────────────────────────────────── */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main>
      <Navbar />
      <ServicePageContent service={service} />
      <Footer />
    </main>
  );
}
