"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteDialog from "@/components/QuoteDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Laptop,
  Printer,
  Network,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Users,
  Award,
  ChevronRight,
  Check,
  Server,
  MailQuestion,
  Wrench,
  ThumbsUp,
  Star,
  ExternalLink,
} from "lucide-react";

// Official brand vector SVG components
const AppleIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <title>Apple</title>
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
  </svg>
);

const HPIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <title>HP</title>
    <path d="M12.0069 24h-.3572l2.459-6.7453h3.3796c.5907 0 1.2364-.4533 1.4424-1.0166l2.6652-7.3085c.4396-1.1952-.2473-2.1706-1.525-2.1706h-4.6983l-3.929 10.798-2.2255 6.127C3.929 22.434 0 17.6806 0 12.007 0 6.498 3.7092 1.8546 8.7647.4396L6.4705 6.759 2.6514 17.2547h2.5415L8.4488 8.339h1.9095l-3.2558 8.9158H9.644l3.0223-8.3251c.4396-1.1952-.2473-2.1706-1.525-2.1706h-2.143l2.459-6.7453C11.636 0 11.8145 0 11.9931 0 18.6285 0 24 5.3715 24 12.007c.0137 6.6216-5.3578 11.993-11.9931 11.993zM19.2742 8.325h-1.9096l-2.6789 7.336h1.9096l2.6789-7.336z"/>
  </svg>
);

const DellIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <title>Dell</title>
    <path d="M17.963 14.6V9.324h1.222v4.204h2.14v1.07h-3.362zm-9.784-3.288l2.98-2.292c.281.228.56.458.841.687l-2.827 2.14.611.535 2.827-2.216c.281.228.56.458.841.688a295.83 295.83 0 0 1-2.827 2.216l.61.536 2.83-2.295-.001-1.986h1.223v4.204h2.216v1.07h-3.362v-1.987c-.995.763-1.987 1.529-2.981 2.292l-2.981-2.292c-.144.729-.653 1.36-1.312 1.694-.285.147-.597.24-.915.276-.183.022-.367.017-.551.017H3.516V9.325H5.69a2.544 2.544 0 0 1 1.563.557c.454.36.778.872.927 1.43m-3.516-.917v3.21l.953-.001a1.377 1.377 0 0 0 1.036-.523 1.74 1.74 0 0 0 .182-1.889 1.494 1.494 0 0 0-.976-.766c-.166-.04-.338-.03-.507-.032h-.688zM11.82 0h.337a11.94 11.94 0 0 1 5.405 1.373 12.101 12.101 0 0 1 4.126 3.557A11.93 11.93 0 0 1 24 11.82v.36a11.963 11.963 0 0 1-3.236 8.033A11.967 11.967 0 0 1 12.182 24h-.361a11.993 11.993 0 0 1-4.145-.806 12.04 12.04 0 0 1-4.274-2.836A12.057 12.057 0 0 1 .576 15.67 12.006 12.006 0 0 1 0 12.181v-.361a11.924 11.924 0 0 1 1.992-6.396 12.211 12.211 0 0 1 4.71-4.172A11.875 11.875 0 0 1 11.82 0m-.153 1.23a10.724 10.724 0 0 0-6.43 2.375 10.78 10.78 0 0 0-3.319 4.573 10.858 10.858 0 0 0 .193 8.12 10.788 10.788 0 0 0 3.546 4.421 10.698 10.698 0 0 0 4.786 1.946c1.456.209 2.955.124 4.376-.26a10.756 10.756 0 0 0 5.075-3.062 10.742 10.742 0 0 0 2.686-5.28 10.915 10.915 0 0 0-.122-4.682 10.77 10.77 0 0 0-7.098-7.626 10.78 10.78 0 0 0-3.693-.525z"/>
  </svg>
);

const AsusIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <title>ASUS</title>
    <path d="M23.904 10.788V9.522h-4.656c-.972 0-1.41.6-1.482 1.182v.018-1.2h-1.368v1.266h1.362zm-6.144.456l-1.368-.078v1.458c0 .456-.228.594-1.02.594H14.28c-.654 0-.93-.186-.93-.594v-1.596l-1.386-.102v1.812h-.03c-.078-.528-.276-1.14-1.596-1.23L6 11.22c0 .666.474 1.062 1.218 1.14l3.024.306c.24.018.414.09.414.288 0 .216-.18.24-.456.24H5.946V11.22l-1.386-.09v3.348h5.646c1.26 0 1.662-.654 1.722-1.2h.03c.156.864.912 1.2 2.19 1.2h1.41c1.494 0 2.202-.456 2.202-1.524zm4.398.258l-4.338-.258c0 .666.438 1.11 1.182 1.17l3.09.24c.24.018.384.078.384.276 0 .186-.168.258-.516.258h-4.212v1.29h4.302c1.356 0 1.95-.474 1.95-1.554 0-.972-.534-1.338-1.842-1.422zm-10.194-1.98h1.386v1.266h-1.386zM3.798 11.07l-1.506-.15L0 14.478h1.686zm7.914-1.548h-4.23c-.984 0-1.416.612-1.518 1.2v-1.2H3.618c-.33 0-.486.102-.642.33l-.648.936h9.384Z"/>
  </svg>
);

const LenovoIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <title>Lenovo</title>
    <path d="M21.044 12.288c0 .5-.343.867-.815.867-.464 0-.827-.38-.827-.867 0-.51.343-.868.815-.868.464 0 .827.381.827.868zm-14.305-.92a.787.787 0 0 0-.651.307.991.991 0 0 0-.172.738l1.479-.614a.708.708 0 0 0-.656-.43zm6.963.052c-.472 0-.816.358-.816.868 0 .486.364.867.828.867.472 0 .815-.368.815-.867 0-.487-.363-.868-.827-.868zM24 7.997v8.006H0V7.997h24zM5.01 13.05H3.088V9.825H2.23v4.003h2.78v-.777zm1.137-.094l2.163-.897a1.667 1.667 0 0 0-.37-.86c-.284-.33-.704-.505-1.216-.505-.931 0-1.633.686-1.633 1.593 0 .93.704 1.593 1.726 1.593.572 0 1.158-.272 1.432-.589l-.535-.411c-.357.264-.56.326-.885.326-.292 0-.52-.09-.682-.25zm5.57-1.039c0-.709-.507-1.223-1.252-1.223a1.28 1.28 0 0 0-1.005.494v-.442h-.846v3.081h.846v-1.753c0-.316.245-.651.698-.651.35 0 .712.243.712.651v1.753h.847v-1.91zm3.647.37c0-.904-.725-1.593-1.65-1.593-.933 0-1.663.7-1.663 1.593 0 .903.726 1.592 1.651 1.592.932 0 1.662-.7 1.662-1.592zm2.066 1.54l1.268-3.081h-.967l-.765 2.099-.765-2.1h-.966l1.268 3.081h.927zm4.449-1.54c0-.904-.725-1.593-1.65-1.593-.932 0-1.662-.7 1.662-1.593 0 .903.725 1.592 1.65 1.592.932 0 1.662-.7 1.662-1.592z"/>
  </svg>
);

const AcerIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <title>Acer</title>
    <path d="M23.943 9.364c-.085-.113-.17-.198-.595-.226-.113 0-.453-.029-1.048-.029-1.56 0-2.636.482-3.175 1.417.142-.935-.765-1.417-2.749-1.417-2.324 0-3.798.935-4.393 2.834-.226.709-.226 1.276-.056 1.73h-.567c-.425.027-.992.056-1.36.056-.85 0-1.39-.142-1.588-.425-.17-.255-.17-.737.057-1.446.368-1.162 1.247-1.672 2.664-1.672.737 0 1.445.085 1.445.085.085 0 .142-.113.142-.198l-.028-.085-.057-.397c-.028-.255-.227-.397-.567-.453-.311-.029-.567-.029-.907-.029h-.028c-1.842 0-3.146.624-3.854 1.814.255-1.219-.596-1.814-2.551-1.814-1.105 0-1.9.029-2.353.085-.368.057-.595.199-.68.454l-.17.51c-.028.085.029.142.142.142.085 0 .425-.057.992-.086a24.816 24.816 0 0 1 1.672-.085c1.077 0 1.559.284 1.389.822-.029.114-.114.199-.255.227-1.02.17-1.842.284-2.438.369-1.7.226-2.692.736-2.947 1.587-.369 1.162.538 1.728 2.72 1.728 1.078 0 2.013-.056 2.75-.198.425-.085.652-.17.737-.453l.396-1.304c-.028 1.304.85 1.955 2.721 1.955.794 0 1.559-.028 1.927-.085.369-.056.567-.141.652-.425l.085-.396c.397.623 1.276.935 2.608.935 1.417 0 2.239-.029 2.465-.114a.523.523 0 0 0 .369-.311l.028-.085.17-.539c.029-.085-.028-.142-.142-.142l-.906.057c-.596.029-1.077.057-1.418.057-.651 0-1.076-.057-1.332-.142-.368-.142-.538-.397-.51-.822l2.863-.368c1.275-.17 2.154-.567 2.579-1.19l-.992 3.315c-.028.057 0 .114.028.142.029.028.085.057.199.057h1.19c.198 0 .283-.114.312-.199l1.048-3.656c.142-.481.567-.708 1.36-.708.71 0 1.22 0 1.56.028h.028c.057 0 .17-.028.255-.17l.17-.51c0-.085 0-.17-.057-.227zM4.841 13.73c-.368.057-.907.085-1.587.085-1.219 0-1.729-.255-1.587-.737.113-.34.425-.567.935-.624l2.75-.368zm12.669-2.95c-.114.369-.652.624-1.616.766l-2.295.311.056-.198c.199-.624.454-1.02.794-1.247.34-.227.907-.34 1.7-.34 1.05.028 1.503.255 1.36.708Z"/>
  </svg>
);

const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInterest, setQuoteInterest] = useState("");

  const handleOpenQuote = (interestCategory?: string) => {
    if (interestCategory) {
      setQuoteInterest(interestCategory);
    }
    setIsQuoteOpen(true);
  };

  // Static product list categorized
  const productCategories = {
    computers: [
      {
        name: "Premium Laptops",
        brand: "Apple | HP | Dell | Asus | Lenovo",
        desc: "High-performance enterprise & creator laptops with professional support.",
        features: ["Official Warranties", "Pre-configured OS", "Authorized Repairs"],
      },
      {
        name: "Enterprise Desktops & Workstations",
        brand: "HP | Dell | Lenovo | Custom Builds",
        desc: "Configured specifically for textile offices, accounting hubs, and developers.",
        features: ["Intel Core / Ryzen", "High reliability", "Rapid replacement parts"],
      },
      {
        name: "Business Servers & Storage",
        brand: "Dell PowerEdge | HPE ProLiant | Lenovo",
        desc: "Local server setups for databases, shared networks, and file systems.",
        features: ["Xeon/EPYC processors", "RAID configurations", "Server rack accessories"],
      },
    ],
    printers: [
      {
        name: "Office Laser & Inkjet Printers",
        brand: "HP | Canon | Epson | Brother",
        desc: "All-in-one printer setups perfect for textile invoice printing and corporate use.",
        features: ["Wireless connectivity", "Duplex printing", "Heavy duty cycle"],
      },
      {
        name: "Genuine Ink & Toner Cartridges",
        brand: "HP | Dell | Epson | Canon Spares",
        desc: "Authorized consumables ensuring long life and sharp contrast for all prints.",
        features: ["100% Genuine Toners", "Bulk delivery available", "Ink refill services"],
      },
      {
        name: "Printer Spares & Services",
        brand: "Multiple Brands",
        desc: "Repair services for fuser assemblies, paper rollers, and carriage belts.",
        features: ["Original spare parts", "Same-day servicing", "Cartridge replacement"],
      },
    ],
    networking: [
      {
        name: "Managed Switches & Routers",
        brand: "Cisco | Aruba | D-Link | TP-Link",
        desc: "Robust physical networking pipelines for smooth data transmission across divisions.",
        features: ["Gigabit/10G Speeds", "PoE (Power over Ethernet)", "VLAN configuration"],
      },
      {
        name: "Enterprise Firewalls",
        brand: "Sophos | Fortinet | SonicWall",
        desc: "Industrial cyber security setups protecting textile designs and accounting databases.",
        features: ["Intrusion Prevention (IPS)", "VPN for remote staff", "Web filtering"],
      },
      {
        name: "Structured Cabling & Wi-Fi Access Points",
        brand: "Ubiquiti | Aruba Instant On | Ruijie",
        desc: "Seamless, high-coverage Wi-Fi layouts for mills, colleges, and offices.",
        features: ["Structured patch panels", "Mesh Wi-Fi routing", "Network mapping & audits"],
      },
    ],
    accessories: [
      {
        name: "Laptop Power Adapters & Batteries",
        brand: "Apple | HP | Dell | Lenovo | Asus",
        desc: "Genuine replacement power adapters and high-capacity backup batteries.",
        features: ["Voltage surge protection", "Brand warranties", "Correct pin types"],
      },
      {
        name: "Enterprise UPS Systems",
        brand: "APC | Microtek | Luminous",
        desc: "Uninterrupted power systems to protect servers and desktop computers from power cuts.",
        features: ["Backup batteries", "Surge filtering", "Clean sine-wave output"],
      },
      {
        name: "Accessories & Peripherals",
        brand: "Logitech | Dell | HP",
        desc: "Wired & wireless keyboards, ergonomic mice, computer speakers, and cables.",
        features: ["Bulk supply rates", "Premium build quality", "Easy replacement"],
      },
    ],
  };

  return (
    <>
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-grow bg-white">
        {/* Section 1: Hero Section */}
        <section
          id="home"
          className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white"
        >
          {/* Subtle light mesh decorations */}
          <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Grid background overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Area */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>18+ Years of Trusted Support in Karur</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[54px] lg:leading-[1.15] font-black tracking-tight text-slate-900">
                  Next-Gen IT
                  <br />
                  Infrastructure &
                  <br />
                  <span className="text-blue-600">
                    Multi-Brand Sales
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-655 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  We supply premium desktops, laptops, servers, printer units, firewalls, and networking accessories. Backed by 18 years of immediate, on-site troubleshooting.
                </p>

                {/* Same-size buttons aligned next to each other */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => handleOpenQuote()}
                    className="w-full sm:w-auto sm:min-w-[185px] h-12 bg-blue-650 hover:bg-blue-700 text-white font-bold rounded-full text-sm sm:text-base border-0 shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer outline-none"
                  >
                    Request Callback
                  </button>
                  <a
                    href="#products"
                    className="w-full sm:w-auto sm:min-w-[185px] h-12 bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 font-bold rounded-full text-sm sm:text-base border-0 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer outline-none"
                  >
                    <span>Explore Products</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Micro highlights */}
                <div className="grid grid-cols-3 gap-4 pt-4 text-left max-w-md mx-auto lg:mx-0 border-t border-slate-100">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">100%</h3>
                    <p className="text-xs text-slate-550">Genuine Parts</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Instant</h3>
                    <p className="text-xs text-slate-550">On-Site Servicing</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Multi-Brand</h3>
                    <p className="text-xs text-slate-550">Sales & Repairs</p>
                  </div>
                </div>
              </div>

              {/* Owner Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-[360px] sm:max-w-[400px]">
                  {/* Decorative glow box */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur-md opacity-20" />
                  
                  {/* Business Card content - matches the light mode card in the screenshot */}
                  <div className="relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl text-slate-900">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-400 tracking-wider">FOUNDER & LEAD ENGINEER</h4>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Surya</h3>
                      </div>
                      <div className="bg-blue-50/50 border border-blue-200 text-blue-600 text-xs px-3 py-1 rounded-full font-bold">
                        BNI Karur
                      </div>
                    </div>

                    <div className="space-y-4 text-sm text-slate-650">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p>18 Years experience delivering custom business desktop systems.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p>Immediate daily support - solving customer repairs instantly.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p>Ideal Partner for textile factories, educational centers, exports & coaches.</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                      <a
                        href="tel:9894740202"
                        className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-250 px-4 h-12 rounded-full transition-all text-sm font-semibold justify-center text-slate-700 hover:text-slate-900 cursor-pointer shadow-sm"
                      >
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span>Call Surya: 9894740202</span>
                      </a>
                      <a
                        href="https://wa.me/919894740202"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-full transition-all text-sm shadow-md shadow-green-500/10 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Stats Section */}
        <section className="bg-slate-50 border-y border-slate-200 py-10 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-600">18+</h3>
                <p className="text-sm font-semibold text-slate-600 mt-1">Years In Business</p>
              </div>
              <div className="border-l border-slate-200">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-600">1,000+</h3>
                <p className="text-sm font-semibold text-slate-600 mt-1">Desktops Delivered Last Year</p>
              </div>
              <div className="border-l border-slate-200">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-600">5,000+</h3>
                <p className="text-sm font-semibold text-slate-600 mt-1">Target Customers Support</p>
              </div>
              <div className="border-l border-slate-200">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-600">44+</h3>
                <p className="text-sm font-semibold text-slate-600 mt-1">Years Living in Karur</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Brand Showcase (Exact logo cards layout from screenshot) */}
        <section className="bg-white py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                OUR PARTNERS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Supporting Premium Multi-Brand Solutions
              </h2>
              <p className="text-sm text-slate-500">
                Authorized partner and distributor for leading global IT hardware manufacturers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-stretch">
              
              {/* Apple Card */}
              <div className="bg-black border border-slate-900 rounded-3xl p-6 flex flex-col items-center justify-between text-center min-h-[175px] shadow-sm hover:scale-[1.03] transition-all duration-300">
                <AppleIcon className="w-12 h-12 text-slate-200" />
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">APPLE</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Authorized Partner</p>
                </div>
              </div>

              {/* HP Card */}
              <div className="bg-black border border-slate-900 rounded-3xl p-6 flex flex-col items-center justify-between text-center min-h-[175px] shadow-sm hover:scale-[1.03] transition-all duration-300">
                <HPIcon className="w-12 h-12 text-white" />
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">HP</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Authorized Partner</p>
                </div>
              </div>

              {/* Dell Card (Highlighted) */}
              <div className="bg-white border-2 border-blue-500 rounded-3xl p-6 flex flex-col items-center justify-between text-center min-h-[175px] shadow-md hover:scale-[1.03] transition-all duration-300">
                <DellIcon className="w-12 h-12 text-blue-600" />
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">DELL</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Authorized Partner</p>
                </div>
              </div>

              {/* Asus Card */}
              <div className="bg-slate-950 border border-slate-900 rounded-3xl p-6 flex flex-col items-center justify-between text-center min-h-[175px] shadow-sm hover:scale-[1.03] transition-all duration-300">
                <AsusIcon className="w-16 h-12 text-white mt-1" />
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">ASUS</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Authorized Partner</p>
                </div>
              </div>

              {/* Lenovo Card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col items-center justify-between text-center min-h-[175px] shadow-sm hover:scale-[1.03] transition-all duration-300 hover:border-slate-300">
                <LenovoIcon className="w-16 h-12 text-blue-600 mt-1" />
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">LENOVO</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Authorized Partner</p>
                </div>
              </div>

              {/* Acer Card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col items-center justify-between text-center min-h-[175px] shadow-sm hover:scale-[1.03] transition-all duration-300 hover:border-slate-300">
                <AcerIcon className="w-16 h-12 text-green-600 mt-1" />
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">ACER</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Authorized Partner</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: About Us */}
        <section id="about" className="py-20 bg-slate-50 border-b border-slate-200 relative">
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Story & Social Links */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>About Digital Network</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                  18+ Years of Unwavering Integrity, Punctuality & Local Trust
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  Established in 2008 in Karur, Tamil Nadu, **Digital Network** has grown to become the area's premier hub for computing sales, networking design, and prompt hardware services. Under the leadership of Surya, a computer service support expert who has lived in Karur for 44 years, we prioritize the technical health of local businesses, educational setups, and export units.
                </p>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  We solve regular customer complaints immediately on-site or via secure remote channels. By providing only 100% genuine components, transparent pricing, and strict adherence to timelines, we ensure your operations suffer zero interruption.
                </p>

                {/* Social Connects */}
                <div className="pt-4 space-y-3">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Connect With Us & Read Reviews
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.google.com/search?q=Digital+Network&ie=utf-8&oe=utf-8&aq=t#mpd=~8285487422315676011/customers/reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-yellow-600 hover:text-yellow-700 transition-colors px-4 py-2.5 rounded-xl text-xs font-semibold shadow-sm"
                    >
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span>Google Reviews</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    
                    <a
                      href="https://www.facebook.com/jaganhp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-blue-600 hover:text-blue-700 transition-colors px-4 py-2.5 rounded-xl text-xs font-semibold shadow-sm"
                    >
                      <FacebookIcon className="w-4 h-4 text-blue-600" />
                      <span>Facebook</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>

                    <a
                      href="https://x.com/Jagan1583553Hp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 hover:text-black transition-colors px-4 py-2.5 rounded-xl text-xs font-semibold shadow-sm"
                    >
                      <TwitterIcon className="w-4 h-4 text-slate-700" />
                      <span>X (Twitter)</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Vision & Ambition Card */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-15" />
                  
                  <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-white shadow-xl">
                    <h4 className="text-sm font-bold text-blue-400 tracking-wider uppercase">
                      Our Future Vision
                    </h4>
                    
                    <h3 className="text-xl font-extrabold text-white leading-snug">
                      Expanding into Multi-Brand Showrooms
                    </h3>
                    
                    <p className="text-xs text-slate-350 leading-relaxed">
                      Our burning desire is to establish dedicated Multi-Brand Showrooms in Karur and surrounding districts, offering direct access to authorized computing setups (Apple, HP, Dell, Asus, Lenovo) and enterprise hardware solutions for everyone.
                    </p>

                    <div className="border-t border-slate-800 pt-4 space-y-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-xs text-slate-300">Continuous engineering & skill updates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-xs text-slate-300">Punctuality and timing in corporate installations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-xs text-slate-300">Quality, genuine components with brand warranties</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Product Catalog */}
        <section id="products" className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Product Catalog
              </h2>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900">
                Authorized Hardware & Networking Products
              </h3>
              <p className="text-sm text-slate-500">
                Explore our massive range of premium hardware systems. We provide procurement, setup configuration, and on-site support.
              </p>
            </div>

            <Tabs defaultValue="computers" className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList className="bg-slate-50 border border-slate-200 p-1 rounded-xl flex flex-wrap sm:flex-nowrap gap-1">
                  <TabsTrigger
                    value="computers"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-500 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all border-0 cursor-pointer"
                  >
                    <Laptop className="w-4 h-4 mr-2 inline-block" />
                    Computers & Servers
                  </TabsTrigger>
                  <TabsTrigger
                    value="printers"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-500 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all border-0 cursor-pointer"
                  >
                    <Printer className="w-4 h-4 mr-2 inline-block" />
                    Printers & Ink
                  </TabsTrigger>
                  <TabsTrigger
                    value="networking"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-500 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all border-0 cursor-pointer"
                  >
                    <Network className="w-4 h-4 mr-2 inline-block" />
                    Networking & Security
                  </TabsTrigger>
                  <TabsTrigger
                    value="accessories"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-500 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all border-0 cursor-pointer"
                  >
                    <Server className="w-4 h-4 mr-2 inline-block" />
                    Accessories & Peripherals
                  </TabsTrigger>
                </TabsList>
              </div>

              {Object.entries(productCategories).map(([key, items]) => (
                <TabsContent key={key} value={key} className="focus:outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((prod, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-350 hover:shadow-lg transition-all shadow-sm"
                      >
                        <div className="space-y-4">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-slate-50 text-blue-600 border border-slate-100">
                            {prod.brand}
                          </span>
                          <h4 className="text-lg font-bold text-slate-900 pt-1">{prod.name}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{prod.desc}</p>

                          <ul className="space-y-2 pt-2">
                            {prod.features.map((feat, fidx) => (
                              <li key={fidx} className="flex items-center gap-2 text-xs text-slate-600">
                                <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6">
                          <button
                            onClick={() => handleOpenQuote(prod.name)}
                            className="w-full h-10 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 rounded-xl text-xs font-semibold flex items-center justify-center cursor-pointer transition-colors"
                          >
                            Inquire Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Section 5: Services & Solutions */}
        <section id="services" className="py-20 bg-slate-55 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Services & Repairs
              </h2>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900">
                Comprehensive Technical Support Solutions
              </h3>
              <p className="text-sm text-slate-500">
                We handle the technical complexities so you can focus on running your business operations smoothly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 hover:border-blue-500/30 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Multi-Brand Repairs</h4>
                <p className="text-xs text-slate-550 leading-relaxed">
                  Deep component level support and testing for laptops, desktops, and printer systems. Original replacement spares.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 hover:border-blue-500/30 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Network className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Network Engineering</h4>
                <p className="text-xs text-slate-550 leading-relaxed">
                  Routing, switching, Wi-Fi layout coverage, and cabling configurations customized for mills, factories, and college offices.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 hover:border-blue-500/30 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MailQuestion className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">G Suite & Domain Email</h4>
                <p className="text-xs text-slate-550 leading-relaxed">
                  Domain verification, custom email routing, Google Workspace setup, user permission management, and daily server security.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 hover:border-blue-500/30 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Clock className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Instant On-Site Support</h4>
                <p className="text-xs text-slate-550 leading-relaxed">
                  We solve regular customer complaints instantly on-site. Minimizing business downtime and operations disruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: BNI Network & Trust Pillars */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[90px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column: BNI Details */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-xs font-semibold text-red-650">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>Proud BNI Chapter Member</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                  Building High-Trust Relationships in Karur
                </h3>
                <p className="text-sm text-slate-655 leading-relaxed">
                  As an active member of BNI, Surya is committed to professional business ethics, punctuality, and verified quality standards. We believe in helping our business community thrive through reliable technology infrastructure.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                    <Users className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Ideal Referral Partners</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Textile factory owners, apparel exporters, finance agencies, private educational setups, and vehicle coach builders who require secure networks and reliable computers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                    <ThumbsUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Key to Success</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Strict punctuality, transparent pricing, verified premium quality products, continuous engineering skill updates, and immediate service response times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Values grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <h4 className="text-lg font-bold text-slate-900">Good Pricing</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Transparent, factory-direct pricing for computer parts, toners, and software licenses without middleman markups.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <h4 className="text-lg font-bold text-slate-900">Good Quality</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Strict sourcing of authorized hardware components (Apple, HP, Dell) with official brand warranty certificates.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <h4 className="text-lg font-bold text-slate-900">Punctuality</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Strict discipline in timelines. We respect your enterprise scheduling to minimize system setup pauses.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <h4 className="text-lg font-bold text-slate-900">Skill Updations</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Continuous learning in software and server engineering to resolve complex firewall and email issues swiftly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Our Office Location in Karur (Contact & Maps Section) */}
        <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Centered Heading */}
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                VISIT US
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Our Office Location in Karur
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Visit us at our office location to discuss your IT requirements and see our product range.
              </p>
            </div>

            {/* Grid Map and Info cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Map Left Container */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-4 flex flex-col relative overflow-hidden shadow-sm min-h-[380px]">
                {/* Floating "Open in Maps" button */}
                <div className="absolute top-6 left-6 z-10">
                  <a
                    href="https://maps.google.com/?q=438,+VAIYAPURI+NAGAR,+2ND+CROSS,+Anna+Colony,+Kongu+Nagar,+Vengamedu,+Karur,+639002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white/95 hover:bg-white border border-slate-200 text-xs font-bold text-slate-800 px-3 py-2 rounded-xl transition-all shadow-md backdrop-blur-sm"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>

                {/* Google Maps Iframe */}
                <div className="w-full h-full flex-grow rounded-2xl overflow-hidden border border-slate-150 relative">
                  <iframe
                    title="Digital Network Office Location Map"
                    src="https://maps.google.com/maps?q=438%20Vaiyapuri%20Nagar%202nd%20Cross%20Vengamedu%20Karur%20639002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="w-full h-full min-h-[340px] absolute inset-0"
                  />
                </div>
              </div>

              {/* Info Cards Right Container */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                
                {/* Card 1: Our Address */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 flex items-start gap-4 shadow-sm flex-grow">
                  <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 mt-1 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-base">Our Address</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      438, Vaiyapuri Nagar, 2nd Cross, 7/51A, Anna Colony, Kongu Nagar, Vengamedu, Karur - 639002, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Card 2: Contact Number */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 flex items-start gap-4 shadow-sm flex-grow">
                  <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 mt-1 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-base">Contact Number</h4>
                    <a
                      href="tel:9894740202"
                      className="block font-bold text-blue-600 text-lg hover:underline transition-all"
                    >
                      +91 9894740202
                    </a>
                    <p className="text-xs text-slate-500">Available Monday - Saturday, 9AM - 6PM</p>
                  </div>
                </div>

                {/* Card 3: Email Address */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 flex items-start gap-4 shadow-sm flex-grow">
                  <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 mt-1 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-base">Email Address</h4>
                    <a
                      href="mailto:9894740202.surya@gmail.com"
                      className="block font-bold text-slate-700 hover:text-blue-600 text-base break-all transition-colors"
                    >
                      9894740202.surya@gmail.com
                    </a>
                  </div>
                </div>

                {/* CTA Action Button */}
                <button
                  onClick={() => handleOpenQuote()}
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl border-0 shadow-lg shadow-blue-500/20 hover:scale-[1.01] transition-all flex items-center justify-center cursor-pointer outline-none"
                >
                  Schedule a Visit / Get Quote
                </button>

              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />

      <QuoteDialog
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </>
  );
}
