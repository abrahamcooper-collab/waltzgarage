import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_AREAS, getServiceAreaBySlug } from "@/app/data/services";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServiceAreaContent from "./ServiceAreaContent";

/* ── Static params for all service areas ─────────────────── */
export function generateStaticParams() {
  return SERVICE_AREAS.map((s) => ({ slug: s.slug }));
}

/* ── Dynamic metadata ────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return { title: "Area Not Found" };

  return {
    title: `Auto Repair in ${area.city}, ${area.state} | Waltz's Garage`,
    description: `${area.description} Serving ${area.city} drivers with oil changes, brake repair, exhaust fabrication, and more. Visit Waltz's Garage in Kendallville, IN.`,
  };
}

/* ── Page ─────────────────────────────────────────────────── */
export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) notFound();

  return (
    <main>
      <Navbar />
      <ServiceAreaContent area={area} />
      <Footer />
    </main>
  );
}
