import { redirect } from "next/navigation";

/** Meta Ads destination — opens WhatsApp with ads-optimized prefill */
const WHATSAPP_NUMBER = "9779808910568";

const ADS_MESSAGE = `नमस्कार Revora Technologies,
म School Website Demo Ads हेरेर आएँ।
हाम्रो विद्यालयका लागि यस्तै आधुनिक Website को Proposal र लागत विवरण पठाइदिनुहोस्। धन्यवाद।`;

export default function AdsWhatsAppRedirect() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ADS_MESSAGE)}`;
  redirect(url);
}
