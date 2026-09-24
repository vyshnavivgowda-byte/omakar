


export default function Stats() {
  return (
    <>
      {/* Stats */}
      <section className="relative z-20 -mt-8 sm:-mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-6 rounded-2xl bg-[#fffdf8] border border-black/5 shadow-[0_24px_60px_rgba(16,23,20,0.10)] overflow-hidden">
            {[
              { val: "1000+", label: "Projects" },
              { val: "125+", label: "Cities" },
              { val: "75+", label: "Clients" },
              { val: "15+", label: "Years" },
              { val: "115+", label: "Employees" },
              { val: "25K+", label: "Sqft Office" },
            ].map((stat, i) => (
              <div key={i} className="px-5 py-7 sm:py-8 text-center border-b lg:border-b-0 border-black/5 lg:border-r last:border-r-0">
                <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#10221e]">{stat.val}</div>
                <div className="mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-bold text-[#7b8580]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
