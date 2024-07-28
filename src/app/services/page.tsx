"use client";

import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { BsArrowDownRight, BsX } from "react-icons/bs";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { Service } from "../../../sanity.types";
import { client } from "../../../sanity/lib/client";
import portableTextComponents from "@/components/portableComponents";

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const query = `*[_type == "service"] | order(value asc) {
          _id,
          title,
          value,
          description,
          details,
        }`;
        const fetchedServices = await client.fetch<Service[]>(query);
        setServices(fetchedServices);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.4, ease: "easeIn" }}
        >
          {services.map((service) => (
            <motion.div
              key={service._id}
              className="group flex flex-1 flex-col justify-center gap-6"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                  {String(service.value).padStart(2, "0")}
                </div>

                <Modal>
                  <ModalTrigger>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-500 hover:-rotate-45 group-hover:bg-accent"
                    >
                      <BsArrowDownRight className="text-3xl text-primary" />
                    </button>
                  </ModalTrigger>
                  <ModalBody>
                    <ModalContent className="relative rounded-lg bg-gradient-to-br from-primary to-accent p-8 text-white shadow-xl">
                      {selectedService && (
                        <div className="space-y-6">
                          <h2 className="text-4xl font-bold">
                            {selectedService.title}
                          </h2>

                          {service.description && (
                            <div className="text-lg text-white/80">
                              <PortableText value={service.description || []} />
                            </div>
                          )}

                          <div className="mt-6 rounded-md bg-white/10 p-6">
                            <h3 className="mb-4 text-2xl font-semibold">
                              Service Details
                            </h3>
                            <PortableText
                              value={selectedService.details || []}
                              components={portableTextComponents}
                            />
                          </div>
                        </div>
                      )}
                    </ModalContent>
                  </ModalBody>
                </Modal>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent">
                {service.title}
              </h2>

              {service.description && (
                <div className="text-muted-foreground">
                  <PortableText value={service.description || []} />
                </div>
              )}

              <div className="w-full border-b border-white/20"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
