export default function Services() {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-yellow-400">
          خدماتنا
        </h2>
  
        <div className="mt-10 grid md:grid-cols-3 gap-6 px-6">
  
          <div className="p-6 bg-slate-800 rounded-xl">
            ⚡ تمديدات كهربائية
          </div>
  
          <div className="p-6 bg-slate-800 rounded-xl">
            🔌 لوحات توزيع
          </div>
  
          <div className="p-6 bg-slate-800 rounded-xl">
            🔥 أنظمة إنذار الحريق
          </div>
  
        </div>
      </section>
    );
  }