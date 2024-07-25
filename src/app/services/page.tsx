"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PortableText } from "@portabletext/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Service } from "../../../sanity.types";
import { client } from "../../../sanity/lib/client";
import { portableTextComponents } from "@/components";

async function fetchServices(): Promise<Service[]> {
  const query = `*[_type == "service"] | order(value asc) {
    _id,
    title,
    value,
    description,
    details,
    imageUrl
  }`;
  return client.fetch(query);
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    fetchServices().then(setServices);
  }, []);

  return (
    <section
      ref={ref}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service._id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="group h-full transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>
                    <span className="text-outline group-hover:text-outline-hover text-4xl font-extrabold transition-all duration-500">
                      {String(service.value).padStart(2, "0")}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {service.imageUrl && (
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      width={400}
                      height={200}
                      className="rounded-md object-cover"
                      loading="lazy"
                    />
                  )}
                  <h2 className="text-3xl font-bold transition-all duration-500 group-hover:text-accent">
                    {service.title}
                  </h2>
                  {service.description && (
                    <div className="text-muted-foreground">
                      <PortableText value={service.description} />
                    </div>
                  )}
                  {service.details && (
                    <div className="space-y-2">
                      <PortableText
                        value={service.details}
                        components={portableTextComponents}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
