import Image from 'next/image';
// لو الصورة عندك محليًا في فولدر public
import heroBg from '@/public/images/herobg.png';
export default function Hero() {
    return ( <section className="relative h-screen flex items-center justify-center text-center">
    

      {/* Background Image */}
      <Image
        src={heroBg}
        alt="Hero Background"
        placeholder="blur" // بيعمل تأثير ضبابي لحد ما الصورة تحمل
        quality={100}
        fill
        sizes="100vw"
        className="object-cover z-0"
        priority // بيخلي المتصفح يحمل الصورة دي فورًا لأنها في أول الصفحة
      />
    
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
    
      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Skyline Electrical & Contracting
        </h1>
    
        <p className="mt-4 text-gray-300 text-lg">
          متخصصون في تنفيذ أعمال الكهرباء والمقاولات بأعلى معايير الجودة
          والأمان، بخبرة عملية في المشاريع السكنية والتجارية والصناعية.
        </p>
    
        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
    
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
            اطلب عرض سعر
          </button>
    
          <button className="border border-white px-8 py-3 rounded-xl text-white hover:bg-white hover:text-black transition">
            شاهد أعمالنا
          </button>
    
        </div>
      </div>
    </section>
    
    
    );
    }
    