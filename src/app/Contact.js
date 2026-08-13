"use client";

import Image from "next/image";
import * as Icon from "react-feather";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function Contact() {
  const router = useRouter();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Silahkan masukkan Nama Lengkap")
      .min(5, "Minimal 5 karakter"),
    email: yup
      .string()
      .required("Silahkan masukkan Email")
      .email("Email tidak valid"),
    message: yup
      .string()
      .required("Silahkan masukkan Pesan atau Pertanyaan")
      .min(10, "Minimal 10 karakter"),
  });

  const {
    register,
    // control,
    // trigger,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: async (values) => {
      reset();

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/contact`,
          { name: values.name, email: values.email, message: values.message }
        );

        // Validasi respons
        if (res.status === 200 && res.data.status) {
          toast.success("Terima kasih telah menghubungi kami");
        } else {
          toast.error(res.data.error || "Terjadi kesalahan");
        }
      } catch (error) {
        toast.error("Terjadi kesalahan saat mengirim pesan");
        console.error("Error fetching data: ", error);
      }
    },
  });

  const handleContact = handleSubmit((values) => {
    mutation.mutate(values);
  });

  return (
    <section id="contact" className="relative py-16 overflow-hidden bg-gray-50">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="lg:me-8">
              <div className="relative">
                {/* <Image
                  src="/images/feature.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                /> */}
                <Image
                  width={0}
                  height={0}
                  src="/images/contact.svg"
                  alt=""
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                {/* <div className="overflow-hidden absolute h-[512px] w-[512px] bg-white -top-[50px] start-0 end-0 align-middle -z-0 rounded-full"></div> */}
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 md:col-span-6">
            <div className="lg:ms-5">
              <div className="p-6 bg-white rounded-md shadow dark:bg-slate-900 dark:shadow-gray-800">
                <h3 className="mb-6 text-2xl font-medium leading-normal">
                  Hubungi Kami
                </h3>

                <form onSubmit={handleContact}>
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="mb-3 lg:col-span-6">
                      <div className="text-start">
                        <label htmlFor="name" className="font-semibold">
                          Nama Lengkap:
                        </label>
                        <div className="relative mt-2 form-icon">
                          <Icon.User className="absolute size-4 top-3 start-4"></Icon.User>
                          <input
                            {...register("name")}
                            name="name"
                            type="text"
                            className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input ps-11 dark:bg-slate-900 dark:text-slate-200 focus:border-blue-800 dark:border-gray-800 dark:focus:border-blue-800 focus:ring-0"
                            placeholder="Nama Lengkap"
                          />
                          {errors?.name?.message && (
                            <div className="mt-2 text-sm italic text-slate-400">
                              {errors?.name?.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mb-3 lg:col-span-6">
                      <div className="text-start">
                        <label htmlFor="email" className="font-semibold">
                          Email:
                        </label>
                        <div className="relative mt-2 form-icon">
                          <Icon.Mail className="absolute size-4 top-3 start-4"></Icon.Mail>
                          <input
                            {...register("email")}
                            name="email"
                            type="email"
                            className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input ps-11 dark:bg-slate-900 dark:text-slate-200 focus:border-blue-800 dark:border-gray-800 dark:focus:border-blue-800 focus:ring-0"
                            placeholder="Email Aktif"
                          />
                          {errors?.email?.message && (
                            <div className="mt-2 text-sm italic text-slate-400">
                              {errors?.email?.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div className="mb-2">
                      <div className="text-start">
                        <label htmlFor="message" className="font-semibold">
                          Pertanyaan:
                        </label>
                        <div className="relative mt-2 form-icon">
                          <Icon.MessageCircle className="absolute size-4 top-3 start-4"></Icon.MessageCircle>
                          <textarea
                            {...register("message")}
                            name="message"
                            className="w-full px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input ps-11 h-28 dark:bg-slate-900 dark:text-slate-200 focus:border-blue-800 dark:border-gray-800 dark:focus:border-blue-800 focus:ring-0"
                            placeholder="Pesan atau pertanyaan"
                          ></textarea>
                          {errors?.message?.message && (
                            <div className="mt-1 mb-2 text-sm italic text-slate-400">
                              {errors?.message?.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {mutation.isPending ? (
                    <button
                      className="flex items-center justify-center px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-gray-600 border border-gray-600 rounded-md"
                      disabled
                    >
                      ...sedang diproses
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center justify-center px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-blue-800 border border-blue-800 rounded-md hover:bg-blue-900 hover:border-blue-900"
                    >
                      Send Message
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container relative mt-16 md:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            {contactData.map((item, index) => {
              let Icons = item.icon;
              return (
                <div className="px-6 text-center" key={index}>
                  <div className="flex items-center justify-center w-20 h-20 mx-auto text-3xl text-blue-800 align-middle shadow-sm bg-blue-800/5 rounded-xl dark:shadow-gray-800">
                    <Icons className="size-[24px]" />
                  </div>

                  <div className="content mt-7">
                    <h5 className="text-xl font-semibold">{item.name}</h5>
                    <p className="mt-3 text-slate-500">{item.desc}</p>

                    <div className="mt-5">
                      <Link href="#" className="font-medium text-blue-800">
                        {item.title}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
    </section>
  );
}
