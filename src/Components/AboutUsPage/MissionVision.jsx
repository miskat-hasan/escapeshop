import React from "react";

const MissionVision = () => {
  return (
    <div className="pt-20 container pb-16 space-y-[110px]">
      {/* our story */}
      <div className="flex max-lg:flex-col items-center gap-8 lg:gap-6 xl:gap-[77px]">
        {/* left side - image */}
        <div className="lg:flex-1 max-w-[622px] w-full h-[300px] sm:h-[350px] lg:h-[415px] rounded-2xl border-[0.4px] border-secondary-100 bg-[url('/about-us/our-story.png')] bg-center bg-cover bg-no-repeat shadow-[0_12px_24px_-4px_rgba(145,158,171,0.16)]" />

        {/* right side - text content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-primary text-4xl md:text-[40px] leading-[120%] font-police">
            Our Story
          </h3>
          <p className="text-[#F9FAFB] text-base font-normal leading-6">
            Founded in 2020, EscapeShop was born from a simple belief: everyone
            deserves access to natural, high-quality herbal products that
            support their wellness journey. We started as a small collective of
            herbalists, wellness advocates, and nature enthusiasts
            <br />
            <br />
            who were frustrated by the lack of transparency and quality in the
            herbal product market. Our mission was clear—to create a trusted
            source for legal, organic herbal smoking alternatives that
            prioritize both quality and customer wellbeing.
            <br />
            <br />
            Today, EscapeShop serves thousands of customers across the country,
            offering carefully sourced, lab-tested herbal products that meet the
            highest standards of quality and safety.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="flex max-lg:flex-col-reverse items-center gap-8 lg:gap-6 xl:gap-[77px]">
        {/* left side - text content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-primary text-4xl md:text-[40px] font-police leading-[120%]">
            Our Mission
          </h3>
          <p className="text-[#F9FAFB] text-base font-normal leading-6">
            To provide safe, legal, and effective herbal smoking alternatives
            that support relaxation, focus, and overall wellness—while
            maintaining the highest standards of quality, transparency, and
            customer care.
            <br />
            <br />
            We believe in the power of nature and are committed to helping
            people discover natural solutions for stress relief, mindfulness,
            and personal wellbeing.
          </p>
        </div>
        {/* right side - image */}
        <div className="lg:flex-1 max-w-[622px] w-full h-[300px] sm:h-[350px] lg:h-[415px] rounded-2xl border-[0.4px] border-secondary-100 bg-[url('/about-us/our-mission.png')] bg-center bg-cover bg-no-repeat shadow-[0_12px_24px_-4px_rgba(145,158,171,0.16)]" />
      </div>

      {/* our vision */}
      <div className="flex max-lg:flex-col items-center gap-8 lg:gap-6 xl:gap-[77px]">
        {/* left side - image */}
        <div className="lg:flex-1 max-w-[622px] w-full h-[300px] sm:h-[350px] lg:h-[415px] rounded-2xl border-[0.4px] border-secondary-100 bg-[url('/about-us/our-vision.png')] bg-center bg-cover bg-no-repeat shadow-[0_12px_24px_-4px_rgba(145,158,171,0.16)]" />

        {/* right side - text content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-primary text-4xl md:text-[40px] font-police leading-[120%]">
            Our Vision
          </h3>
          <p className="text-[#F9FAFB] text-base font-normal leading-6">
            To become the most trusted name in herbal wellness, known for our
            commitment to quality, education, and customer satisfaction.
            <br />
            <br />
            We envision a world where natural herbal remedies are accessible,
            understood, and celebrated for their ability to enhance quality of
            life in a safe and sustainable way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
