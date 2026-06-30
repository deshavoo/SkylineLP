export default function Services() {
  const services = [
  {
  title: "تمديدات كهربائية",
  desc: "تنفيذ جميع أعمال الكهرباء للمشاريع السكنية والتجارية."
  },
  {
  title: "لوحات توزيع",
  desc: "تركيب وصيانة لوحات الكهرباء بجودة عالية."
  },
  {
  title: "أنظمة إنذار",
  desc: "توريد وتركيب أنظمة إنذار الحريق والأمان."
  },
  {
  title: "صيانة وتشغيل",
  desc: "خدمات صيانة دورية وتشغيل للمشاريع."
  },
  ];
  
  return ( <section className="section text-center"> <h2 className="heading">خدماتنا</h2>
  
  ```
    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {services.map((service, i) => (
        <div key={i} className="card group cursor-pointer">
          
          <div className="text-4xl mb-4 group-hover:scale-110 transition">
            ⚡
          </div>
  
          <h3 className="text-xl font-semibold mb-2">
            {service.title}
          </h3>
  
          <p className="text-muted text-sm">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
  
  
  );
  }
  