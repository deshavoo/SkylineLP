import Image from "next/image";

export default function Clients() {
const clients = [
"/clients/DAWOOD.png",
"/clients/ART LIFE.png",
"/clients/BRT.png",
"/clients/ELRAEID.png",
"/clients/KORRA.png",
"/clients/AGR.png",
"/clients/SIDPIC.png",
];

return ( <section className="section text-center"> <h2 className="heading">شركاء النجاح</h2>


  <p className="text-muted mt-3">
    نفتخر بالتعاون مع كبرى الشركات في مجال المقاولات والطاقة
  </p>

  <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 items-center px-6">
    {clients.map((logo, i) => (
      <div
        key={i}
        className="bg-white/5 p-4 rounded-xl flex items-center justify-center hover:scale-105 transition"
      >
        <Image
          src={logo}
          alt="client"
          width={120}
          height={80}
          className="object-contain grayscale hover:grayscale-0 transition"
        />
      </div>
    ))}
  </div>
</section>


);
}
