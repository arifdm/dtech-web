import Image from "next/image";
import Counter from "./componets/AboutUs/counter";

export default function About() {
  return (
    <section id="about" className="relative bg-gray-50 dark:bg-slate-800">
      <div className="container py-16">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-6">
            <div className="lg:mr-5">
              <h6 className="mb-2 text-sm font-bold text-blue-800 uppercase">
                About Us
              </h6>
              {/* <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal"> */}
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Digitalisasi inovatif dan powerful <br /> bersama Idevos
              </h3>

              <p className="max-w-xl mb-6 text-slate-500">
                Kami adalah perusahaan teknologi informasi yang fokus pada
                pengembangan software aplikasi mobile, web based, desktop,
                penyedia talent digital unggul, produk aplikasi berlangganan,
                serta kolaborasi membangun startup. Dengan pengalaman lebih dari
                10 tahun dalam industri teknologi dan menjalankan startup, kami
                telah bekerja sama dan dipercaya oleh instansi pemerintah dan
                swasta dalam menyediakan solusi digital yang handal dan
                berkualitas.
                <br />
                <br />
                Kami berkomitmen untuk menjadi mitra terpercaya dalam
                menghadirkan solusi teknologi yang inovatif, dengan semangat
                memberdayakan talenta lokal dan memberikan dampak positif bagi
                masyarakat luas dan bisnis Anda.
              </p>

              {/* <Link
                  href="#"
                  className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-blue-800 align-middle transition duration-500 ease-in-out border rounded-full bg-blue-800/5 hover:bg-blue-800 border-blue-800/10 hover:border-blue-800 hover:text-white"
                >
                  Read More
                </Link> */}
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative p-4">
              <Image
                src="/images/landing/meeting.jpg"
                width={0}
                height={0}
                placeholder="blur"
                blurDataURL="/images/landing/meeting.jpg"
                className="rounded-full shadow-lg dark:shadow-gray-800"
                alt=""
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />

              <div className="absolute flex items-center justify-center mx-auto -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 start-0 end-0 lg:size-72 size-56 dark:bg-slate-900 dark:shadow-gray-800">
                <Counter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
