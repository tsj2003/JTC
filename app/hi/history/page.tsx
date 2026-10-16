import ShopHistory from "@/components/ShopHistory";
import { brand } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "1960 से: जुनेजा ट्रेडिंग कारपोरेशन, दमोह की कहानी",
  description: `${brand.nameHi} 1960 से दमोह में है। पता: ${brand.address}. समय: ${brand.hours}. नाम और तारीखें, जो दर्ज नहीं हैं, इस पेज पर नहीं जोड़ी गईं।`,
  path: "/hi/history",
});

export default function HindiHistoryPage() {
  return <ShopHistory lang="hi" />;
}
