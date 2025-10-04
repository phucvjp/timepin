import AnimatedCursor from "../components/AnimatedCursor";
import DBPHero from "../components/DBPHero";
import DBPTimeline from "../components/DBPTimeline";
import DBPMap from "../components/DBPMap";
import DBPStats from "../components/DBPStats";
import DBPFooter from "../components/DBPFooter";

const ChienDichDienBienPhu = () => {
  return (
    <AnimatedCursor>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 text-white">
        {/* Hero Section */}
        <DBPHero />

        {/* Campaign Dates */}
        <section className="mx-auto max-w-4xl px-4 py-8 text-center">
          <h2 className="text-2xl font-semibold tracking-wide">
            Chiến dịch Điện Biên Phủ
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            13 tháng 3 – 7 tháng 5 năm 1954
            <span className="ml-2 opacity-80">(1 tháng, 3 tuần và 3 ngày)</span>
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Nguồn:{" "}
            <a
              href="https://vi.wikipedia.org/wiki/Chi%E1%BA%BFn_d%E1%BB%8Bch_%C4%90i%E1%BB%87n_Bi%C3%AAn_Ph%E1%BB%A7"
              className="underline hover:text-gray-200"
              target="_blank"
              rel="noreferrer"
            >
              Wikipedia
            </a>
          </p>
        </section>

        {/* Timeline Section */}
        <DBPTimeline />

        {/* Map Section */}
        <DBPMap />

        {/* Statistics Section */}
        <DBPStats />

        {/* Footer */}
        <DBPFooter />
      </div>
    </AnimatedCursor>
  );
};

export default ChienDichDienBienPhu;
