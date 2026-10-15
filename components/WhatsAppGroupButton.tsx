import { brand } from "@/lib/brand";

const WhatsAppGroupButton = ({ className = "" }: { className?: string }) => {
  return (
    <a
      href={brand.whatsappGroupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center bg-[#128C7E] px-5 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#075E54] ${className}`}
    >
      {brand.whatsappGroupLabel}
    </a>
  );
};

export default WhatsAppGroupButton;
