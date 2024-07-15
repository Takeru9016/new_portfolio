"use client";

import { useState, useEffect } from "react";
import { FileDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Socials, Photo, Stats } from "@/components";
import { client } from "../../sanity/lib/client";

interface Resume {
  title: string;
  resumeFile: {
    asset: {
      _ref: string;
      url: string;
      originalFilename: string;
    };
  };
}

export default function Home() {
  const [resume, setResume] = useState<Resume | null>(null);

  useEffect(() => {
    const fetchResume = async () => {
      const query = `*[_type == "resume"][0]{
        title,
        "resumeFile": {
          "asset": resumeFile.asset->{
            _ref,
            url,
            originalFilename
          }
        }
      }`;
      const result = await client.fetch(query);
      setResume(result);
    };

    fetchResume();
  }, []);

  const handleDownload = () => {
    if (resume && resume.resumeFile && resume.resumeFile.asset) {
      const { url, originalFilename } = resume.resumeFile.asset;
      const downloadUrl = `${url}?dl=${originalFilename}`;
      window.open(downloadUrl, "_blank");
    }
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Sahil Jadhav</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-white/80">
              I excel at building web applications and websites that are fast,
              responsive, and accessible. I am passionate about creating
              user-friendly interfaces and experiences that are easy to use and
              visually appealing.
            </p>

            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
                onClick={handleDownload}
                disabled={!resume}
              >
                <span>Download CV</span>
                <FileDownIcon className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
